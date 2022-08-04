export default [
    {
        "id": "tourism_zoo_casing",
        "type": "line",
        "filter": ["all", ["==", "tourism", "zoo"]],
        "source": "baremaps",
        "source-layer": "tourism",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "line-color": "rgba(182, 145, 156, 1)",
            "line-width": [
                "interpolate", ["exponential", 1.2], ["zoom"], 13, 3, 16,
                3, 19, 10
            ]
        }
    }, {
        "id": "tourism_zoo",
        "type": "line",
        "filter": ["all", ["==", "tourism", "zoo"]],
        "source": "baremaps",
        "source-layer": "tourism",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "line-color": "rgba(145, 79, 107, 1)",
            "line-width": [
                "interpolate", ["exponential", 1.2], ["zoom"], 13, 1, 16,
                2, 19, 3
            ],
            "line-offset": [
                "interpolate", ["exponential", 1.2], ["zoom"], 13, 0,
                19, -5
            ]
        }
    }
]