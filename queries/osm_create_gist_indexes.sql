-- Nodes
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_nodes_gist ON osm_nodes USING GIST (geom);

-- Ways
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_ways_z0_gist ON osm_ways_z0 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_ways_z1_gist ON osm_ways_z1 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_ways_z2_gist ON osm_ways_z2 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_ways_z3_gist ON osm_ways_z3 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_ways_z4_gist ON osm_ways_z4 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_ways_z5_gist ON osm_ways_z5 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_ways_z6_gist ON osm_ways_z6 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_ways_z7_gist ON osm_ways_z7 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_ways_z8_gist ON osm_ways_z8 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_ways_z9_gist ON osm_ways_z9 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_ways_z10_gist ON osm_ways_z10 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_ways_z11_gist ON osm_ways_z11 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_ways_z12_gist ON osm_ways_z12 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_ways_z13_gist ON osm_ways_z13 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_ways_gist ON osm_ways USING GIST (geom);

-- Relations
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_relations_z0_gist ON osm_relations_z0 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_relations_z1_gist ON osm_relations_z1 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_relations_z2_gist ON osm_relations_z2 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_relations_z3_gist ON osm_relations_z3 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_relations_z4_gist ON osm_relations_z4 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_relations_z5_gist ON osm_relations_z5 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_relations_z6_gist ON osm_relations_z6 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_relations_z7_gist ON osm_relations_z7 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_relations_z8_gist ON osm_relations_z8 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_relations_z9_gist ON osm_relations_z9 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_relations_z10_gist ON osm_relations_z10 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_relations_z11_gist ON osm_relations_z11 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_relations_z12_gist ON osm_relations_z12 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_relations_z13_gist ON osm_relations_z13 USING GIST (geom);
CREATE INDEX CONCURRENTLY IF NOT EXISTS osm_relations_gist ON osm_relations USING GIST (geom);