export default [
    {
        "id": "highway",
        "queries": [
          {
            "minzoom": 0,
            "maxzoom": 10,
            "sql": "SELECT id, tags, geom FROM osm_ways_z$zoom WHERE tags ->> 'highway' IN ( 'motorway', 'motorway_link',  'trunk',  'primary', 'secondary')"
          },
          {
            "minzoom": 10,
            "maxzoom": 12,
            "sql": "SELECT id, tags, geom FROM osm_ways_z$zoom WHERE tags ->> 'highway' IN ( 'motorway', 'motorway_link', 'trunk', 'trunk_link',  'primary', 'secondary', 'tertiary')"
          },
          {
            "minzoom": 12,
            "maxzoom": 13,
            "sql": "SELECT id, tags, geom FROM osm_ways_z$zoom WHERE tags ->> 'highway' IN ( 'motorway', 'motorway_link',  'trunk', 'trunk_link',  'primary', 'primary_link',  'secondary', 'secondary_link',  'tertiary', 'tertiary_link', 'unclassified', 'residential')"
          },
          {
            "minzoom": 13,
            "maxzoom": 20,
            "sql": "SELECT id, tags, geom FROM osm_ways WHERE tags ? 'highway'"
          },
          {
            "minzoom": 13,
            "maxzoom": 20,
            "sql": "SELECT id, tags, geom FROM osm_relations WHERE tags ? 'highway'"
          }
        ]
      }
]