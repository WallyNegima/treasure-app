package model

type ArticleComment struct {
	ID int64 `db:"id" json:"id"`
	UserId int64 `db:"user_id" json:"user_id"`
	ArticleId int64 `db:"article_id" json:"article_id"`
	Body string `db:"body" json:"body"`
}
