export default [
    {
        "id": "railway_bridge",
        "type": "line",
        "filter": [
            "any",
            ["==", "bridge", "yes"]
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
                "interpolate",
                ["exponential", 1.2],
                ["zoom"],
                4, 0, 20, 22
            ],
            "line-color": "rgb(200, 200, 200)"
        }
    }, {
        "id": "railway_rail",
        "type": "line",
        "filter": [
            "any", 
            ["==", "railway", "rail"],
            ["==", "railway", "funicular"], 
            ["==", "railway", "light_rail"],
            ["==", "railway", "monorail"], 
            ["==", "railway", "tram"],
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
                "interpolate", 
                ["exponential", 1.2], 
                ["zoom"], 
                4, 0, 20, 8
            ],
            "line-color": [
                "case",
                ["has", "service"],
                "rgb(160, 160, 160)",  
                "rgb(80, 80, 80)"
            ],
        }
    }, {
        "id": "railway_light_rail",
        "type": "line",
        "filter": [
            "any", 
            ["==", "railway", "miniature"],
            ["==", "railway", "narrow_gauge"], 
            ["==", "railway", "preserved"],
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
                "interpolate", 
                ["exponential", 1.2], 
                ["zoom"], 
                4, 0, 20, 4
            ],
            "line-color": "rgb(100, 100, 100)"
        }
    }
]
