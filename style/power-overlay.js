export default [
    {
        "id": "power_tower",
        "type": "circle",
        "filter": [
            "any", ["==", "power", "tower"], ["==", "power", "pole"],
            ["==", "power", "portal"], ["==", "power", "catenary_mast"]
        ],
        "source": "baremaps",
        "source-layer": "points",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "circle-color": "rgb(171, 171, 171)",
            "circle-radius": [
                "interpolate", ["exponential", 1], ["zoom"], 13, 1,
                14, 2, 15, 3, 16, 4, 17, 5, 18, 6
            ]
        }
    }, {
        "id": "power_cable_line",
        "type": "line",
        "filter": [
            "any", ["==", "power", "cable"], ["==", "power", "line"],
            ["==", "power", "minor_line"]
        ],
        "source": "baremaps",
        "source-layer": "power",
        "layout": {
            "line-cap": "round",
            "line-join": "round",
            "visibility": "visible"
        },
        "paint": {
            "line-width": [
                "interpolate", ["exponential", 1.2], ["zoom"], 4, 0, 20,
                4
            ],
            "line-color": "rgb(171, 171, 171)"
        }
    }
]
