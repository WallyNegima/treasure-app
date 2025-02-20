-- +goose Up
CREATE TABLE article_comment (
  id int(10) UNSIGNED AUTO_INCREMENT,
  user_id int(10) UNSIGNED NOT NULL,
  article_id int(10) UNSIGNED NOT NULL,
  body VARCHAR(255),
  ctime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  utime TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY(id),
  CONSTRAINT comment_fk_user FOREIGN KEY(user_id) REFERENCES user(id),
  CONSTRAINT comment_fk_article FOREIGN KEY(article_id) REFERENCES article(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- +goose Down
DROP TABLE article_comment;