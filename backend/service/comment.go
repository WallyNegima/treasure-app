package service //一番なんでもしている　jsonをstruct変換したり，repoに指示を流す

import (
	"github.com/jmoiron/sqlx"
	"github.com/pkg/errors"
	"github.com/voyagegroup/treasure-app/dbutil"
	"github.com/voyagegroup/treasure-app/model"
	"github.com/voyagegroup/treasure-app/repository"
)

type Comment struct {
	db *sqlx.DB
}

func NewCommentService(db *sqlx.DB) *Comment {
	return &Comment{db}
}

func (ac *Comment) Create(newComment *model.Comment) (int64, error) {
	_, err := repository.FindArticle(ac.db, newComment.ArticleID)
	if err != nil {
		return 0, err
	}
	var createdId int64
	if err := dbutil.TXHandler(ac.db, func(tx *sqlx.Tx) error {

		result, err := repository.CreateComment(tx, newComment)
		if err != nil {

			return err
		}
		id, err := result.LastInsertId()
		if err != nil {
			return err
		}
		createdId = id
		return err
	}); err != nil {
		return 0, errors.Wrap(err, "failed article insert transaction")
	}
	return createdId, nil
}
