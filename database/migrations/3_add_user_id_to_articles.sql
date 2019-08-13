-- +goose Up
ALTER TABLE article ADD column user_id int(10) UNSIGNED NOT NULL;

ALTER TABLE article ADD CONSTRAINT article_fk_user FOREIGN KEY(user_id) REFERENCES user(id);

-- +goose Down
