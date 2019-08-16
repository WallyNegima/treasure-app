package controller

import (
	"github.com/jmoiron/sqlx"
	"github.com/voyagegroup/treasure-app/model"
	"github.com/voyagegroup/treasure-app/service"
	"net/http"
)

type WorkLog struct {
	db *sqlx.DB
}

func NewWorkLog(db *sqlx.DB) *WorkLog {
	return &WorkLog{db}
}

func (wl *WorkLog) Create(w http.ResponseWriter, r *http.Request) (int, interface{}, error) {
	newWorkLog := &model.WorkLog{}
	//if err := json.NewDecoder(r.Body).Decode(&newWorkLog); err != nil {
	//	return http.StatusBadRequest, nil, err
	//}

	// TODO: userIdを入れれるようにする
	newWorkLog.UserId = 1

	workLogService := service.NewWorkLog(wl.db)
	id, err := workLogService.Create(newWorkLog)
	if err != nil {
		return http.StatusInternalServerError, nil, err
	}
	newWorkLog.ID = id
	return http.StatusOK, newWorkLog, nil
}
