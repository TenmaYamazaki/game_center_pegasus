CREATE TABLE scores (
    score_id SERIAL PRIMARY KEY,
    game_id INTEGER NOT NULL,
    score_score INTEGER NOT NULL,
    score_type VARCHAR(100)
)
