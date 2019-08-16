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

type WorkDetail struct {
	db *sqlx.DB
}

func NewWorkDetail(db *sqlx.DB) *WorkDetail {
	return &WorkDetail{db}
}

func (wl *WorkDetail) Create(w http.ResponseWriter, r *http.Request) (int, interface{}, error) {
	vars := mux.Vars(r)
	id, ok := vars["id"]
	if !ok {
		return http.StatusBadRequest, nil, &httputil.HTTPError{Message: "invalid path parameter"}
	}

	wlid, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		return http.StatusBadRequest, nil, err
	}

	newWorkDetail := &model.WorkDetail{WorkLogId: wlid}
	if err := json.NewDecoder(r.Body).Decode(&newWorkDetail); err != nil {
		return http.StatusBadRequest, nil, err
	}

	workDetailService := service.NewWorkDetail(wl.db)
	createdId, err := workDetailService.Create(newWorkDetail)
	if err != nil {
		return http.StatusInternalServerError, nil, err
	}
	newWorkDetail.ID = createdId
	return http.StatusOK, newWorkDetail, nil
}
