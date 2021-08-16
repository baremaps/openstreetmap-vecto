CREATE TABLE IF NOT EXISTS styles
(
    id       uuid PRIMARY KEY,
    style    jsonb
);

CREATE TABLE IF NOT EXISTS tilesets
(
    id         uuid PRIMARY KEY,
    tileset    jsonb
);
