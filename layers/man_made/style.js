export default [
    {
        "id": "man_made_pier",
        "type": "line",
        "filter": ["all", ["==", "man_made", "pier"]],
        "source": "baremaps",
        "source-layer": "man_made",
        "layout": {
            "visibility": "visible"
        },
        "minzoom": 12,
        "paint": {
            "line-color": "rgb(242, 239, 233)",
            "line-width": [
                "interpolate", ["exponential", 1], ["zoom"], 12, 0.5, 18,
                2
            ]
        }
    }, {
        "id": "man_made_pier_names",
        "type": "symbol",
        "filter": ["all", ["==", "man_made", "pier"]],
        "source": "baremaps",
        "source-layer": "man_made",
        "layout": {
            "text-field": ["get", "name"],
            "text-font": ["Noto Sans Regular"],
            "symbol-placement": "line-center",
            "text-size": [
                "interpolate", ["exponential", 1], ["zoom"], 15, 8, 16,
                11, 20, 11
            ],
            "visibility": "visible"
        },
        "minzoom": 15,
        "paint": {
            "text-halo-color": "rgba(255,255,255,0.8)",
            "text-halo-width": 1.2
        }
    }
]