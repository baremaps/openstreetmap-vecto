export default [{
    "id": "amenity_education",
    "type": "fill",
    "filter": [
        "any",
        ["==", "amenity", "kindergarten"],
        ["==", "amenity", "school"],
        ["==", "amenity", "college"],
        ["==", "amenity", "university"]
    ],
    "source": "baremaps",
    "source-layer": "amenity",
    "layout": {
        "visibility": "visible"
    },
    "paint": {
        "fill-color": "rgb(255, 255, 228)",
        "fill-antialias": true
    }
}, {
    "id": "amenity_hospital",
        "type": "fill",
        "filter": [
        "any",
        ["==", "amenity", "hospital"]
    ],
        "source": "baremaps",
        "source-layer": "amenity",
        "layout": {
        "visibility": "visible"
    },
    "paint": {
        "fill-color": "rgb(255, 255, 228)",
            "fill-antialias": true
    }
}, {
    "id": "amenity_grave_yard",
        "type": "fill",
        "filter": [
        "any",
        ["==", "amenity", "grave_yard"]
    ],
        "source": "baremaps",
        "source-layer": "amenity",
        "layout": {
        "visibility": "visible"
    },
    "paint": {
        "fill-color": "rgb(170, 203, 175)",
            "fill-antialias": true
    }
}, {
    "id": "amenity_parking",
        "type": "fill",
        "filter": [
        "any",
        ["==", "amenity", "parking"],
        ["==", "amenity", "motorcycle_parking"]
    ],
        "source": "baremaps",
        "source-layer": "amenity",
        "layout": {
        "visibility": "visible"
    },
    "paint": {
        "fill-color": "rgb(238, 238, 238)",
            "fill-antialias": true,
            "fill-outline-color": "rgb(222, 214, 214)"
    }
}]
