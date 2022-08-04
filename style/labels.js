export default [{
    "id": "dormitory_labels",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "building"], "dormitory"], [">=", ["zoom"], 16]],
    "source": "baremaps",
    "source-layer": "building",
    "layout": {
        "visibility": "visible",
        "text-font": ["Noto Sans Regular"],
        "text-field": ["get", "name"],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 16, 9, 17, 10, 18, 11],
        "text-max-width": 4
    },
    "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 0.8
    }
}, {
    "id": "quarry_labels",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "landuse"], "quarry"], [">=", ["zoom"], 16]],
    "source": "baremaps",
    "source-layer": "landuse",
    "layout": {
        "visibility": "visible",
        "text-font": ["Noto Sans Italic"],
        "text-field": ["get", "name"],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 16, 12, 17, 14, 18, 16],
        "text-max-width": 4
    },
    "paint": {
        "text-color": "rgba(71, 69, 69, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 0.8
    }
}, {
    "id": "building_school_labels",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "building"], "school"], [">=", ["zoom"], 16]],
    "source": "baremaps",
    "source-layer": "building",
    "layout": {
        "visibility": "visible",
        "text-font": ["Noto Sans Regular"],
        "text-field": ["get", "name"],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 16, 9, 17, 10, 18, 11],
        "text-max-width": 4
    },
    "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 0.8
    }
}, {
    "id": "building_labels",
    "type": "symbol",
    "filter": ["all", ["any", ["==", ["get", "building"], "hospital"], ["==", ["get", "building"], "yes"]], ["!", ["has", "amenity"]], ["!", ["has", "historic"]], [">=", ["zoom"], 16]],
    "source": "baremaps",
    "source-layer": "building",
    "layout": {
        "visibility": "visible",
        "text-font": ["Noto Sans Regular"],
        "text-field": ["get", "name"],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 16, 9, 17, 10, 18, 11],
        "text-max-width": 4
    },
    "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 0.8
    }
}, {
    "id": "social_facility_labels",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "amenity"], "social_facility"], [">=", ["zoom"], 16]],
    "source": "baremaps",
    "source-layer": "amenity",
    "layout": {
        "visibility": "visible",
        "icon-image": ["get", "amenity"],
        "icon-size": 1,
        "icon-anchor": "bottom",
        "icon-allow-overlap": true,
        "text-font": ["Noto Sans Regular"],
        "text-field": ["get", "name"],
        "text-size": 11,
        "text-max-width": 4,
        "text-anchor": "top",
        "text-optional": true
    },
    "paint": {
        "text-color": "rgba(115, 74, 9, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 0.8,
        "icon-color": "rgba(115, 74, 9, 1)",
        "icon-halo-color": "rgba(255, 255, 255, 0.8)",
        "icon-halo-width": 1
    }
}, {
    "id": "pitch_labels",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "leisure"], "pitch"], [">=", ["zoom"], 15]],
    "source": "baremaps",
    "source-layer": "leisure",
    "layout": {
        "visibility": "visible",
        "text-font": ["Noto Sans Italic"],
        "text-field": ["get", "name"],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 15, 10, 17, 16],
        "text-max-width": 4
    },
    "paint": {
        "text-color": "rgba(77, 153, 122, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 0.8
    }
}, {
    "id": "theatre_labels",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "amenity"], "theatre"], [">=", ["zoom"], 16]],
    "source": "baremaps",
    "source-layer": "amenity",
    "layout": {
        "visibility": "visible",
        "icon-image": ["get", "amenity"],
        "icon-size": 1,
        "icon-anchor": "bottom",
        "icon-allow-overlap": true,
        "text-font": ["Noto Sans Regular"],
        "text-field": ["get", "name"],
        "text-size": 11,
        "text-max-width": 4,
        "text-anchor": "top",
        "text-optional": true
    },
    "paint": {
        "text-color": "rgba(115, 74, 9, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 0.8,
        "icon-color": "rgba(115, 74, 9, 1)",
        "icon-halo-color": "rgba(255, 255, 255, 0.8)",
        "icon-halo-width": 1
    }
}, {
    "id": "community_centre_labels",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "amenity"], "community_centre"], [">=", ["zoom"], 16]],
    "source": "baremaps",
    "source-layer": "amenity",
    "layout": {
        "visibility": "visible",
        "icon-image": ["get", "amenity"],
        "icon-size": 1,
        "icon-anchor": "bottom",
        "icon-allow-overlap": true,
        "text-font": ["Noto Sans Regular"],
        "text-field": ["get", "name"],
        "text-size": 11,
        "text-max-width": 4,
        "text-anchor": "top",
        "text-optional": true
    },
    "paint": {
        "text-color": "rgba(115, 74, 9, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 0.8,
        "icon-color": "rgba(115, 74, 9, 1)",
        "icon-halo-color": "rgba(255, 255, 255, 0.8)",
        "icon-halo-width": 1
    }
}, {
    "id": "sports_hall_labels",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "leisure"], "sports_hall"], [">=", ["zoom"], 16]],
    "source": "baremaps",
    "source-layer": "leisure",
    "layout": {
        "visibility": "visible",
        "text-font": ["Noto Sans Regular"],
        "text-field": ["get", "name"],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 16, 10, 17, 14],
        "text-max-width": 4
    },
    "paint": {
        "text-color": "rgba(103, 103, 102, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 0.8
    }
}, {
    "id": "school_labels",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "amenity"], "school"], [">=", ["zoom"], 15]],
    "source": "baremaps",
    "source-layer": "amenity",
    "layout": {
        "visibility": "visible",
        "text-font": ["Noto Sans Italic"],
        "text-field": ["get", "name"],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 15, 9, 17, 14],
        "text-max-width": 4
    },
    "paint": {
        "text-color": "rgba(101, 101, 41, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 0.8
    }
}, {
    "id": "college_labels",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "amenity"], "college"], [">=", ["zoom"], 15]],
    "source": "baremaps",
    "source-layer": "amenity",
    "layout": {
        "visibility": "visible",
        "text-font": ["Noto Sans Italic"],
        "text-field": ["get", "name"],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 15, 10, 17, 14],
        "text-max-width": 4
    },
    "paint": {
        "text-color": "rgba(101, 101, 41, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 0.8
    }
}, {
    "id": "courthouse_labels",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "amenity"], "courthouse"], [">=", ["zoom"], 15]],
    "source": "baremaps",
    "source-layer": "amenity",
    "layout": {
        "visibility": "visible",
        "icon-image": ["get", "amenity"],
        "icon-size": 1,
        "icon-anchor": "bottom",
        "icon-allow-overlap": true,
        "text-font": ["Noto Sans Regular"],
        "text-field": ["get", "name"],
        "text-size": 11,
        "text-max-width": 4,
        "text-anchor": "top",
        "text-optional": true
    },
    "paint": {
        "text-color": "rgba(115, 74, 9, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 0.8,
        "icon-color": "rgba(115, 74, 9, 1)",
        "icon-halo-color": "rgba(255, 255, 255, 0.8)",
        "icon-halo-width": 1
    }
}, {
    "id": "parking_labels",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "amenity"], "parking"], [">=", ["zoom"], 15]],
    "source": "baremaps",
    "source-layer": "amenity",
    "layout": {
        "visibility": "visible",
        "icon-image": ["get", "amenity"],
        "icon-size": 1,
        "icon-anchor": "bottom",
        "text-font": ["Noto Sans Regular"],
        "text-field": ["get", "name"],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 15, 9, 18, 11],
        "text-anchor": "top",
        "text-optional": true,
        "text-max-width": 4
    },
    "paint": {
        "text-color": "rgba(33, 118, 254, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 0.8,
        "icon-color": "rgba(3, 146, 218, 1)",
        "icon-halo-color": "rgba(255, 255, 255, 0.8)",
        "icon-halo-width": 1
    }
}, {
    "id": "industrial_labels",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "landuse"], "industrial"], [">=", ["zoom"], 14]],
    "source": "baremaps",
    "source-layer": "landuse",
    "layout": {
        "visibility": "visible",
        "text-font": ["Noto Sans Italic"],
        "text-field": ["get", "name"],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 14, 10, 17, 16],
        "text-max-width": 4
    },
    "paint": {
        "text-color": "rgba(149, 89, 139, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 0.8
    }
}, {
    "id": "poi",
    "type": "symbol",
    "filter": ["case", ["in", ["get", "natural"], ["literal", ["peak", "volcano"]]], [">=", ["zoom"], 10], ["any", ["==", ["get", "tourism"], "wilderness_hut"]], [">=", ["zoom"], 12], ["any", ["==", ["get", "railway"], "level_crossing"], ["==", ["get", "natural"], "spring"]], [">=", ["zoom"], 13], ["any", ["in", ["get", "amenity"], ["literal", ["clinic", "hospital"]]], ["==", ["get", "natural"], "saddle"], ["has", "historic"]], [">=", ["zoom"], 14], ["any", ["==", ["get", "amenity"], "ice_cream"], ["in", ["get", "tourism"], ["literal", ["museum", "viewpoint"]]], ["==", ["get", "waterway"], "waterfall"]], [">=", ["zoom"], 15], ["any", ["==", ["get", "highway"], "elevator"], ["==", ["get", "man_made"], "mast"]], [">=", ["zoom"], 17], [">=", ["zoom"], 16]],
    "source": "baremaps",
    "source-layer": "points",
    "layout": {
        "icon-image": ["case", ["has", "amenity"], ["get", "amenity"], ["has", "historic"], ["get", "historic"], ["has", "highway"], ["get", "highway"], ["has", "leisure"], ["get", "leisure"], ["has", "man_made"], ["get", "man_made"], ["has", "military"], ["get", "military"], ["has", "natural"], ["get", "natural"], ["has", "railway"], ["get", "railway"], ["has", "tourism"], ["get", "tourism"], ["has", "waterway"], ["get", "waterway"], ""],
        "icon-size": 1,
        "icon-anchor": "bottom",
        "text-font": ["case", ["==", ["get", "amenity"], "school"], ["literal", ["Noto Sans Italic"]], ["literal", ["Noto Sans Regular"]]],
        "text-size": 11,
        "text-field": ["get", "name"],
        "text-anchor": "top",
        "visibility": "visible",
        "text-optional": true,
        "text-max-width": 5
    },
    "paint": {
        "text-color": ["case", ["==", ["get", "amenity"], "ice_cream"], "rgba(199, 116, 0, 1)", ["in", ["get", "amenity"], ["literal", ["driving_school", "ferry_terminal", "library", "bicycle_repair_station", "car_wash", "vehicle_inspection", "bank", "bureau_de_change", "social_facility", "arts_centre", "casino", "cinema", "community_centre", "nightclub", "public_bookcase", "theatre", "courthouse", "firestation", "police", "post_box", "post_office", "prison", "townhall", "bbq", "bench", "drinking_water", "shelter", "shower", "telephone", "toilets", "recycling", "waste_basket", "waste_disposal", "internet_cafe", "public_bath"]]], "rgba(115, 74, 10, 1)", ["in", ["get", "amenity"], ["literal", ["kick-scooter_rental", "bicycle_parking", "bicycle_rental", "boat_rental", "bus_station", "car_rental", "taxi"]]], "rgba(0, 146, 218, 1)", ["in", ["get", "amenity"], ["literal", ["clinic", "dentist", "doctors", "hospital", "veterinary"]]], "rgba(191, 0, 0, 1)", ["==", ["get", "amenity"], "fountain"], "rgba(87, 104, 236, 1)", ["==", ["get", "amenity"], "marketplace"], "rgba(172, 57, 172, 1)", ["in", ["get", "historic"], ["literal", ["archaeological_site", "caslte", "fort", "manor", "memorial", "monument"]]], "rgba(115, 74, 10, 1)", ["in", ["get", "historic"], ["literal", ["city_gate", "wayside_shrine"]]], "rgba(85, 85, 85, 1)", ["in", ["get", "highway"], ["literal", ["bus_stop", "elevator"]]], "rgba(0, 146, 218, 1)", ["in", ["get", "leisure"], ["literal", ["amusement_arcade", "beach_resort", "bird_hide", "bowling_alley", "fishing", "miniature_golf", "outdoor_seating", "playground", "sauna", "water_park"]]], "rgba(14, 133, 24, 1)", ["==", ["get", "leisure"], "firepit"], "rgba(115, 74, 10, 1)", ["==", ["get", "leisure"], "picnic_table"], "rgba(102, 102, 102, 1)", ["==", ["get", "leisure"], "slipway"], "rgba(0, 146, 218, 1)", ["in", ["get", "man_made"], ["literal", ["chimney", "communications_tower"]]], "rgba(85, 85, 85, 1)", ["in", ["get", "man_made"], ["literal", ["crane", "lighthouse", "mast", "storage_tank", "water_tower", "windmill"]]], "rgba(102, 102, 102, 1)", ["==", ["get", "man_made"], "obelisk"], "rgba(115, 74, 10, 1)", ["==", ["get", "man_made"], "cross"], "rgba(0, 0, 0, 1)", ["==", ["get", "military"], "bunker"], "rgba(85, 85, 85, 1)", ["==", ["get", "natural"], "spring"], "rgba(122, 188, 236, 1)", ["in", ["get", "natural"], ["literal", ["peak", "saddle"]]], "rgba(207, 143, 86, 1)", ["==", ["get", "natural"], "volcano"], "rgba(211, 0, 0, 1)", ["==", ["get", "railway"], "level_crossing"], "rgba(77, 77, 77, 1)", ["in", ["get", "tourism"], ["literal", ["apartment", "chalet", "wilderness_hut"]]], "rgba(3, 146, 218, 1)", ["in", ["get", "tourism"], ["literal", ["artwork", "museum", "viewpoint"]]], "rgba(115, 74, 9, 1)", ["==", ["get", "waterway"], "waterfall"], "rgba(77, 128, 179, 1)", ["==", ["get", "amenity"], "school"], "rgba(101, 101, 41, 1)", ["==", ["get", "tourism"], "attraction"], "rgba(102, 0, 51, 1)", "rgba(199, 116, 0, 1)"],
        "icon-color": ["case", ["==", ["get", "amenity"], "ice_cream"], "rgba(199, 116, 0, 1)", ["in", ["get", "amenity"], ["literal", ["driving_school", "ferry_terminal", "library", "bicycle_repair_station", "car_wash", "vehicle_inspection", "bank", "bureau_de_change", "social_facility", "arts_centre", "casino", "cinema", "community_centre", "nightclub", "public_bookcase", "theatre", "courthouse", "firestation", "police", "post_box", "post_office", "prison", "townhall", "bbq", "bench", "drinking_water", "shelter", "shower", "telephone", "toilets", "recycling", "waste_basket", "waste_disposal", "internet_cafe", "public_bath"]]], "rgba(115, 74, 10, 1)", ["in", ["get", "amenity"], ["literal", ["kick-scooter_rental", "bicycle_parking", "bicycle_rental", "boat_rental", "bus_station", "car_rental", "taxi"]]], "rgba(0, 146, 218, 1)", ["in", ["get", "amenity"], ["literal", ["clinic", "dentist", "doctors", "hospital", "veterinary"]]], "rgba(191, 0, 0, 1)", ["==", ["get", "amenity"], "fountain"], "rgba(87, 104, 236, 1)", ["==", ["get", "amenity"], "marketplace"], "rgba(172, 57, 172, 1)", ["in", ["get", "historic"], ["literal", ["archaeological_site", "caslte", "fort", "manor", "memorial", "monument"]]], "rgba(115, 74, 10, 1)", ["in", ["get", "historic"], ["literal", ["city_gate", "wayside_shrine"]]], "rgba(85, 85, 85, 1)", ["in", ["get", "highway"], ["literal", ["bus_stop", "elevator"]]], "rgba(0, 146, 218, 1)", ["in", ["get", "leisure"], ["literal", ["amusement_arcade", "beach_resort", "bird_hide", "bowling_alley", "fishing", "miniature_golf", "outdoor_seating", "playground", "sauna", "water_park"]]], "rgba(14, 133, 24, 1)", ["==", ["get", "leisure"], "firepit"], "rgba(115, 74, 10, 1)", ["==", ["get", "leisure"], "picnic_table"], "rgba(102, 102, 102, 1)", ["==", ["get", "leisure"], "slipway"], "rgba(0, 146, 218, 1)", ["in", ["get", "man_made"], ["literal", ["chimney", "communications_tower"]]], "rgba(85, 85, 85, 1)", ["in", ["get", "man_made"], ["literal", ["crane", "lighthouse", "mast", "storage_tank", "water_tower", "windmill"]]], "rgba(102, 102, 102, 1)", ["==", ["get", "man_made"], "obelisk"], "rgba(115, 74, 10, 1)", ["==", ["get", "man_made"], "cross"], "rgba(0, 0, 0, 1)", ["==", ["get", "military"], "bunker"], "rgba(85, 85, 85, 1)", ["==", ["get", "natural"], "spring"], "rgba(122, 188, 236, 1)", ["in", ["get", "natural"], ["literal", ["peak", "saddle"]]], "rgba(207, 143, 86, 1)", ["==", ["get", "natural"], "volcano"], "rgba(211, 0, 0, 1)", ["==", ["get", "railway"], "level_crossing"], "rgba(77, 77, 77, 1)", ["in", ["get", "tourism"], ["literal", ["apartment", "chalet", "wilderness_hut"]]], "rgba(3, 146, 218, 1)", ["in", ["get", "tourism"], ["literal", ["artwork", "museum", "viewpoint"]]], "rgba(115, 74, 9, 1)", ["==", ["get", "waterway"], "waterfall"], "rgba(77, 128, 179, 1)", "rgba(199, 116, 0, 1)"],
        "icon-opacity": 1,
        "icon-translate-anchor": "map",
        "icon-halo-color": "rgba(255, 255, 255, 0.8)",
        "icon-halo-width": 1,
        "text-halo-width": 1,
        "text-halo-color": "rgba(255, 255, 255, 0.8)"
    }
}, {
    "id": "poi_cafes",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "amenity"], "cafe"], [">=", ["zoom"], 15]],
    "source": "baremaps",
    "source-layer": "points",
    "layout": {
        "icon-image": "cafe",
        "icon-size": 1,
        "icon-anchor": "bottom",
        "text-font": ["Noto Sans Regular"],
        "text-size": 11,
        "text-field": ["get", "name"],
        "text-anchor": "top",
        "visibility": "visible",
        "text-optional": true,
        "text-max-width": 5
    },
    "paint": {
        "text-color": "rgba(199, 116, 0, 1)",
        "icon-color": "rgba(199, 116, 0, 1)",
        "icon-opacity": 1,
        "icon-translate-anchor": "map",
        "icon-halo-color": "rgba(255, 255, 255, 0.8)",
        "icon-halo-width": 1,
        "text-halo-width": 1,
        "text-halo-color": "rgba(255, 255, 255, 0.8)"
    }
}, {
    "id": "poi_atm",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "amenity"], "atm"], [">=", ["zoom"], 16]],
    "source": "baremaps",
    "source-layer": "points",
    "layout": {
        "icon-image": "atm",
        "icon-size": 1,
        "icon-anchor": "bottom",
        "text-font": ["Noto Sans Regular"],
        "text-size": 11,
        "text-field": ["get", "name"],
        "text-anchor": "top",
        "visibility": "visible",
        "text-optional": true,
        "text-max-width": 5
    },
    "paint": {
        "text-color": "rgba(115, 74, 10, 1)",
        "icon-color": "rgba(115, 74, 10, 1)",
        "icon-opacity": 1,
        "icon-translate-anchor": "map",
        "icon-halo-color": "rgba(255, 255, 255, 0.8)",
        "icon-halo-width": 1,
        "text-halo-width": 1,
        "text-halo-color": "rgba(255, 255, 255, 0.8)"
    }
}, {
    "id": "poi_fuel_charging",
    "type": "symbol",
    "filter": ["all", ["in", ["get", "amenity"], ["literal", ["charging_station", "fuel"]]], [">=", ["zoom"], 16]],
    "source": "baremaps",
    "source-layer": "points",
    "layout": {
        "icon-image": ["get", "amenity"],
        "icon-size": 1,
        "icon-anchor": "bottom",
        "text-font": ["Noto Sans Regular"],
        "text-size": 11,
        "text-field": ["get", "name"],
        "text-anchor": "top",
        "visibility": "visible",
        "text-optional": true,
        "text-max-width": 5
    },
    "paint": {
        "text-color": "rgba(0, 146, 218, 1)",
        "icon-color": "rgba(0, 146, 218, 1)",
        "icon-opacity": 1,
        "icon-translate-anchor": "map",
        "icon-halo-color": "rgba(255, 255, 255, 0.8)",
        "icon-halo-width": 1,
        "text-halo-width": 1,
        "text-halo-color": "rgba(255, 255, 255, 0.8)"
    }
}, {
    "id": "poi_parkings",
    "type": "symbol",
    "filter": ["all", ["any", ["all", ["==", ["get", "amenity"], "parking_entrance"], ["==", ["get", "parking"], "underground"]], ["in", ["get", "amenity"], ["literal", ["parking", "motorcycle_parking"]]]], [">=", ["zoom"], 16]],
    "source": "baremaps",
    "source-layer": "points",
    "layout": {
        "icon-image": ["get", "amenity"],
        "icon-size": 1,
        "icon-anchor": "bottom",
        "text-font": ["Noto Sans Regular"],
        "text-size": 11,
        "text-field": ["get", "name"],
        "text-anchor": "top",
        "visibility": "visible",
        "text-optional": true,
        "text-max-width": 5
    },
    "paint": {
        "text-color": "rgba(0, 146, 218, 1)",
        "icon-color": "rgba(0, 146, 218, 1)",
        "icon-opacity": 1,
        "icon-translate-anchor": "map",
        "icon-halo-color": "rgba(255, 255, 255, 0.8)",
        "icon-halo-width": 1,
        "text-halo-width": 1,
        "text-halo-color": "rgba(255, 255, 255, 0.8)"
    }
}, {
    "id": "poi_hotels",
    "type": "symbol",
    "filter": ["all", ["in", ["get", "tourism"], ["literal", ["guest_house", "hostel", "hotel", "motel"]]], [">=", ["zoom"], 16]],
    "source": "baremaps",
    "source-layer": "points",
    "layout": {
        "icon-image": ["get", "tourism"],
        "icon-size": 1,
        "icon-anchor": "bottom",
        "text-font": ["Noto Sans Regular"],
        "text-size": 11,
        "text-field": ["get", "name"],
        "text-anchor": "top",
        "visibility": "visible",
        "text-optional": true,
        "text-max-width": 5
    },
    "paint": {
        "text-color": "rgba(3, 146, 218, 1)",
        "icon-color": "rgba(3, 146, 218, 1)",
        "icon-opacity": 1,
        "icon-translate-anchor": "map",
        "icon-halo-color": "rgba(255, 255, 255, 0.8)",
        "icon-halo-width": 1,
        "text-halo-width": 1,
        "text-halo-color": "rgba(255, 255, 255, 0.8)"
    }
}, {
    "id": "poi_shops",
    "type": "symbol",
    "filter": ["any", ["all", ["in", ["get", "shop"], ["literal", ["department_store", "supermarket"]]], [">=", ["zoom"], 15]], ["all", ["in", ["get", "shop"], ["literal", ["alcohol", "bakery", "beverages", "butcher", "coffee", "confectionery", "convenience", "deli", "dairy", "greengrocer", "tea", "department_store", "supermarket", "bag", "clothes", "fabric", "jewelry", "shoes", "charity", "second_hand", "variety_store", "beauty", "chemist", "hairdresser", "medical_supply", "optician", "perfumery", "florist", "garden_centre", "houseware", "paint", "trade", "bed", "carpet", "furniture", "interior_decoration", "computer", "electronics", "hifi", "mobile_phone", "bicycle", "boat", "car", "car_repair", "motorcycle", "outdoor", "sports", "tyres", "art", "music", "musical_instrument", "photo", "video", "video_games", "gift", "newsagent", "stationery", "ticket", "bookmaker", "copyshop", "laundry", "pet", "tobacco", "toys", "travel_agency", "massage"]]], [">=", ["zoom"], 17]]],
    "source": "baremaps",
    "source-layer": "points",
    "layout": {
        "icon-image": ["get", "shop"],
        "icon-size": 1,
        "icon-anchor": "bottom",
        "text-font": ["Noto Sans Regular"],
        "text-size": 11,
        "text-field": ["get", "name"],
        "text-anchor": "top",
        "visibility": "visible",
        "text-optional": true,
        "text-max-width": 5
    },
    "paint": {
        "text-color": ["case", ["in", ["get", "shop"], ["literal", ["alcohol", "bakery", "beverages", "butcher", "coffee", "confectionery", "convenience", "deli", "dairy", "greengrocer", "tea", "department_store", "supermarket", "bag", "clothes", "fabric", "jewelry", "shoes", "charity", "second_hand", "variety_store", "beauty", "chemist", "hairdresser", "medical_supply", "optician", "perfumery", "florist", "garden_centre", "houseware", "paint", "trade", "bed", "carpet", "furniture", "interior_decoration", "computer", "electronics", "hifi", "mobile_phone", "bicycle", "boat", "car", "car_repair", "motorcycle", "outdoor", "sports", "tyres", "art", "music", "musical_instrument", "photo", "video", "video_games", "gift", "newsagent", "stationery", "ticket", "bookmaker", "copyshop", "laundry", "pet", "tobacco", "toys", "travel_agency"]]], "rgba(172, 57, 172, 1)", ["==", ["get", "shop"], "massage"], "rgba(14, 133, 24, 1)", "rgba(199, 116, 0, 1)"],
        "icon-color": ["case", ["in", ["get", "shop"], ["literal", ["alcohol", "bakery", "beverages", "butcher", "coffee", "confectionery", "convenience", "deli", "dairy", "greengrocer", "tea", "department_store", "supermarket", "bag", "clothes", "fabric", "jewelry", "shoes", "charity", "second_hand", "variety_store", "beauty", "chemist", "hairdresser", "medical_supply", "optician", "perfumery", "florist", "garden_centre", "houseware", "paint", "trade", "bed", "carpet", "furniture", "interior_decoration", "computer", "electronics", "hifi", "mobile_phone", "bicycle", "boat", "car", "car_repair", "motorcycle", "outdoor", "sports", "tyres", "art", "music", "musical_instrument", "photo", "video", "video_games", "gift", "newsagent", "stationery", "ticket", "bookmaker", "copyshop", "laundry", "pet", "tobacco", "toys", "travel_agency"]]], "rgba(172, 57, 172, 1)", ["==", ["get", "shop"], "massage"], "rgba(14, 133, 24, 1)", "rgba(199, 116, 0, 1)"],
        "icon-opacity": 1,
        "icon-translate-anchor": "map",
        "icon-halo-color": "rgba(255, 255, 255, 0.8)",
        "icon-halo-width": 1,
        "text-halo-width": 1,
        "text-halo-color": "rgba(255, 255, 255, 0.8)"
    }
}, {
    "id": "poi_restaurants",
    "type": "symbol",
    "filter": ["all", ["in", ["get", "amenity"], ["literal", ["restaurant", "food_court"]]], [">=", ["zoom"], 15]],
    "source": "baremaps",
    "source-layer": "points",
    "layout": {
        "icon-image": "restaurant",
        "icon-size": 1,
        "icon-anchor": "bottom",
        "text-font": ["Noto Sans Regular"],
        "text-size": 11,
        "text-field": ["get", "name"],
        "text-anchor": "top",
        "visibility": "visible",
        "text-optional": true,
        "text-max-width": 5
    },
    "paint": {
        "text-color": "rgba(199, 116, 0, 1)",
        "icon-color": "rgba(199, 116, 0, 1)",
        "icon-opacity": 1,
        "icon-translate-anchor": "map",
        "icon-halo-color": "rgba(255, 255, 255, 0.8)",
        "icon-halo-width": 1,
        "text-halo-width": 1,
        "text-halo-color": "rgba(255, 255, 255, 0.8)"
    }
}, {
    "id": "poi_fast-food",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "amenity"], "fast_food"], [">=", ["zoom"], 15]],
    "source": "baremaps",
    "source-layer": "points",
    "layout": {
        "icon-image": "fast_food",
        "icon-size": 1,
        "icon-anchor": "bottom",
        "text-font": ["Noto Sans Regular"],
        "text-size": 11,
        "text-field": ["get", "name"],
        "text-anchor": "top",
        "visibility": "visible",
        "text-optional": true,
        "text-max-width": 5
    },
    "paint": {
        "text-color": "rgba(199, 116, 0, 1)",
        "icon-color": "rgba(199, 116, 0, 1)",
        "icon-opacity": 1,
        "icon-translate-anchor": "map",
        "icon-halo-color": "rgba(255, 255, 255, 0.8)",
        "icon-halo-width": 1,
        "text-halo-width": 1,
        "text-halo-color": "rgba(255, 255, 255, 0.8)"
    }
}, {
    "id": "poi_bars/pubs",
    "type": "symbol",
    "filter": ["all", ["in", ["get", "amenity"], ["literal", ["bar", "biergarten", "pub"]]], [">=", ["zoom"], 15]],
    "source": "baremaps",
    "source-layer": "points",
    "layout": {
        "icon-image": ["get", "amenity"],
        "icon-size": 1,
        "icon-anchor": "bottom",
        "text-font": ["Noto Sans Regular"],
        "text-size": 11,
        "text-field": ["get", "name"],
        "text-anchor": "top",
        "visibility": "visible",
        "text-optional": true,
        "text-max-width": 5
    },
    "paint": {
        "text-color": "rgba(199, 116, 0, 1)",
        "icon-color": "rgba(199, 116, 0, 1)",
        "icon-opacity": 1,
        "icon-translate-anchor": "map",
        "icon-halo-color": "rgba(255, 255, 255, 0.8)",
        "icon-halo-width": 1,
        "text-halo-width": 1,
        "text-halo-color": "rgba(255, 255, 255, 0.8)"
    }
}, {
    "id": "poi_pharmacies",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "amenity"], "pharmacy"], [">=", ["zoom"], 16]],
    "source": "baremaps",
    "source-layer": "points",
    "layout": {
        "icon-image": "pharmacy",
        "icon-size": 1,
        "icon-anchor": "bottom",
        "text-font": ["Noto Sans Regular"],
        "text-size": 11,
        "text-field": ["get", "name"],
        "text-anchor": "top",
        "visibility": "visible",
        "text-optional": true,
        "text-max-width": 5
    },
    "paint": {
        "text-color": "rgba(191, 0, 0, 1)",
        "icon-color": "rgba(191, 0, 0, 1)",
        "icon-opacity": 1,
        "icon-translate-anchor": "map",
        "icon-halo-color": "rgba(255, 255, 255, 0.8)",
        "icon-halo-width": 1,
        "text-halo-width": 1,
        "text-halo-color": "rgba(255, 255, 255, 0.8)"
    }
}, {
    "id": "zoo_labels",
    "type": "symbol",
    "filter": ["all", ["==", "tourism", "zoo"]],
    "source": "baremaps",
    "source-layer": "tourism",
    "layout": {
        "visibility": "visible",
        "text-font": ["Noto Sans Bold"],
        "text-field": ["get", "name"],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 13, 12, 16, 16, 18, 20]
    },
    "paint": {
        "text-color": "rgba(102, 0, 51, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 1
    }
}, {
    "id": "monument_labels",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "historic"], "monument"], [">=", ["zoom"], 15]],
    "source": "baremaps",
    "source-layer": "building",
    "layout": {
        "visibility": "visible",
        "icon-image": ["get", "historic"],
        "icon-size": 1,
        "icon-anchor": "bottom",
        "icon-allow-overlap": true,
        "text-font": ["Noto Sans Regular"],
        "text-field": ["get", "name"],
        "text-size": 11,
        "text-max-width": 4,
        "text-anchor": "top",
        "text-optional": true
    },
    "paint": {
        "text-color": "rgba(115, 74, 9, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 0.8,
        "icon-color": "rgba(115, 74, 9, 1)",
        "icon-halo-color": "rgba(255, 255, 255, 0.8)",
        "icon-halo-width": 1
    }
}, {
    "id": "cemetery_labels",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "landuse"], "cemetery"], [">=", ["zoom"], 15]],
    "source": "baremaps",
    "source-layer": "landuse",
    "layout": {
        "visibility": "visible",
        "text-font": ["Noto Sans Italic"],
        "text-field": ["get", "name"],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 15, 10, 17, 16],
        "text-max-width": 4
    },
    "paint": {
        "text-color": "rgba(69, 95, 72, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 0.8
    }
}, {
    "id": "forest_labels",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "landuse"], "forest"], [">=", ["zoom"], 15]],
    "source": "baremaps",
    "source-layer": "landuse",
    "layout": {
        "visibility": "visible",
        "text-font": ["Noto Sans Italic"],
        "text-field": ["get", "name"],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 15, 12, 17, 16],
        "text-max-width": 4
    },
    "paint": {
        "text-color": "rgba(89, 111, 82, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 0.8
    }
}, {
    "id": "stadium_labels",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "leisure"], "stadium"], [">=", ["zoom"], 15]],
    "source": "baremaps",
    "source-layer": "leisure",
    "layout": {
        "visibility": "visible",
        "text-font": ["Noto Sans Italic"],
        "text-field": ["get", "name"],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 15, 9, 17, 16],
        "text-max-width": 4
    },
    "paint": {
        "text-color": "rgba(23, 117, 31, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 0.8
    }
}, {
    "id": "park_labels",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "leisure"], "park"], [">=", ["zoom"], 14]],
    "source": "baremaps",
    "source-layer": "leisure",
    "layout": {
        "visibility": "visible",
        "text-font": ["Noto Sans Italic"],
        "text-field": ["get", "name"],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 14, 10, 17, 18],
        "text-max-width": 4
    },
    "paint": {
        "text-color": "rgba(31, 143, 40, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 0.8
    }
}, {
    "id": "hospital_labels",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "amenity"], "hospital"], [">=", ["zoom"], 14]],
    "source": "baremaps",
    "source-layer": "amenity",
    "layout": {
        "visibility": "visible",
        "icon-image": ["get", "amenity"],
        "icon-size": 1,
        "icon-anchor": "bottom",
        "text-font": ["Noto Sans Regular"],
        "text-field": ["step", ["zoom"], "", 14, "", 15, ["get", "name"]],
        "text-size": 11,
        "text-max-width": 4,
        "text-anchor": "top",
        "text-optional": true
    },
    "paint": {
        "text-color": "rgba(191, 3, 1, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 0.8,
        "icon-color": "rgba(191, 3, 1, 1)",
        "icon-halo-color": "rgba(255, 255, 255, 0.8)",
        "icon-halo-width": 1
    }
}, {
    "id": "motorway_junction_ref",
    "type": "symbol",
    "filter": ["all", ["==", "highway", "motorway_junction"]],
    "source": "baremaps",
    "source-layer": "points",
    "layout": {
        "visibility": "visible",
        "text-font": ["Noto Sans Italic"],
        "text-field": ["get", "ref"],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 10, 9, 11, 9.5, 12, 10]
    },
    "maxzoom": 12,
    "paint": {
        "text-color": "rgba(179, 77, 73, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 1.2
    }
}, {
    "id": "motorway_junction_name",
    "type": "symbol",
    "filter": ["all", ["==", "highway", "motorway_junction"]],
    "source": "baremaps",
    "source-layer": "points",
    "layout": {
        "visibility": "visible",
        "text-font": ["Noto Sans Italic"],
        "text-field": ["format", ["get", "name"], "\n", ["get", "ref"]],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 12, 9, 15, 10, 18, 11]
    },
    "minzoom": 12,
    "paint": {
        "text-color": "rgba(179, 77, 73, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 1.2
    }
}, {
    "id": "islet_label",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "place"], "islet"], [">=", ["zoom"], 16], ["<=", ["zoom"], 17]],
    "source": "baremaps",
    "source-layer": "points",
    "layout": {
        "visibility": "visible",
        "text-font": ["Noto Sans Italic"],
        "text-field": ["get", "name"],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 16, 11, 18, 11]
    },
    "paint": {
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 1.2
    }
}, {
    "id": "isolated_dwelling_label",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "place"], "isolated_dwelling"], [">=", ["zoom"], 14], ["<=", ["zoom"], 17]],
    "source": "baremaps",
    "source-layer": "points",
    "layout": {
        "visibility": "visible",
        "text-font": ["Noto Sans Regular"],
        "text-field": ["get", "name"],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 14, 10, 18, 13]
    },
    "paint": {
        "text-color": ["interpolate", ["exponential", 2.2], ["zoom"], 14, "rgba(0, 0, 0, 1)", 15.5, "rgba(105, 105, 105, 1)"],
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 2
    }
}, {
    "id": "locality_label",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "place"], "locality"], ["!", ["has", "tourism"]], [">=", ["zoom"], 15], ["<=", ["zoom"], 17]],
    "source": "baremaps",
    "source-layer": "points",
    "layout": {
        "visibility": "visible",
        "text-font": ["Noto Sans Regular"],
        "text-field": ["get", "name"],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 15, 9.5, 18, 13]
    },
    "paint": {
        "text-color": ["interpolate", ["exponential", 2.2], ["zoom"], 15, "rgba(0, 0, 0, 1)", 16.5, "rgba(105, 105, 105, 1)"],
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 2
    }
}, {
    "id": "neighbourhood_label",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "place"], "neighbourhood"]],
    "source": "baremaps",
    "source-layer": "points",
    "layout": {
        "visibility": "visible",
        "text-font": ["Noto Sans Regular"],
        "text-field": ["get", "name"],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 14, 10, 16, 11, 18, 11]
    },
    "paint": {
        "text-color": ["interpolate", ["exponential", 2.2], ["zoom"], 14, "rgba(0, 0, 0, 1)", 15.5, "rgba(105, 105, 105, 1)"],
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 2
    }
}, {
    "id": "quarter_label",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "place"], "quarter"]],
    "source": "baremaps",
    "source-layer": "points",
    "layout": {
        "visibility": "visible",
        "text-font": ["Noto Sans Regular"],
        "text-field": ["get", "name"],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 13, 9.5, 15, 13]
    },
    "paint": {
        "text-color": ["interpolate", ["exponential", 2.2], ["zoom"], 13, "rgba(0, 0, 0, 1)", 14.5, "rgba(105, 105, 105, 1)"],
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 2
    }
}, {
    "id": "hamlet_label",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "place"], "hamlet"]],
    "source": "baremaps",
    "source-layer": "points",
    "layout": {
        "visibility": "visible",
        "text-font": ["Noto Sans Regular"],
        "text-field": ["get", "name"],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 13, 9.5, 16, 11]
    },
    "paint": {
        "text-color": ["interpolate", ["exponential", 2.2], ["zoom"], 13, "rgba(0, 0, 0, 1)", 14.5, "rgba(105, 105, 105, 1)"],
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 2
    }
}, {
    "id": "village_label",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "place"], "village"]],
    "source": "baremaps",
    "source-layer": "points",
    "layout": {
        "visibility": "visible",
        "text-font": ["Noto Sans Regular"],
        "text-field": ["get", "name"],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 11, 9, 13, 12, 14, 13]
    },
    "paint": {
        "text-color": ["interpolate", ["exponential", 2.2], ["zoom"], 11, "rgba(0, 0, 0, 1)", 13, "rgba(105, 105, 105, 1)"],
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 1.2
    }
}, {
    "id": "river_label",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "waterway"], "river"], [">=", ["zoom"], 12]],
    "source": "baremaps",
    "source-layer": "waterway",
    "layout": {
        "visibility": "visible",
        "text-font": ["Noto Sans Italic"],
        "text-field": ["get", "name"],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 12, 9, 15, 12, 18, 11],
        "symbol-placement": "line"
    },
    "paint": {
        "text-color": "rgba(26, 109, 187, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 1.2
    }
}, {
    "id": "town_label",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "place"], "town"]],
    "source": "baremaps",
    "source-layer": "points",
    "layout": {
        "visibility": "visible",
        "text-font": ["Noto Sans Regular"],
        "text-field": ["get", "name"],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 8, 9, 10, 10, 11, 11, 13, 14]
    },
    "paint": {
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 1.2
    }
}, {
    "id": "city_label",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "place"], "city"], ["!=", ["get", "capital"], "yes"]],
    "source": "baremaps",
    "source-layer": "points",
    "layout": {
        "visibility": "visible",
        "text-font": ["Noto Sans Regular"],
        "text-field": ["get", "name"],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 4, ["case", ["==", ["get", "capital"], "4"], 8, 0], 5, ["case", ["==", ["get", "capital"], "4"], 10, ["!=", ["get", "capital"], "4"], 8, 0], 8, ["case", ["==", ["get", "place"], "city"], 12, 0], 10, ["case", ["==", ["get", "place"], "city"], 13, 0], 11, ["case", ["==", ["get", "place"], "city"], 14, 0], 13, ["case", ["==", ["get", "place"], "city"], 15, 0]]
    },
    "paint": {
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 1.2
    }
}, {
    "id": "capital_label",
    "type": "symbol",
    "filter": ["all", ["==", ["get", "place"], "city"], ["==", ["get", "capital"], "yes"]],
    "source": "baremaps",
    "source-layer": "points",
    "layout": {
        "visibility": "visible",
        "text-font": ["Noto Sans Regular"],
        "text-field": ["get", "name"],
        "text-size": ["interpolate", ["exponential", 1.2], ["zoom"], 3, 8, 4, 10, 5, 12, 8, 14, 10, 15, 11, 15, 13, 17]
    },
    "paint": {
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 1.2
    }
}]
