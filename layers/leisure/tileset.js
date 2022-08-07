export default [
    {
        "id": "leisure",
        "queries": [
          {
            "minzoom": 13,
            "maxzoom": 20,
            "sql": "SELECT id, tags, geom FROM osm_ways WHERE tags ? 'leisure'"
          },
          {
            "minzoom": 13,
            "maxzoom": 20,
            "sql": "SELECT id, tags, geom FROM osm_relations WHERE tags ? 'leisure'"
          }
        ]
      }
]