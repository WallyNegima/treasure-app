-- +goose Up
ALTER TABLE article ADD column user_id int(10) default NULL;

-- 
-- ALTER TABLE article ADD FOREIGN KEY(user_id) REFERENCES user(id);


-- +goose Down
