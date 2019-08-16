package model

type WorkDetail struct {
	ID int64 `db:"id" json:"id"`
	WorkLogId int64 `db:"work_log_id" json:"work_log_id"`
	Count int64 `db:"count" json:"count"`
}
