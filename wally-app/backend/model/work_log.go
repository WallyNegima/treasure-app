package model

import "time"

type WorkLog struct {
	ID int64 `db:"id" json:"id"`
	UserId int64 `db:"user_id" json:"user_id"`
	Ctime time.Time `db:"ctime" json:"ctime"`
}

type WorkLogResponse struct {
	ID int64 `db:"id" json:"id"`
	UserId int64 `db:"user_id" json:"user_id"`
	Ctime time.Time `db:"ctime" json:"ctime"`
	Count int64 `db:"count" json:"count"`
}