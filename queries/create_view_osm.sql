-- Ways
-- 156 412 meter per pixel (on the equator)
CREATE MATERIALIZED VIEW osm_ways_z0 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 0)) AS geom
         FROM osm_ways
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural', 'power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_ways
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 0)) * 10, 2));

CREATE MATERIALIZED VIEW osm_ways_z1 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 1)) AS geom
         FROM osm_ways
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural','power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_ways
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 1)) * 10, 2));

CREATE MATERIALIZED VIEW osm_ways_z2 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 2)) AS geom
         FROM osm_ways
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural','power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_ways
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 2)) * 10, 2));

CREATE MATERIALIZED VIEW osm_ways_z3 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 3)) AS geom
         FROM osm_ways
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural','power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_ways
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 3)) * 10, 2));

CREATE MATERIALIZED VIEW osm_ways_z4 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 4)) AS geom
         FROM osm_ways
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural','power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_ways
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 4)) * 10, 2));

CREATE MATERIALIZED VIEW osm_ways_z5 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 5)) AS geom
         FROM osm_ways
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural','power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_ways
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 5)) * 10, 2));

CREATE MATERIALIZED VIEW osm_ways_z6 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 6)) AS geom
         FROM osm_ways
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural','power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_ways
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 6)) * 10, 2));

CREATE MATERIALIZED VIEW osm_ways_z7 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 7)) AS geom
         FROM osm_ways
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural','power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_ways
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 7)) * 10, 2));

CREATE MATERIALIZED VIEW osm_ways_z8 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 8)) AS geom
         FROM osm_ways
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural','power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_ways
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 8)) * 10, 2));

CREATE MATERIALIZED VIEW osm_ways_z9 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 9)) AS geom
         FROM osm_ways
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural','power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_ways
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 9)) * 10, 2));

CREATE MATERIALIZED VIEW osm_ways_z10 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 10)) AS geom
         FROM osm_ways
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural','power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_ways
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 10)) * 10, 2));

CREATE MATERIALIZED VIEW osm_ways_z11 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 11)) AS geom
         FROM osm_ways
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural','power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_ways
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 11)) * 10, 2));

CREATE MATERIALIZED VIEW osm_ways_z12 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 12)) AS geom
         FROM osm_ways
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural','power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_ways
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 12)) * 10, 2));

CREATE MATERIALIZED VIEW osm_ways_z13 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 13)) AS geom
         FROM osm_ways
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural','power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_ways
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 13)) * 10, 2));


CREATE VIEW osm_ways_z14 AS
SELECT id, tags, geom
FROM osm_ways;
CREATE VIEW osm_ways_z15 AS
SELECT id, tags, geom
FROM osm_ways;
CREATE VIEW osm_ways_z16 AS
SELECT id, tags, geom
FROM osm_ways;
CREATE VIEW osm_ways_z17 AS
SELECT id, tags, geom
FROM osm_ways;
CREATE VIEW osm_ways_z18 AS
SELECT id, tags, geom
FROM osm_ways;
CREATE VIEW osm_ways_z19 AS
SELECT id, tags, geom
FROM osm_ways;
CREATE VIEW osm_ways_z20 AS
SELECT id, tags, geom
FROM osm_ways;

-- Relations

CREATE MATERIALIZED VIEW osm_relations_z0 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 0)) AS geom
         FROM osm_relations
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural','power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_relations
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 0)) * 10, 2));

CREATE MATERIALIZED VIEW osm_relations_z1 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 1)) AS geom
         FROM osm_relations
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural','power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_relations
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 1)) * 10, 2));

CREATE MATERIALIZED VIEW osm_relations_z2 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 2)) AS geom
         FROM osm_relations
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural','power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_relations
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 2)) * 10, 2));

CREATE MATERIALIZED VIEW osm_relations_z3 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 3)) AS geom
         FROM osm_relations
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural','power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_relations
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 3)) * 10, 2));

CREATE MATERIALIZED VIEW osm_relations_z4 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 4)) AS geom
         FROM osm_relations
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural','power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_relations
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 4)) * 10, 2));

CREATE MATERIALIZED VIEW osm_relations_z5 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 5)) AS geom
         FROM osm_relations
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural','power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_relations
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 5)) * 10, 2));

CREATE MATERIALIZED VIEW osm_relations_z6 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 6)) AS geom
         FROM osm_relations
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural','power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_relations
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 6)) * 10, 2));

CREATE MATERIALIZED VIEW osm_relations_z7 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 7)) AS geom
         FROM osm_relations
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural','power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_relations
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 7)) * 10, 2));

CREATE MATERIALIZED VIEW osm_relations_z8 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 8)) AS geom
         FROM osm_relations
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural','power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_relations
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 8)) * 10, 2));

CREATE MATERIALIZED VIEW osm_relations_z9 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 9)) AS geom
         FROM osm_relations
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural','power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_relations
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 9)) * 10, 2));

CREATE MATERIALIZED VIEW osm_relations_z10 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 10)) AS geom
         FROM osm_relations
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural','power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_relations
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 10)) * 10, 2));

CREATE MATERIALIZED VIEW osm_relations_z11 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 11)) AS geom
         FROM osm_relations
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural','power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_relations
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 11)) * 10, 2));

CREATE MATERIALIZED VIEW osm_relations_z12 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 12)) AS geom
         FROM osm_relations
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural','power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_relations
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 12)) * 10, 2));

CREATE MATERIALIZED VIEW osm_relations_z13 AS
SELECT id, tags, geom
FROM (
         SELECT id, tags, st_simplifypreservetopology(geom, 156412 / power(2, 13)) AS geom
         FROM osm_relations
         WHERE tags ?| ARRAY [
             'aeroway', 'amenity', 'boundary', 'amenity', 'highway', 'man_made',
             'landuse', 'natural','power', 'railway', 'route', 'waterway'
             ]
     ) AS osm_relations
WHERE geom IS NOT NULL
  AND (st_area(st_envelope(geom)) > power((156412 / power(2, 13)) * 10, 2));

CREATE VIEW osm_relations_z14 AS
SELECT id, tags, geom
FROM osm_relations;
CREATE VIEW osm_relations_z15 AS
SELECT id, tags, geom
FROM osm_relations;
CREATE VIEW osm_relations_z16 AS
SELECT id, tags, geom
FROM osm_relations;
CREATE VIEW osm_relations_z17 AS
SELECT id, tags, geom
FROM osm_relations;
CREATE VIEW osm_relations_z18 AS
SELECT id, tags, geom
FROM osm_relations;
CREATE VIEW osm_relations_z19 AS
SELECT id, tags, geom
FROM osm_relations;
CREATE VIEW osm_relations_z20 AS
SELECT id, tags, geom
FROM osm_relations;