package controller

import (
	"github.com/jmoiron/sqlx"
	"net/http"
)

type Comment struct {
	dbx *sqlx.DB
}

func NewComment(dbx *sqlx.DB) *Comment {
	return &Comment{dbx: dbx}
}

func (c *Comment) Create(w http.ResponseWriter, r *http.Request) (int, interface{}, error) {
	return http.StatusCreated, nil, nil
}
