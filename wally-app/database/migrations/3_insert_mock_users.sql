-- +goose Up
INSERT INTO users (firebase_uid, email, display_name, photo_url)
VALUES
("tekito", "test@test.com", "wally", ""),
("tekitosss", "test2@test.com", "gi-taka", "");

-- +goose Down
DELETE FROM users;