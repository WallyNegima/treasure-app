package controller

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/jmoiron/sqlx"
	"github.com/pkg/errors"
	"github.com/voyagegroup/treasure-app/httputil"
	"github.com/voyagegroup/treasure-app/model"
	"github.com/voyagegroup/treasure-app/service"
)

type Comment struct {
	dbx *sqlx.DB
}

func NewComment(dbx *sqlx.DB) *Comment {
	return &Comment{dbx: dbx}
}

func (c *Comment) Create(w http.ResponseWriter, r *http.Request) (int, interface{}, error) {
	vars := mux.Vars(r) //parse
	id, ok := vars["article_id"]
	if !ok {
		return http.StatusBadRequest, nil, &httputil.HTTPError{Message: "invalid path parameter"}
	}

	aid, err := strconv.ParseInt(id, 10, 64)
	createComment := &model.CreateRequestComment{} //for insert values()
	if err := json.NewDecoder(r.Body).Decode(&createComment); err != nil {
		return http.StatusBadRequest, nil, err
	}

	user, err := httputil.GetUserFromContext(r.Context())
	if err != nil {
		return http.StatusInternalServerError, nil, err
	}

	newComment := &model.Comment{}
	newComment.ID = aid
	newComment.UserID = user.ID
	newComment.ArticleID = aid

	commentService := service.NewCommentService(c.dbx)
	createdId, err := commentService.Create(newComment)
	if err != nil && errors.Cause(err) == sql.ErrNoRows {
		return http.StatusNotFound, nil, err
	} else if err != nil {
		return http.StatusInternalServerError, nil, err
	}
	newComment.ID = createdId

	return http.StatusCreated, newComment, nil
}
