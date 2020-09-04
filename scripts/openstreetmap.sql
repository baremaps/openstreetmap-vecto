
CREATE VIEW osm_simplified_ways AS 
SELECT id, tags, geom
FROM osm_ways
WHERE geom IS NOT NULL AND (
   tags ? 'aeroway' OR 
   tags ? 'amenity' OR 
   tags ? 'boundary' OR 
   tags ? 'amenity' OR 
   tags ? 'building' OR
   tags ? 'highway' OR 
   tags ? 'landuse' OR 
   tags ? 'natural' OR 
   tags ? 'power' OR 
   tags ? 'railway' OR 
   tags ? 'route' OR 
   tags ? 'waterway');

CREATE VIEW osm_simplified_relations AS 
SELECT id, tags, geom
FROM osm_relations
WHERE geom IS NOT NULL AND (
   tags ? 'aeroway' OR 
   tags ? 'amenity' OR 
   tags ? 'boundary' OR 
   tags ? 'amenity' OR 
   tags ? 'building' OR
   tags ? 'highway' OR 
   tags ? 'landuse' OR 
   tags ? 'natural' OR 
   tags ? 'power' OR 
   tags ? 'railway' OR 
   tags ? 'route' OR 
   tags ? 'waterway');

CREATE OR REPLACE FUNCTION osm_simplify_geometry(name text, zoom int, tolerance float) RETURNS void AS $$
BEGIN
    EXECUTE 'DROP MATERIALIZED VIEW IF EXISTS ' || $1 || '_z' || $2;
    EXECUTE 'CREATE MATERIALIZED VIEW ' || $1 || '_z' || $2 || ' AS  SELECT id, tags, st_simplify(geom, ' || $3 || ') as geom FROM ' || $1 || ' WHERE geom IS NOT null AND st_simplify(geom, ' || $3 || ') IS NOT null';
    EXECUTE 'CREATE INDEX IF NOT EXISTS ' || $1 || '_z' || $2 || '_gix ON ' || $1 || '_z' || $2 || ' USING SPGIST(geom)';
    RETURN;
END
$$ LANGUAGE plpgsql;

SELECT osm_simplify_geometry(name, zoom, tolerance) FROM (
    SELECT unnest AS name, generate_series AS zoom, 78271.516953125 / POWER(2, generate_series) AS tolerance
    FROM generate_series(0, 13), unnest(ARRAY['osm_simplified_ways', 'osm_simplified_relations'])
) AS parameters;

