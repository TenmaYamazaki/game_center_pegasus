ALTER TABLE scores DROP COLUMN game_id;
ALTER TABLE scores add game_code VARCHAR(100);
UPDATE scores SET game_code = 'pug';