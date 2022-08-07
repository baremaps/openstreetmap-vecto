export default [
    {
        "id": "natural",
        "queries": [
          {
            "minzoom": 0,
            "maxzoom": 8,
            "sql": "SELECT row_number() OVER () as id, '{\"natural\":\"water\"}'::jsonb, geometry FROM simplified_water_polygons_shp"
          },
          {
            "minzoom": 8,
            "maxzoom": 20,
            "sql": "SELECT row_number() OVER () as id, '{\"natural\":\"water\"}'::jsonb, geometry FROM water_polygons_shp"
          },
          {
            "minzoom": 8,
            "maxzoom": 12,
            "sql": "SELECT id, tags, geom FROM osm_ways_z$zoom WHERE tags ->> 'natural' IN ('wood', 'scrub', 'heath', 'grassland', 'bare_rock', 'scree', 'shingle', 'sand', 'mud', 'water', 'wetland', 'glacier', 'beach')"
          },
          {
            "minzoom": 8,
            "maxzoom": 12,
            "sql": "SELECT id, tags, geom FROM osm_relations_z$zoom WHERE tags ->> 'natural' IN ('wood', 'scrub', 'heath', 'grassland', 'bare_rock', 'scree', 'shingle', 'sand', 'mud', 'water', 'wetland', 'glacier', 'beach')"
          },
          {
            "minzoom": 12,
            "maxzoom": 20,
            "sql": "SELECT id, tags, geom FROM osm_ways_z$zoom WHERE tags ? 'natural' AND tags ->> 'natural' NOT IN ('coastline')"
          },
          {
            "minzoom": 12,
            "maxzoom": 20,
            "sql": "SELECT id, tags, geom FROM osm_relations_z$zoom WHERE tags ? 'natural' AND tags ->> 'natural' NOT IN ('coastline')"
          }
        ]
      }
]