package service

import (
	"github.com/jmoiron/sqlx"
	"github.com/pkg/errors"
	"github.com/voyagegroup/treasure-app/dbutil"
	"github.com/voyagegroup/treasure-app/model"
	"github.com/voyagegroup/treasure-app/repository"
)

type WorkDetail struct {
	db *sqlx.DB
}

func NewWorkDetail(db *sqlx.DB) *WorkDetail {
	return &WorkDetail{db}
}


func (wd *WorkDetail) Create(newWorkDetail *model.WorkDetail) (int64, error) {
	var createdId int64
	if err := dbutil.TXHandler(wd.db, func(tx *sqlx.Tx) error {
		result, err := repository.CreateWorkDetail(tx, newWorkDetail)
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
		return 0, errors.Wrap(err, "failed your work detail insert transaction")
	}
	return createdId, nil
}

