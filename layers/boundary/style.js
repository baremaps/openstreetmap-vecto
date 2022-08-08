export default [
    {
        "id": "boundary",
        "type": "line",
        "source": "baremaps",
        "source-layer": "boundary",
        "layout": {
            "line-cap": "round",
            "line-join": "round",
            "visibility": "visible"
        },
        "paint": {
            "line-width": [
                'match',
                ["get", "admin_level"],
                "1", 2,
                "2", 2,
                "3", 1,
                "4", 1,
                0.5
            ],
            "line-color": "rgb(207, 155, 203)",
            "line-dasharray": [8, 2, 2, 2]
        }
    }
]