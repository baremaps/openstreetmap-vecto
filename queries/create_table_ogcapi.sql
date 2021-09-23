CREATE TABLE IF NOT EXISTS collections (
    id uuid PRIMARY KEY,
    collection jsonb
);

CREATE TABLE IF NOT EXISTS styles (
    id uuid PRIMARY KEY,
    style jsonb
);

CREATE TABLE IF NOT EXISTS tilesets (
    id uuid PRIMARY KEY,
    tileset jsonb
);
