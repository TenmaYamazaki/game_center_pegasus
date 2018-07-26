CREATE TABLE games (
    game_id SERIAL PRIMARY KEY,
    game_name VARCHAR(100) NOT NULL,
    game_code VARCHAR(100) NOT NULL,
    game_phto VARCHAR(100),
    game_desc VARCHAR(100) NOT NULL
)