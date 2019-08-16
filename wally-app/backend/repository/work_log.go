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