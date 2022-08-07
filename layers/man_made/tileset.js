export default [
    {
        "id": "man_made",
        "queries": [
          {
            "minzoom": 12,
            "maxzoom": 20,
            "sql": "SELECT id, tags, geom FROM osm_ways_z$zoom WHERE tags ? 'man_made'"
          }
        ]
      }
]