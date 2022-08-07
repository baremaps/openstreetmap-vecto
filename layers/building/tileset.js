export default [
    {
        "id": "building",
        "queries": [
          {
            "minzoom": 13,
            "maxzoom": 20,
            "sql": "SELECT id, tags, geom FROM osm_ways WHERE tags ? 'building'"
          },
          {
            "minzoom": 13,
            "maxzoom": 20,
            "sql": "SELECT id, tags, geom FROM osm_relations WHERE tags ? 'building'"
          }
        ]
      }
]