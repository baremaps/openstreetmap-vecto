export default [
    {
        "id": "tourism",
        "queries": [
          {
            "minzoom": 13,
            "maxzoom": 20,
            "sql": "SELECT id, tags, geom FROM osm_relations WHERE tags ? 'tourism'"
          }
        ]
      } 
]