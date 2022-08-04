export default [
    {
        "id": "building",
        "type": "fill",
        "source": "baremaps",
        "source-layer": "building",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "fill-color": "rgb(216, 208, 201)",
            "fill-antialias": true,
            "fill-outline-color": "rgb(199, 185, 174)",
            "fill-opacity": 0.8
        }
    }, {
        "id": "building_zoo_casing",
        "type": "line",
        "filter": [
            "all", ["==", ["get", "tourism"], "zoo"],
            [">=", ["zoom"], 16]
        ],
        "source": "baremaps",
        "source-layer": "building",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "line-color": "rgba(182, 145, 156, 1)",
            "line-width": [
                "interpolate", ["exponential", 1.2], ["zoom"], 16, 1, 19,
                10
            ]
        }
    }, {
        "id": "building_zoo",
        "type": "line",
        "filter": [
            "all", ["==", ["get", "tourism"], "zoo"],
            [">=", ["zoom"], 16]
        ],
        "source": "baremaps",
        "source-layer": "building",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "line-color": "rgba(145, 79, 107, 1)",
            "line-width": [
                "interpolate", ["exponential", 1.2], ["zoom"], 16, 2, 19,
                3
            ],
            "line-offset": [
                "interpolate", ["exponential", 1.2], ["zoom"], 16, 0,
                19, -3
            ]
        }
    }, {
        "id": "building_number",
        "type": "symbol",
        "source": "baremaps",
        "source-layer": "building",
        "layout": {
            "text-allow-overlap": false,
            "text-anchor": "center",
            "text-field": "{addr:housenumber}",
            "text-font": ["Noto Sans Regular"],
            "text-offset": [0, 0],
            "text-size": [
                "interpolate", ["exponential", 1], ["zoom"], 15, 0, 16,
                11, 20, 11
            ],
            "visibility": "visible"
        },
        "paint": {
            "text-color": "rgb(96,96,96)",
            "text-halo-color": "rgba(255,255,255,0.8)",
            "text-halo-width": 1.2
        }
    },
    {
        "id": "building_number_node",
        "type": "symbol",
        "source": "baremaps",
        "source-layer": "points",
        "layout": {
            "text-allow-overlap": false,
            "text-anchor": "center",
            "text-field": "{addr:housenumber}",
            "text-font": ["Noto Sans Regular"],
            "text-offset": [0, 0],
            "text-size": [
                "interpolate", ["exponential", 1], ["zoom"], 15, 0, 16,
                11, 20, 11
            ],
            "visibility": "visible"
        },
        "paint": {
            "text-color": "rgb(96,96,96)",
            "text-halo-color": "rgba(255,255,255,0.8)",
            "text-halo-width": 1.2
        }
    }
]