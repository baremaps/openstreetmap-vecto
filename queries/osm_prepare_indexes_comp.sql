-- Prepare the database engine for heavy load when computing indexes
SET max_parallel_maintenance_workers TO 48;
SET maintenance_work_mem TO '128 GB';

ALTER TABLE osm_nodes SET (parallel_workers = 48);
ALTER TABLE osm_ways SET (parallel_workers = 48);
ALTER TABLE osm_relations SET (parallel_workers = 48);

ALTER TABLE osm_ways_z0 SET (parallel_workers = 48);
ALTER TABLE osm_ways_z1 SET (parallel_workers = 48);
ALTER TABLE osm_ways_z2 SET (parallel_workers = 48);
ALTER TABLE osm_ways_z3 SET (parallel_workers = 48);
ALTER TABLE osm_ways_z4 SET (parallel_workers = 48);
ALTER TABLE osm_ways_z5 SET (parallel_workers = 48);
ALTER TABLE osm_ways_z6 SET (parallel_workers = 48);
ALTER TABLE osm_ways_z7 SET (parallel_workers = 48);
ALTER TABLE osm_ways_z8 SET (parallel_workers = 48);
ALTER TABLE osm_ways_z9 SET (parallel_workers = 48);
ALTER TABLE osm_ways_z10 SET (parallel_workers = 48);
ALTER TABLE osm_ways_z11 SET (parallel_workers = 48);
ALTER TABLE osm_ways_z12 SET (parallel_workers = 48);
ALTER TABLE osm_ways_z13 SET (parallel_workers = 48);
ALTER TABLE osm_relations_z0 SET (parallel_workers = 48);
ALTER TABLE osm_relations_z1 SET (parallel_workers = 48);
ALTER TABLE osm_relations_z2 SET (parallel_workers = 48);
ALTER TABLE osm_relations_z3 SET (parallel_workers = 48);
ALTER TABLE osm_relations_z4 SET (parallel_workers = 48);
ALTER TABLE osm_relations_z5 SET (parallel_workers = 48);
ALTER TABLE osm_relations_z6 SET (parallel_workers = 48);
ALTER TABLE osm_relations_z7 SET (parallel_workers = 48);
ALTER TABLE osm_relations_z8 SET (parallel_workers = 48);
ALTER TABLE osm_relations_z9 SET (parallel_workers = 48);
ALTER TABLE osm_relations_z10 SET (parallel_workers = 48);
ALTER TABLE osm_relations_z11 SET (parallel_workers = 48);
ALTER TABLE osm_relations_z12 SET (parallel_workers = 48);
ALTER TABLE osm_relations_z13 SET (parallel_workers = 48);
