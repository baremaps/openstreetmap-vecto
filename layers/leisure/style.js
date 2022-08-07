export default [
    {
        "id": "leisure_park",
        "type": "fill",
        "filter": [
            "all",
            ["==", "leisure", "park"],
            ["==", "$type", "Polygon"]
        ],
        "source": "baremaps",
        "source-layer": "leisure",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "fill-color": "rgb(200, 250, 204)",
            "fill-antialias": true
        }
    },
    {
        "id": "leisure",
        "type": "fill",
        "filter": ["==", "$type", "Polygon"],
        "source": "baremaps",
        "source-layer": "leisure",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "fill-color": [
                "match",
                ["get", "leisure"],
                "swimming_pool", "rgb(170, 211, 223)",
                "sports_centre", "rgb(223, 252, 226)",
                "miniature_golf", "rgb(181, 226, 181)",
                "marina", "rgb(181, 208, 208)",
                "ice_rink", "rgb(221, 236, 236)",
                "golf_course", "rgb(181, 226, 181)",
                "garden", "rgb(205, 235, 176)",
                "dog_park", "rgb(224, 252, 227)",
                "playground", "rgb(223, 252, 226)",
                "track", "rgb(196, 224, 203)",
                "stadium", "rgb(223, 252, 226)",
                "rgba(0, 0, 0, 0)"
            ],
            "fill-outline-color": [
                "match",
                ["get", "leisure"],
                "swimming_pool", "rgb(120, 183, 202)",
                "marina", "rgb(164, 187, 212)",
                "ice_rink", "rgb(140, 220, 189)",
                "playground", "rgb(164, 221, 169)",
                "rgba(0, 0, 0, 0)"
            ],
            "fill-antialias": true
        }
    }, {
        "id": "leisure_overlay",
        "type": "fill",
        "filter": ["all"],
        "source": "baremaps",
        "source-layer": "leisure",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "fill-color": [
                "match",
                ["get", "leisure"],
                "pitch", "rgb(170, 224, 203)",
                "swimming_pool", "rgb(170, 211, 223)",
                "rgba(0, 0, 0, 0)"
            ],
            "fill-outline-color": [
                "match",
                ["get", "leisure"],
                "pitch", "rgb(151, 212, 186)",
                "swimming_pool", "rgb(120, 183, 202)",
                "rgba(0, 0, 0, 0)"
            ],
            "fill-antialias": true
        }
    }, {
        "id": "leisure_nature_reserve",
        "type": "line",
        "filter": [
            "all",
            ["==", "leisure", "nature_reserve"]
        ],
        "source": "baremaps",
        "source-layer": "leisure",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "line-width": 5,
            "line-color": "rgba(230, 233, 222, 0.5)"
        }
    }
]
