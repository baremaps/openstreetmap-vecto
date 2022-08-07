export default [
    {
        "id": "landuse",
        "type": "fill",
        "source": "baremaps",
        "source-layer": "landuse",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "fill-color": [
                "match",
                ["get", "landuse"],
                "village_green", "rgb(205, 235, 176)",
                "salt_pond", "rgb(170, 211, 223)",
                "religious", "rgb(205, 204, 201)",
                "recreation_ground", "rgb(223, 252, 226)",
                "railway", "rgb(236, 218, 233)",
                "quarry", "rgb(195, 194, 194)",
                "plant_nursery", "rgb(174, 223, 162)",
                "military", "rgb(242, 228, 221)",
                "landfill", "rgb(182, 182, 144)",
                "greenfield", "rgb(242, 238, 232)",
                "garages", "rgb(222, 221, 204)",
                "cemetery", "rgb(170, 203, 175)",
                "brownfield", "rgb(182, 182, 144)",
                "basin", "rgb(170, 211, 223)",
                "vineyard", "rgb(172, 225, 161)",
                "meadow", "rgb(205, 235, 176)",
                "farmyard", "rgb(238, 213, 179)",
                "farmland", "rgb(237, 240, 214)",
                "allotments", "rgb(202, 224, 191)",
                "retail", "rgb(254, 213, 208)",
                "industrial", "rgb(235, 219, 232)",
                "residential", "rgb(225, 225, 225)",
                "construction", "rgb(199, 199, 180)",
                "commercial", "rgb(242, 216, 217)",
                "pedestrian", "rgb(221, 221, 233)",
                "rgba(0, 0, 0, 0)"
            ],
            "fill-antialias": true
        }
    },
    {
        "id": "landuse_overlay",
        "type": "fill",
        "source": "baremaps",
        "source-layer": "landuse",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "fill-color": [
                "match",
                ["get", "landuse"],
                "grass", "rgb(205, 235, 176)",
                "forest", "rgb(171, 210, 156)",
                "greenhouse_horticulture", "rgb(237, 240, 214)",
                "orchard", "rgb(172, 225, 161)",
                "rgba(0, 0, 0, 0)"
            ],
            "fill-antialias": true
        }
    }
]
