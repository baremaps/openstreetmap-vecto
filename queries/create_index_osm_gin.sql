CREATE INDEX IF NOT EXISTS osm_ways_gin ON osm_ways USING gin (nodes);
CREATE INDEX IF NOT EXISTS osm_relations_gin ON osm_relations USING gin (member_refs);
