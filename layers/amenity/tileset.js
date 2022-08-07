export default [
    {
        "id": "amenity",
        "queries": [
          {
            "minzoom": 13,
            "maxzoom": 20,
            "sql": "SELECT id, tags, geom FROM osm_ways WHERE tags ? 'amenity'"
          },
          {
            "minzoom": 13,
            "maxzoom": 20,
            "sql": "SELECT id, tags, geom FROM osm_relations WHERE tags ? 'amenity'"
          }
        ]
      }
]