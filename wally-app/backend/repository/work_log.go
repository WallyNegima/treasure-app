package repository

import (
	"database/sql"
	"github.com/jmoiron/sqlx"
	"github.com/voyagegroup/treasure-app/model"
)

func CreateWorkLog(db *sqlx.Tx, wl *model.WorkLog) (sql.Result, error) {
	stmt, err := db.Prepare(`
INSERT INTO work_logs (user_id) VALUES (?)
`)
	if err != nil {
		return nil, err
	}
	defer stmt.Close()
	return stmt.Exec(wl.UserId)
}

func MyWorkLogs(db *sqlx.DB, userId int) ([]model.WorkLogResponse, error) {
	wls := make([]model.WorkLogResponse, 0)
	if err := db.Select(&wls, `
SELECT
	wl.id as id,
	wl.user_id as user_id,
	wl.ctime as ctime,
	wd.count as count
FROM
	work_logs wl INNER JOIN work_details wd ON (
		wl.id = wd.work_log_id
	)
WHERE
	wl.user_id = ?
`, userId); err != nil {
		return nil, err
	}

	return wls, nil
}