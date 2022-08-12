export default {
    "id": "railway",
    "queries": [
        {
            "minzoom": 8,
            "maxzoom": 10,
            "sql": "SELECT id, tags, geom FROM osm_ways_z$zoom WHERE tags ->> 'railway' IN ('rail') AND NOT tags ? 'service'"
        },
        {
            "minzoom": 10,
            "maxzoom": 12,
            "sql": "SELECT id, tags, geom FROM osm_ways_z$zoom WHERE tags ? 'railway' AND NOT tags ? 'service'"
        },
        {
            "minzoom": 12,
            "maxzoom": 20,
            "sql": "SELECT id, tags, geom FROM osm_ways_z$zoom WHERE tags ? 'railway'"
        }
    ]
}
