export default [{
    "id": "amenity_overlay",
    "type": "fill",
    "filter": [
        "all",
        ["==", "amenity", "fountain"]
    ],
    "source": "baremaps",
    "source-layer": "amenity",
    "layout": {
        "visibility": "visible"
    },
    "minzoom": 13,
    "paint": {
        "fill-color": "rgb(170, 211, 223)",
        "fill-antialias": true,
        "fill-outline-color": "rgb(170, 211, 223)"
    }
}]