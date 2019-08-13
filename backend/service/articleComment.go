package service

import (
	"github.com/jmoiron/sqlx"
	"github.com/pkg/errors"
	"github.com/voyagegroup/treasure-app/dbutil"
	"github.com/voyagegroup/treasure-app/model"
)

type Comment struct {
	db *sqlx.DB
}

func NewArticleCommentService(db *sqlx.DB) *Comment {
	return &Comment{db}
}

func (c *Comment) Create(newComment *model.ArticleComment) (int64, error) {
	var createdId int64
	if err := dbutil.TXHandler(c.db, func(tx *sqlx.Tx) error {
		return nil
	}); err != nil {
		return 0, errors.Wrap(err, "failed article comment insert transaction")
	}
	return createdId, nil
}