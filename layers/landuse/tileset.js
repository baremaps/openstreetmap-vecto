export default [
    {
        "id": "landuse",
        "queries": [
          {
            "minzoom": 8,
            "maxzoom": 10,
            "sql": "SELECT id, tags, geom FROM osm_ways_z$zoom WHERE tags ->> 'landuse' IN ('farmland', 'forest')"
          },
          {
            "minzoom": 8,
            "maxzoom": 10,
            "sql": "SELECT id, tags, geom FROM osm_relations_z$zoom WHERE tags ->> 'landuse' IN ('farmland', 'forest')"
          },
          {
            "minzoom": 10,
            "maxzoom": 12,
            "sql": "SELECT id, tags, geom FROM osm_ways_z$zoom WHERE tags ->> 'landuse' IN ('farmland', 'forest', 'meadow', 'residential')"
          },
          {
            "minzoom": 10,
            "maxzoom": 12,
            "sql": "SELECT id, tags, geom FROM osm_relations_z$zoom WHERE tags ->> 'landuse' IN ('farmland', 'forest', 'meadow', 'residential')"
          },
          {
            "minzoom": 12,
            "maxzoom": 20,
            "sql": "SELECT id, tags, geom FROM osm_ways_z$zoom WHERE tags ? 'landuse'"
          },
          {
            "minzoom": 12,
            "maxzoom": 20,
            "sql": "SELECT id, tags, geom FROM osm_relations_z$zoom WHERE tags ? 'landuse'"
          }
        ]
      }
]