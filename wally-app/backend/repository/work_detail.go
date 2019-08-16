package repository

import (
	"database/sql"
	"github.com/jmoiron/sqlx"
	"github.com/voyagegroup/treasure-app/model"
)

func CreateWorkDetail(db *sqlx.Tx, wd *model.WorkDetail) (sql.Result, error) {
	stmt, err := db.Prepare(`
INSERT INTO work_details (work_log_id, count) VALUES (?, ?)
`)
	if err != nil {
		return nil, err
	}
	defer stmt.Close()
	return stmt.Exec(wd.WorkLogId, wd.Count)
}