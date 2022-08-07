export default [
    {
        "id": "railway_bridge",
        "type": "line",
        "filter": ["any", ["==", "bridge", "yes"]],
        "source": "baremaps",
        "source-layer": "railway",
        "layout": {
            "visibility": "visible",
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "line-width": [
                "interpolate", ["exponential", 1.2], ["zoom"], 4, 0, 20,
                24
            ],
            "line-color": "rgb(197, 197, 196)"
        }
    }, {
        "id": "railway_rail_offset",
        "type": "line",
        "filter": [
            "any", ["==", "railway", "rail"],
            ["==", "railway", "funicular"], ["==", "railway", "light_rail"],
            ["==", "railway", "monorail"], ["==", "railway", "tram"],
            ["==", "railway", "subway"]
        ],
        "source": "baremaps",
        "source-layer": "railway",
        "layout": {
            "visibility": "visible",
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "line-width": [
                "interpolate", ["exponential", 1.2], ["zoom"], 4, 0, 20,
                8
            ],
            "line-color": "rgb(112, 112, 112)",
            "line-opacity": ["match", ["get", "service"], "spur", 0.4, 1]
        }
    }, {
        "id": "railway_rail",
        "type": "line",
        "filter": [
            "any", ["==", "railway", "rail"],
            ["==", "railway", "funicular"]
        ],
        "source": "baremaps",
        "source-layer": "railway",
        "layout": {
            "visibility": "visible",
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "line-width": [
                "interpolate", ["exponential", 1.2], ["zoom"], 4, 0, 20,
                6
            ],
            "line-color": "rgb(255, 255, 255)",
            "line-dasharray": [2, 4],
            "line-opacity": ["match", ["get", "service"], "spur", 0.7, 1]
        }
    }, {
        "id": "railway_light_rail",
        "type": "line",
        "filter": [
            "any", ["==", "railway", "miniature"],
            ["==", "railway", "narrow_gauge"], ["==", "railway", "preserved"],
            ["==", "railway", "turntable"]
        ],
        "source": "baremaps",
        "source-layer": "railway",
        "layout": {
            "visibility": "visible",
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "line-width": [
                "interpolate", ["exponential", 1.2], ["zoom"], 4, 0, 20,
                4
            ],
            "line-color": "rgb(102, 102, 102)"
        }
    }
]
