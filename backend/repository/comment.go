package repository //サーバーへのアクセス

import (
	"database/sql"

	"github.com/jmoiron/sqlx"
	"github.com/voyagegroup/treasure-app/model"
)

func CreateComment(db *sqlx.Tx, a *model.Comment) (sql.Result, error) {
	stmt, err := db.Prepare(`
INSERT INTO article (user_id, article_id, body) VALUES (?, ?, ?)
`)
	if err != nil {
		return nil, err
	}

	defer stmt.Close()
	return stmt.Exec(a.UserID, a.ArticleID, a.Body)
}
