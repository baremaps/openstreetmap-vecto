export default [
    {
        "id": "natural_tree",
        "type": "circle",
        "filter": ["all", ["==", "natural", "tree"]],
        "source": "baremaps",
        "source-layer": "points",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "circle-color": "rgb(113, 205, 111)",
            "circle-radius": [
                "interpolate", ["exponential", 1], ["zoom"], 14, 0.75,
                15, 1.5, 16, 3, 17, 6, 18, 12
            ]
        }
    }, {
        "id": "natural_trunk",
        "type": "circle",
        "filter": ["all", ["==", "natural", "tree"]],
        "source": "baremaps",
        "source-layer": "points",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "circle-color": "rgb(129, 94, 39)",
            "circle-radius": [
                "interpolate", ["exponential", 1], ["zoom"], 14, 0.25,
                15, 0.5, 16, 1, 17, 2, 18, 4
            ]
        }
    }
]
