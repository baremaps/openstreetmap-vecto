export default {
    id: 'aerialway',
    queries: [
        {
            minzoom: 8,
            maxzoom: 12,
            sql:
                "SELECT id, tags, geom FROM osm_ways_z$zoom WHERE tags ? 'aerialway'",
        },
        {
            minzoom: 12,
            maxzoom: 20,
            sql:
                "SELECT id, tags, geom FROM osm_ways_z$zoom WHERE tags ? 'aerialway'",
        },
    ],
}
