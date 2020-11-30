-- Ways

CREATE MATERIALIZED VIEW osm_ways_z0 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 0)) as geom
FROM osm_ways
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE MATERIALIZED VIEW osm_ways_z1 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 1)) as geom
FROM osm_ways
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE MATERIALIZED VIEW osm_ways_z2 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 2)) as geom
FROM osm_ways
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE MATERIALIZED VIEW osm_ways_z3 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 3)) as geom
FROM osm_ways
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE MATERIALIZED VIEW osm_ways_z4 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 4)) as geom
FROM osm_ways
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE MATERIALIZED VIEW osm_ways_z5 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 5)) as geom
FROM osm_ways
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE MATERIALIZED VIEW osm_ways_z6 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 6)) as geom
FROM osm_ways
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE MATERIALIZED VIEW osm_ways_z7 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 7)) as geom
FROM osm_ways
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE MATERIALIZED VIEW osm_ways_z8 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 8)) as geom
FROM osm_ways
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE MATERIALIZED VIEW osm_ways_z9 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 9)) as geom
FROM osm_ways
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE MATERIALIZED VIEW osm_ways_z10 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 10)) as geom
FROM osm_ways
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE MATERIALIZED VIEW osm_ways_z11 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 11)) as geom
FROM osm_ways
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE MATERIALIZED VIEW osm_ways_z12 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 12)) as geom
FROM osm_ways
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE MATERIALIZED VIEW osm_ways_z13 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 13)) as geom
FROM osm_ways
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'building', 'highway',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE VIEW osm_ways_z14 AS SELECT id, tags, geom FROM osm_ways;
CREATE VIEW osm_ways_z15 AS SELECT id, tags, geom FROM osm_ways;
CREATE VIEW osm_ways_z16 AS SELECT id, tags, geom FROM osm_ways;
CREATE VIEW osm_ways_z17 AS SELECT id, tags, geom FROM osm_ways;
CREATE VIEW osm_ways_z18 AS SELECT id, tags, geom FROM osm_ways;
CREATE VIEW osm_ways_z19 AS SELECT id, tags, geom FROM osm_ways;
CREATE VIEW osm_ways_z20 AS SELECT id, tags, geom FROM osm_ways;

-- Relations

CREATE MATERIALIZED VIEW osm_relations_z0 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 0)) as geom
FROM osm_relations
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE MATERIALIZED VIEW osm_relations_z1 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 1)) as geom
FROM osm_relations
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE MATERIALIZED VIEW osm_relations_z2 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 2)) as geom
FROM osm_relations
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE MATERIALIZED VIEW osm_relations_z3 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 3)) as geom
FROM osm_relations
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE MATERIALIZED VIEW osm_relations_z4 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 4)) as geom
FROM osm_relations
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE MATERIALIZED VIEW osm_relations_z5 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 5)) as geom
FROM osm_relations
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE MATERIALIZED VIEW osm_relations_z6 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 6)) as geom
FROM osm_relations
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE MATERIALIZED VIEW osm_relations_z7 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 7)) as geom
FROM osm_relations
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE MATERIALIZED VIEW osm_relations_z8 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 8)) as geom
FROM osm_relations
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE MATERIALIZED VIEW osm_relations_z9 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 9)) as geom
FROM osm_relations
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE MATERIALIZED VIEW osm_relations_z10 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 10)) as geom
FROM osm_relations
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE MATERIALIZED VIEW osm_relations_z11 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 11)) as geom
FROM osm_relations
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE MATERIALIZED VIEW osm_relations_z12 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 12)) as geom
FROM osm_relations
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE MATERIALIZED VIEW osm_relations_z13 AS
SELECT id, tags, st_simplify(geom, 78271.516953125 / POWER(2, 13)) as geom
FROM osm_relations
WHERE geom IS NOT NULL 
AND tags ?| ARRAY[
    'aeroway', 'amenity', 'boundary', 'amenity', 'building', 'highway',
    'landuse', 'natural','power', 'railway', 'route', 'waterway'
];

CREATE VIEW osm_relations_z14 AS SELECT id, tags, geom FROM osm_relations;
CREATE VIEW osm_relations_z15 AS SELECT id, tags, geom FROM osm_relations;
CREATE VIEW osm_relations_z16 AS SELECT id, tags, geom FROM osm_relations;
CREATE VIEW osm_relations_z17 AS SELECT id, tags, geom FROM osm_relations;
CREATE VIEW osm_relations_z18 AS SELECT id, tags, geom FROM osm_relations;
CREATE VIEW osm_relations_z19 AS SELECT id, tags, geom FROM osm_relations;
CREATE VIEW osm_relations_z20 AS SELECT id, tags, geom FROM osm_relations;