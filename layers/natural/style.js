export default [
    {
        "id": "natural",
        "type": "fill",
        "filter": [
            "all",
            ["==", "$type", "Polygon"]
        ],
        "source": "baremaps",
        "source-layer": "natural",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "fill-color": [
                "match",
                ["get", "natural"],
                "glacier", "rgb(221, 236, 236)",
                "wood", "rgb(157, 202, 138)",
                "heath", "rgb(214, 217, 159)",
                "grassland", "rgb(207, 236, 177)",
                "bare_rock", "rgb(217, 212, 206)",
                "scree", "rgb(232, 223, 216)",
                "shingle", "rgb(232, 223, 216)",
                "sand", "rgb(240, 229, 196)",
                "rgba(0, 0, 0, 0)"
            ],
            "fill-antialias": true
        }
    }
]
