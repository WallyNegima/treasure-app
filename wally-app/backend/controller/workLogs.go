package controller

import (
	"github.com/jmoiron/sqlx"
	"net/http"
)

type WorkLog struct {
	db *sqlx.DB
}

func NewWorkLog(db *sqlx.DB) *WorkLog {
	return &WorkLog{db}
}

func (wl *WorkLog) Create(w http.ResponseWriter, r *http.Request) (int, interface{}, error) {
	return http.StatusOK, nil, nil
}
