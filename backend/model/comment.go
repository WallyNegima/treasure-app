package model

type CreateRequestComment struct {
	Body string `json:"body`
}

type ResponseCreateComment struct {
}

type Comment struct {
	ID        int64     `db:"id" json:"id"`
	Body      string    `db:"body" json:"body"`
	ArticleID int64     `db:"article_id" json:"article_id"`
	UserID    int64     `db:"user_id" json:"user_id"`
	Comment   []Comment `json:"comment"`
}
