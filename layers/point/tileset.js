export default {
    "id": "points",
    "queries": [
        {
            "minzoom": 0,
            "maxzoom": 20,
            "sql": "SELECT id, tags, geom FROM osm_nodes_z$zoom WHERE tags != '{}'"
        }
    ]
}
