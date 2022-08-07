export default [
    {
        "id": "power",
        "queries": [
          {
            "minzoom": 8,
            "maxzoom": 10,
            "sql": "SELECT id, tags, geom FROM osm_ways_z$zoom WHERE tags ->> 'power' IN ('cable', 'line')"
          },
          {
            "minzoom": 10,
            "maxzoom": 12,
            "sql": "SELECT id, tags, geom FROM osm_ways_z$zoom WHERE tags ->> 'power' IN ('cable', 'line', 'minor_line')"
          },
          {
            "minzoom": 12,
            "maxzoom": 20,
            "sql": "SELECT id, tags, geom FROM osm_ways_z$zoom WHERE tags ->> 'power' IN ('cable', 'line', 'minor_line', 'plant', 'substation')"
          }
        ]
      }
]