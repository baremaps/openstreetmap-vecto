CREATE INDEX IF NOT EXISTS osm_simplified_water_polygons_gix ON osm_simplified_water_polygons USING SPGIST(geometry);
CREATE INDEX IF NOT EXISTS osm_water_polygons_gix ON osm_water_polygons USING SPGIST(geometry);
