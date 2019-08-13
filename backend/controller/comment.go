package controller

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"github.com/jmoiron/sqlx"
	"github.com/voyagegroup/treasure-app/httputil"
	"github.com/voyagegroup/treasure-app/model"
	"github.com/voyagegroup/treasure-app/service"
	"net/http"
	"strconv"
)

type Comment struct {
	dbx *sqlx.DB
}

func NewComment(dbx *sqlx.DB) *Comment {
	return &Comment{dbx: dbx}
}

func (c *Comment) Create(w http.ResponseWriter, r *http.Request) (int, interface{}, error) {
	vars := mux.Vars(r)
	id, ok := vars["id"]
	if !ok {
		return http.StatusBadRequest, nil, &httputil.HTTPError{Message: "invalid path parameter"}
	}

	articleId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		return http.StatusBadRequest, nil, err
	}

	newComment := &model.ArticleComment{}
	if err :=json.NewDecoder(r.Body).Decode(&newComment); err != nil {
		return http.StatusBadRequest, nil, err
	}

	user, err := httputil.GetUserFromContext(r.Context())
	if err != nil {
		return http.StatusBadRequest, nil, err
	}
	newComment.UserId = user.ID
	newComment.ArticleId = articleId

	articleCommentService := service.NewArticleCommentService(c.dbx)
	createdCommentId, err := articleCommentService.Create(newComment)
	if err != nil {
		return http.StatusInternalServerError, nil, err
	}
	newComment.ID = createdCommentId

	return http.StatusCreated, newComment, nil
}
