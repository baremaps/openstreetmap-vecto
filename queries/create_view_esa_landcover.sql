CREATE INDEX IF NOT EXISTS esa_landcover_import_spgist ON esa_landcover_import USING SPGIST (wkb_geometry);

CREATE MATERIALIZED VIEW esa_landcover AS
-- WebMercator does not support coordinates located at the poles
WITH extent AS (
    SELECT st_geomfromtext('POLYGON((-180 -85.0511, -180 85.0511, 180 85.0511, 180 -85.0511, -180 -85.0511))', 4326) as extent
)
-- Merge the geometries that touch each other and have the same property
SELECT
       a.ogc_fid,
       a.dn,
       st_transform(st_intersection(st_setsrid(
            CASE WHEN b.wkb_geometry IS NULL 
                THEN st_makevalid(a.wkb_geometry)
                ELSE st_makevalid(st_union(a.wkb_geometry, b.wkb_geometry))
            END, 4326), extent.extent), 3857) as wkb_geometry
FROM esa_landcover_import AS a LEFT JOIN esa_landcover_import AS b ON (
    a.dn = b.dn AND
    st_touches(a.wkb_geometry, b.wkb_geometry) AND
    a.ogc_fid != b.ogc_fid
), extent;



CREATE INDEX IF NOT EXISTS esa_landcover_spgist ON esa_landcover USING SPGIST (wkb_geometry);
