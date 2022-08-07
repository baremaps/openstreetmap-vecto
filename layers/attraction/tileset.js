export default [
    {
        "id": "attraction",
        "queries": [
          {
            "minzoom": 13,
            "maxzoom": 20,
            "sql": "SELECT id, tags, geom FROM osm_ways WHERE tags ? 'attraction'"
          }
        ]
    }
]