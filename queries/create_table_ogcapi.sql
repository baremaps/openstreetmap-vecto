create table if not exists collections (
    id uuid primary key,
    title text,
    description text,
    links jsonb[],
    extent jsonb,
    item_type text default 'feature',
    crs text[]
);


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

