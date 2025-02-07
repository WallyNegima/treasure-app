package model

type Article struct {
	ID    int64  `db:"id" json:"id"`
	Title string `db:"title" json:"title"`
	Body  string `db:"body" json:"body"`
	UserId *int64 `db:"user_id" json:"user_id"`
	Comments *[]ArticleComment `db:"comments" json:"comments"`
}
