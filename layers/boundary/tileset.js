export default [
    {
        "id": "boundary",
        "queries": [
          {
            "minzoom": 0,
            "maxzoom": 10,
            "sql": "SELECT id, tags, geom FROM osm_ways WHERE tags ->> 'boundary' IN ('administrative') AND tags ->> 'admin_level' IN ('1', '2')"
          },
          {
            "minzoom": 3,
            "maxzoom": 10,
            "sql": "SELECT id, tags, geom FROM osm_ways WHERE tags ->> 'boundary' IN ('administrative') AND tags ->> 'admin_level' IN ('1', '2', '3', '4')"
          },
          {
            "minzoom": 10,
            "maxzoom": 12,
            "sql": "SELECT id, tags, geom FROM osm_ways_z$zoom WHERE tags ->> 'boundary' IN ('administrative') AND tags ->> 'admin_level' IN ('1', '2', '3', '4', '5', '6')"
          },
          {
            "minzoom": 12,
            "maxzoom": 20,
            "sql": "SELECT id, tags, geom FROM osm_ways_z$zoom WHERE tags ? 'boundary'"
          }
        ]
      }
]