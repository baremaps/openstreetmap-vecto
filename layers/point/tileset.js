export default {
    "id": "points",
    "queries": [
        {
            "minzoom": 10,
            "maxzoom": 20,
            "sql": "SELECT id, tags, geom FROM osm_node_z$zoom WHERE tags != '{}'"
        }
    ]
}
