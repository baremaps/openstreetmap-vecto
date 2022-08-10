export default [
    {
        "id": "barrier",
        "queries": [
          {
            "minzoom": 13,
            "maxzoom": 20,
            "sql": "SELECT id, tags, geom FROM osm_ways_z$zoom WHERE tags ? 'barrier'"
          }
        ]
    }
]