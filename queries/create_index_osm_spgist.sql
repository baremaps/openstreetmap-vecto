-- Nodes
CREATE INDEX IF NOT EXISTS osm_nodes_spgist ON osm_nodes USING SPGIST (geom);

-- Ways
CREATE INDEX IF NOT EXISTS osm_ways_spgist ON osm_ways USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_ways_z0_spgist ON osm_ways_z0 USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_ways_z1_spgist ON osm_ways_z1 USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_ways_z2_spgist ON osm_ways_z2 USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_ways_z3_spgist ON osm_ways_z3 USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_ways_z4_spgist ON osm_ways_z4 USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_ways_z5_spgist ON osm_ways_z5 USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_ways_z6_spgist ON osm_ways_z6 USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_ways_z7_spgist ON osm_ways_z7 USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_ways_z8_spgist ON osm_ways_z8 USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_ways_z9_spgist ON osm_ways_z9 USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_ways_z10_spgist ON osm_ways_z10 USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_ways_z11_spgist ON osm_ways_z11 USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_ways_z12_spgist ON osm_ways_z12 USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_ways_z13_spgist ON osm_ways_z13 USING SPGIST (geom);

-- Relations
CREATE INDEX IF NOT EXISTS osm_relations_spgist ON osm_relations USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_relations_z0_spgist ON osm_relations_z0 USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_relations_z1_spgist ON osm_relations_z1 USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_relations_z2_spgist ON osm_relations_z2 USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_relations_z3_spgist ON osm_relations_z3 USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_relations_z4_spgist ON osm_relations_z4 USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_relations_z5_spgist ON osm_relations_z5 USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_relations_z6_spgist ON osm_relations_z6 USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_relations_z7_spgist ON osm_relations_z7 USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_relations_z8_spgist ON osm_relations_z8 USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_relations_z9_spgist ON osm_relations_z9 USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_relations_z10_spgist ON osm_relations_z10 USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_relations_z11_spgist ON osm_relations_z11 USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_relations_z12_spgist ON osm_relations_z12 USING SPGIST (geom);
CREATE INDEX IF NOT EXISTS osm_relations_z13_spgist ON osm_relations_z13 USING SPGIST (geom);
