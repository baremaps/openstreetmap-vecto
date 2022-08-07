export default [
    {
        "id": "points",
        "queries": [
          {
            "minzoom": 2,
            "maxzoom": 3,
            "sql": "SELECT id, tags, geom FROM osm_nodes WHERE tags != '{}' AND tags ->> 'place' IN ('country')"
          },
          {
            "minzoom": 3,
            "maxzoom": 4,
            "sql": "SELECT id, tags, geom FROM osm_nodes WHERE tags != '{}' AND tags ->> 'place' IN ('country', 'city', 'sea')"
          },
          {
            "minzoom": 4,
            "maxzoom": 8,
            "sql": "SELECT id, tags, geom FROM osm_nodes WHERE tags != '{}' AND tags ->> 'place' IN ('country', 'city', 'sea', 'state', 'county')"
          },
          {
            "minzoom": 8,
            "maxzoom": 10,
            "sql": "SELECT id, tags, geom FROM osm_nodes WHERE tags != '{}' AND tags ->> 'place' IN ('country', 'state', 'region', 'province', 'district', 'county', 'municipality', 'city', 'town')"
          },
          {
            "minzoom": 10,
            "maxzoom": 11,
            "sql": "SELECT id, tags, geom FROM osm_nodes WHERE tags != '{}' AND (tags ->> 'place' IN ('country', 'state', 'region', 'province', 'district', 'county', 'municipality', 'city', 'town')) OR (tags ->> 'natural' IN ('peak', 'volcano')) OR (tags ->> 'highway' IN ('motorway_junction'))"
          },
          {
            "minzoom": 11,
            "maxzoom": 12,
            "sql": "SELECT id, tags, geom FROM osm_nodes WHERE tags != '{}' AND (tags ->> 'place' IN ('country', 'state', 'region', 'province', 'district', 'county', 'municipality', 'city', 'town', 'village')) OR (tags ->> 'natural' IN ('peak', 'volcano')) OR (tags ->> 'highway' IN ('motorway_junction'))"
          },
          {
            "minzoom": 12,
            "maxzoom": 13,
            "sql": "SELECT id, tags, geom FROM osm_nodes WHERE tags != '{}' AND (tags ->> 'place' IN ('region', 'province', 'district', 'county', 'municipality', 'city', 'town', 'village')) OR (tags ->> 'natural' IN ('peak', 'volcano')) OR (tags ->> 'highway' IN ('motorway_junction')) OR (tags ->> 'tourism' IN ('wilderness_hut')) OR (tags ->> 'waterway' IN ('waterfall'))"
          },
          {
            "minzoom": 13,
            "maxzoom": 14,
            "sql": "SELECT id, tags, geom FROM osm_nodes WHERE tags != '{}' AND (tags ->> 'place' IN ('region', 'province', 'district', 'county', 'municipality', 'city', 'town', 'village', 'quarter', 'hamlet')) OR (tags ->> 'natural' IN ('peak', 'volcano')) OR (tags ->> 'highway' IN ('motorway_junction')) OR (tags ->> 'tourism' IN ('wilderness_hut')) OR (tags ->> 'waterway' IN ('waterfall')) OR (tags ->> 'natural' IN ('spring')) OR (tags ->> 'railway' IN ('level_crossing'))"
          },
          {
            "minzoom": 14,
            "maxzoom": 15,
            "sql": "SELECT id, tags, geom FROM osm_nodes WHERE tags != '{}' AND tags ->> 'place' IN ('village', 'quarter', 'hamlet', 'neighborhood', 'isolated_dwelling')"
          },
          {
            "minzoom": 15,
            "maxzoom": 16,
            "sql": "SELECT id, tags, geom FROM osm_nodes WHERE tags != '{}' AND tags ->> 'place' IN ('hamlet', 'neighborhood', 'isolated_dwelling')"
          },
          {
            "minzoom": 16,
            "maxzoom": 18,
            "sql": "SELECT id, tags, geom FROM osm_nodes WHERE tags != '{}' AND tags ->> 'place' IN ('neighborhood', 'isolated_dwelling', 'islet')"
          },
          {
            "minzoom": 14,
            "maxzoom": 20,
            "sql": "SELECT id, tags, geom FROM osm_nodes WHERE tags != '{}'"
          }
        ]
      }
]