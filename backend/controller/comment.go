package controller

import (
	"encoding/json"
	"github.com/jmoiron/sqlx"
	"github.com/voyagegroup/treasure-app/httputil"
	"github.com/voyagegroup/treasure-app/model"
	"github.com/voyagegroup/treasure-app/service"
	"net/http"
)

type Comment struct {
	dbx *sqlx.DB
}

func NewComment(dbx *sqlx.DB) *Comment {
	return &Comment{dbx: dbx}
}

func (c *Comment) Create(w http.ResponseWriter, r *http.Request) (int, interface{}, error) {
	newComment := &model.ArticleComment{}
	if err :=json.NewDecoder(r.Body).Decode(&newComment); err != nil {
		return http.StatusBadRequest, nil, err
	}

	user, err := httputil.GetUserFromContext(r.Context())
	if err != nil {
		return http.StatusBadRequest, nil, err
	}
	newComment.UserId = user.ID

	articleCommentService := service.NewArticleCommentService(c.dbx)
	id, err := articleCommentService.Create(newComment)
	if err != nil {
		return http.StatusInternalServerError, nil, err
	}
	newComment.ID = id

	return http.StatusCreated, newComment, nil
}
