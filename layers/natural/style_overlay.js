export default  [{
    "id": "natural_overlay",
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
            "match", ["get", "natural"],
            "beach", "rgb(255, 241, 186)",
            "water", "rgb(170, 211, 223)",
            "wetland", "rgba(184, 224,189, .5)",
            "scrub", "rgb(201, 216, 173)",
            "rgba(0, 0, 0, 0)"
        ],
        "fill-antialias": true
    }
}]
