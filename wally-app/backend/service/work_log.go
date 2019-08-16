package service

import (
	"github.com/jmoiron/sqlx"
	"github.com/pkg/errors"
	"github.com/voyagegroup/treasure-app/dbutil"
	"github.com/voyagegroup/treasure-app/model"
	"github.com/voyagegroup/treasure-app/repository"
)

type WorkLog struct {
	db *sqlx.DB
}

func NewWorkLog(db *sqlx.DB) *WorkLog {
	return &WorkLog{db}
}

func (wl *WorkLog) Create(newWorkLog *model.WorkLog) (int64, error) {
	var createdId int64
	if err := dbutil.TXHandler(wl.db, func(tx *sqlx.Tx) error {
		result, err := repository.CreateWorkLog(tx, newWorkLog)
		if err != nil {
			return err
		}
		if err := tx.Commit(); err != nil {
			return err
		}
		id, err := result.LastInsertId()
		if err != nil {
			return err
		}
		createdId = id
		return err
	}); err != nil {
		return 0, errors.Wrap(err, "failed your work log insert transaction")
	}
	return createdId, nil
}