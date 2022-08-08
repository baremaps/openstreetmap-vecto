export default [{
    "id": "highway_tunnel_casing",
    "type": "line",
    "filter": [
        "all", [
            "any", ["==", "highway", "motorway"],
            ["==", "highway", "motorway_link"], ["==", "highway", "primary"],
            ["==", "highway", "primary_link"], ["==", "highway", "secondary"],
            ["==", "highway", "secondary_link"], ["==", "highway", "tertiary"],
            ["==", "highway", "tertiary_link"], ["==", "highway", "trunk"],
            ["==", "highway", "trunk_link"], ["==", "highway", "unclassified"],
            ["==", "highway", "residential"], ["==", "highway", "living_street"],
            ["==", "highway", "service"],
            ["all", ["==", "highway", "pedestrian"], ["!=", "$type", "Polygon"]]
        ],
        [
            "any", ["==", "tunnel", "yes"], ["==", "layer", "-1"],
            ["==", "covered", "yes"]
        ]
    ],
    "source": "baremaps",
    "source-layer": "highway",
    "layout": {
        "visibility": "visible"
    },
    "paint": {
        "line-width": [
            "interpolate", ["exponential", 1.2], ["zoom"], 4, 0, 20,
            [
                "case", [
                "any", [
                    "in", ["get", "highway"],
                    ["literal", ["pedestrian", "living_street"]]
                ],
                [
                    "all", ["==", ["get", "highway"], "service"],
                    ["==", ["get", "service"], "driveway"]
                ]
            ], 8, [
                "any",
                [
                    "in", ["get", "highway"], [
                    "literal",
                    [
                        "unclassified", "residential", "tertiary", "tertiary_link",
                        "secondary", "secondary_link"
                    ]
                ]
                ],
                [
                    "all", ["==", ["get", "highway"], "service"],
                    ["!=", ["get", "service"], "driveway"]
                ]
            ], 12,
                [
                    "in", ["get", "highway"], [
                    "literal",
                    [
                        "primary", "primary_link", "trunk", "trunk_link", "motorway",
                        "motorway_link"
                    ]
                ]
                ], 16, 0
            ]
        ],
        "line-color": [
            "case", ["==", ["get", "highway"], "pedestrian"],
            "rgba(184, 183, 182, 1)", ["==", ["get", "highway"], "service"],
            "rgba(213, 211, 211, 1)", ["==", ["get", "highway"], "living_street"],
            "rgba(207, 207, 207, 1)", [
                "in", ["get", "highway"],
                ["literal", ["residential", "unclassified"]]
            ],
            "rgba(211, 207, 206, 1)", [
                "in", ["get", "highway"],
                ["literal", ["tertiary", "tertiary_link"]]
            ],
            "rgba(190, 189, 188, 1)", [
                "in", ["get", "highway"],
                ["literal", ["secondary", "secondary_link"]]
            ],
            "rgba(154, 166, 67, 1)",
            ["in", ["get", "highway"], ["literal", ["primary", "primary_link"]]],
            "rgba(192, 147, 62, 1)",
            ["in", ["get", "highway"], ["literal", ["trunk", "trunk_link"]]],
            "rgba(217, 111, 78, 1)", [
                "in", ["get", "highway"],
                ["literal", ["motorway", "motorway_link"]]
            ],
            "rgba(227, 82, 126, 1)", "rgba(0, 0, 0, 0)"
        ],
        "line-dasharray": [0.3, 0.15]
    }
}, {
    "id": "highway_tunnel",
        "type": "line",
        "filter": [
        "all", [
            "any", ["==", "highway", "motorway"],
            ["==", "highway", "motorway_link"], ["==", "highway", "primary"],
            ["==", "highway", "primary_link"], ["==", "highway", "residential"],
            ["==", "highway", "secondary"], ["==", "highway", "secondary_link"],
            ["==", "highway", "tertiary"], ["==", "highway", "tertiary_link"],
            ["==", "highway", "trunk"], ["==", "highway", "trunk_link"],
            ["==", "highway", "unclassified"], ["==", "highway", "living_street"],
            ["==", "highway", "service"],
            ["all", ["==", "highway", "pedestrian"], ["!=", "$type", "Polygon"]],
            ["==", "highway", "footway"], ["==", "highway", "path"],
            ["all", ["==", "highway", "steps"], ["!=", "layer", "-1"]],
            ["==", "highway", "cycleway"]
        ],
        [
            "any", ["==", "tunnel", "yes"], ["==", "layer", "-1"],
            ["==", "covered", "yes"]
        ]
    ],
        "source": "baremaps",
        "source-layer": "highway",
        "layout": {
        "line-cap": "round",
            "line-join": "round",
            "visibility": "visible"
    },
    "paint": {
        "line-width": [
            "interpolate", ["exponential", 1.2], ["zoom"], 4, 0, 20,
            [
                "case", [
                "any", [
                    "in", ["get", "highway"], [
                        "literal",
                        [
                            "pedestrian", "living_street", "footway", "path", "steps",
                            "cycleway"
                        ]
                    ]
                ], [
                    "all", ["==", ["get", "highway"], "service"],
                    ["==", ["get", "service"], "driveway"]
                ]
            ], 4, [
                "any",
                [
                    "in", ["get", "highway"], [
                    "literal",
                    [
                        "unclassified", "residential", "tertiary", "tertiary_link",
                        "secondary", "secondary_link"
                    ]
                ]
                ],
                [
                    "all", ["==", ["get", "highway"], "service"],
                    ["!=", ["get", "service"], "driveway"]
                ]
            ], 8,
                [
                    "in", ["get", "highway"], [
                    "literal",
                    [
                        "primary", "primary_link", "trunk", "trunk_link", "motorway",
                        "motorway_link"
                    ]
                ]
                ], 12, 0
            ]
        ],
            "line-color": [
            "case", 
            ["==", ["get", "highway"], "pedestrian"],
            "rgba(221, 221, 232, 1)", [
                "in", ["get", "highway"],
                ["literal", ["service", "residential", "unclassified"]]
            ],
            "rgba(242, 242, 242, 1)", ["==", ["get", "highway"], "living_street"],
            "rgba(245, 245, 245, 1)", [
                "in", ["get", "highway"], [
                    "literal",
                    [
                        "tertiary", "tertiary_link", "footway", "path", "steps",
                        "cycleway"
                    ]
                ]
            ], "rgba(255, 255, 255, 1)",
            [
                "in", ["get", "highway"],
                ["literal", ["secondary", "secondary_link"]]
            ],
            "rgba(249, 253, 215, 1)",
            ["in", ["get", "highway"], ["literal", ["primary", "primary_link"]]],
            "rgba(254, 237, 213, 1)",
            ["in", ["get", "highway"], ["literal", ["trunk", "trunk_link"]]],
            "rgba(252, 215, 204, 1)", [
                "in", ["get", "highway"],
                ["literal", ["motorway", "motorway_link"]]
            ],
            "rgba(241, 188, 198, 1)", "rgba(0, 0, 0, 0)"
        ]
    }
}, {
    "id": "highway_dash_tunnel_casing",
        "type": "line",
        "filter": [
        "all",
        [
            "any", ["==", "highway", "track"], ["==", "highway", "bridleway"],
            ["==", "highway", "footway"], ["==", "highway", "path"],
            ["all", ["==", "highway", "steps"], ["!=", "layer", "-1"]],
            [
                "all", ["==", "highway", "service"],
                ["any", ["==", "access", "private"], ["==", "access", "no"]],
                ["!=", "service", "driveway"]
            ], ["==", "highway", "cycleway"]
        ],
        [
            "any", ["==", "tunnel", "yes"], ["==", "layer", "-1"],
            ["==", "covered", "yes"]
        ]
    ],
        "source": "baremaps",
        "source-layer": "highway",
        "layout": {
        "visibility": "visible"
    },
    "paint": {
        "line-dasharray": [2, 2],
            "line-color": [
            "case", ["==", ["get", "highway"], "track"],
            "rgba(121, 119, 119, 1)", ["==", ["get", "highway"], "bridleway"],
            "rgba(160, 165, 154, 1)",
            ["in", ["get", "highway"], ["literal", ["footway", "steps"]]],
            "rgba(61, 61, 61, 1)",
            ["in", ["get", "highway"], ["literal", ["path", "cycleway"]]],
            "rgba(125, 125, 124, 1)", ["==", ["get", "highway"], "service"],
            "rgba(192, 192, 192, 1)", "rgba(0, 0, 0, 0)"
        ],
            "line-gap-width": [
            "case", ["==", ["get", "highway"], "service"], 0,
            3.5
        ]
    }
}, {
    "id": "highway_casing",
        "type": "line",
        "filter": [
        "any", [
            "all",
            [
                "any", ["==", "highway", "pedestrian"], ["==", "highway", "service"],
                ["==", "highway", "living_street"], ["==", "highway", "unclassified"],
                ["==", "highway", "residential"], ["==", "highway", "tertiary"],
                ["==", "highway", "tertiary_link"], ["==", "highway", "secondary"],
                ["==", "highway", "secondary_link"], ["==", "highway", "primary"],
                ["==", "highway", "primary_link"], ["==", "highway", "trunk"],
                ["==", "highway", "trunk_link"], ["==", "highway", "motorway"],
                ["==", "highway", "motorway_link"]
            ], ["!=", "tunnel", "yes"],
            ["!=", "layer", "-1"], ["!=", "covered", "yes"]
        ],
        ["==", "highway", "construction"]
    ],
        "source": "baremaps",
        "source-layer": "highway",
        "layout": {
        "line-cap": "round",
            "line-join": "round",
            "visibility": "visible"
    },
    "paint": {
        "line-width": [
            "interpolate", ["exponential", 1.2], ["zoom"], 4, 0, 20,
            [
                "case", [
                "in", ["get", "construction"],
                ["literal", ["path", "footway", "steps"]]
            ], 4,
                [
                    "all", ["==", ["get", "highway"], "pedestrian"],
                    [
                        "in", ["get", "geometry"],
                        ["literal", ["polygon", "multipolygon"]]
                    ]
                ], 6, [
                "any",
                [
                    "in", ["get", "highway"],
                    ["literal", ["pedestrian", "living_street"]]
                ],
                [
                    "all", ["==", ["get", "highway"], "service"],
                    ["==", ["get", "service"], "driveway"]
                ],
                [
                    "all", ["==", ["get", "highway"], "construction"], [
                    "!",
                    [
                        "in", ["get", "construction"],
                        ["literal", ["path", "footway", "steps"]]
                    ]
                ]
                ]
            ], 8, [
                "any",
                [
                    "in", ["get", "highway"], [
                    "literal",
                    [
                        "unclassified", "residential", "tertiary", "tertiary_link",
                        "secondary", "secondary_link"
                    ]
                ]
                ],
                [
                    "all", ["==", ["get", "highway"], "service"],
                    ["!=", ["get", "service"], "driveway"]
                ]
            ], 12,
                [
                    "in", ["get", "highway"], [
                    "literal",
                    [
                        "primary", "primary_link", "trunk", "trunk_link", "motorway",
                        "motorway_link"
                    ]
                ]
                ], 16, 0
            ]
        ],
            "line-color": [
            "case", ["==", ["get", "highway"], "pedestrian"],
            "rgb(184, 183, 182)", ["==", ["get", "highway"], "service"],
            "rgb(213, 211, 211)", ["==", ["get", "highway"], "living_street"],
            "rgb(207, 207, 207)", [
                "in", ["get", "highway"],
                ["literal", ["residential", "unclassified"]]
            ], "rgb(211, 207, 206)",
            [
                "in", ["get", "highway"],
                ["literal", ["tertiary", "tertiary_link"]]
            ], "rgb(190, 189, 188)",
            [
                "in", ["get", "highway"],
                ["literal", ["secondary", "secondary_link"]]
            ], "rgb(154, 166, 67)",
            ["in", ["get", "highway"], ["literal", ["primary", "primary_link"]]],
            "rgb(192, 147, 62)",
            ["in", ["get", "highway"], ["literal", ["trunk", "trunk_link"]]],
            "rgb(217, 111, 78)", [
                "in", ["get", "highway"],
                ["literal", ["motorway", "motorway_link"]]
            ], "rgb(227, 82, 126)",
            [
                "in", ["get", "construction"],
                ["literal", ["primary", "primary_link"]]
            ], "rgba(252, 213, 164, 1)",
            [
                "in", ["get", "construction"],
                ["literal", ["motorway", "motorway_link"]]
            ],
            "rgba(232, 146, 161, 1)", [
                "any", [
                    "in", ["get", "construction"],
                    [
                        "literal",
                        [
                            "tertiary", "tertiary_link", "residential", "unclassified",
                            "service", "raceway", "living_street", "pedestrian"
                        ]
                    ]
                ],
                ["!", ["has", "construction"]]
            ], "rgba(170, 170, 170, 1)",
            ["in", ["get", "construction"], ["literal", ["trunk", "trunk_link"]]],
            "rgba(248, 178, 156, 1)", [
                "in", ["get", "construction"],
                ["literal", ["secondary", "secondary_link"]]
            ],
            "rgba(247, 250, 191, 1)", [
                "in", ["get", "construction"],
                ["literal", ["path", "footway", "steps"]]
            ],
            "rgba(255, 255, 255, 0.4)", "rgba(0, 0, 0, 0)"
        ]
    }
}, {
    "id": "highway_construction_dash",
        "type": "line",
        "filter": ["all", ["==", "highway", "construction"]],
        "source": "baremaps",
        "source-layer": "highway",
        "layout": {
        "visibility": "visible"
    },
    "paint": {
        "line-color": [
            "case", [
                "in", ["get", "construction"],
                ["literal", ["raceway", "living_street", "pedestrian"]]
            ],
            "rgba(221, 221, 232, 1)", [
                "in", ["get", "construction"],
                ["literal", ["path", "footway", "steps"]]
            ],
            "rgba(183, 183, 180, 1)", "rgba(255, 255, 255, 1)"
        ],
            "line-width": [
            "interpolate", ["exponential", 1.2], ["zoom"], 4, 0, 20,
            [
                "case", [
                "in", ["get", "construction"],
                ["literal", ["path", "footway", "steps"]]
            ], 2, 6
            ]
        ],
            "line-dasharray": [2, 2]
    }
}, {
    "id": "highway_polygon",
        "type": "fill",
        "filter": [
        "all", ["==", "$type", "Polygon"],
        [
            "any", ["==", "highway", "pedestrian"], ["==", "highway", "path"],
            ["==", "highway", "sidewalk"], ["==", "highway", "crossing"],
            ["==", "highway", "steps"],
            ["all", ["==", "highway", "footway"], ["==", "area", "yes"]]
        ]
    ],
        "source": "baremaps",
        "source-layer": "highway",
        "layout": {
        "visibility": "visible"
    },
    "paint": {
        "fill-color": "rgb(221, 221, 232)",
            "fill-antialias": true
    }
}, {
    "id": "highway_path",
        "type": "line",
        "filter": [
        "any", [
            "all", [
                "none",
                ["all", ["==", "highway", "pedestrian"], ["==", "$type", "Polygon"]]
            ],
            ["!=", "tunnel", "yes"], ["!=", "layer", "-1"],
            ["!=", "covered", "yes"]
        ], [
            "all", ["==", "tracktype", "grade1"],
            [
                "any", ["==", "tunnel", "yes"], ["==", "layer", "-1"],
                ["==", "covered", "yes"]
            ]
        ]
    ],
        "source": "baremaps",
        "source-layer": "highway",
        "layout": {
        "line-cap": "round",
            "line-join": "round",
            "visibility": "visible"
    },
    "paint": {
        "line-width": [
            "interpolate", ["exponential", 1.2], ["zoom"], 4, 0, 20,
            [
                "case", [
                "all", ["==", ["get", "highway"], "track"],
                ["==", ["get", "tracktype"], "grade1"]
            ], 2.5, [
                "any",
                [
                    "in", ["get", "highway"],
                    ["literal", ["pedestrian", "living_street"]]
                ],
                [
                    "all", ["==", ["get", "highway"], "service"],
                    ["==", ["get", "service"], "driveway"]
                ]
            ], 4, [
                "any",
                [
                    "in", ["get", "highway"], [
                    "literal",
                    [
                        "unclassified", "residential", "tertiary", "tertiary_link",
                        "secondary", "secondary_link"
                    ]
                ]
                ],
                [
                    "all", ["==", ["get", "highway"], "service"],
                    ["!=", ["get", "service"], "driveway"]
                ]
            ], 8,
                [
                    "in", ["get", "highway"], [
                    "literal",
                    [
                        "primary", "primary_link", "trunk", "trunk_link", "motorway",
                        "motorway_link", "raceway"
                    ]
                ]
                ], 12, 0
            ]
        ],
            "line-color": [
            "case", ["==", ["get", "highway"], "pedestrian"],
            "rgb(221, 221, 231)", [
                "in", ["get", "highway"], [
                    "literal",
                    [
                        "service", "residential", "unclassified", "tertiary",
                        "tertiary_link"
                    ]
                ]
            ], "rgb(254, 254, 254)",
            ["==", ["get", "highway"], "living_street"], "rgb(237, 237, 237)",
            [
                "in", ["get", "highway"],
                ["literal", ["secondary", "secondary_link"]]
            ], "rgb(248, 250, 202)",
            ["in", ["get", "highway"], ["literal", ["primary", "primary_link"]]],
            "rgb(253, 221, 179)",
            ["in", ["get", "highway"], ["literal", ["trunk", "trunk_link"]]],
            "rgb(250, 193, 172)", [
                "in", ["get", "highway"],
                ["literal", ["motorway", "motorway_link"]]
            ], "rgb(233, 144, 161)",
            ["==", ["get", "highway"], "track"], "rgb(177, 140, 63)",
            ["==", ["get", "highway"], "raceway"], "rgba(255, 192, 203, 1)",
            "rgba(0, 0, 0, 0)"
        ]
    }
}, {
    "id": "highway_dash",
        "type": "line",
        "filter": [
        "any", ["==", "highway", "bridleway"],
        ["==", "highway", "footway"], ["==", "highway", "path"],
        ["==", "highway", "sidewalk"], ["==", "highway", "crossing"],
        ["==", "highway", "steps"],
        ["all", ["==", "highway", "service"], ["!=", "tunnel", "yes"]],
        ["==", "highway", "track"], ["==", "highway", "cycleway"]
    ],
        "source": "baremaps",
        "source-layer": "highway",
        "layout": {
        "line-cap": "round",
            "line-join": "round",
            "visibility": "visible"
    },
    "paint": {
        "line-color": [
            "case", ["==", ["get", "highway"], "bridleway"],
            "rgb(68, 159, 66)", [
                "any", ["==", ["get", "highway"], "cycleway"],
                [
                    "all", ["==", ["get", "highway"], "path"],
                    ["==", ["get", "bicycle"], "designated"]
                ]
            ],
            "rgba(28, 27, 254, 1)", [
                "any",
                [
                    "all", ["==", ["get", "highway"], "footway"],
                    ["==", ["get", "access"], "private"]
                ],
                [
                    "all", ["==", ["get", "highway"], "service"],
                    ["in", ["get", "access"], ["literal", ["private", "no"]]]
                ]
            ],
            "rgb(192, 192, 192)", [
                "any", [
                    "in", ["get", "highway"],
                    ["literal", ["sidewalk", "crossing", "steps"]]
                ],
                [
                    "all", ["==", ["get", "highway"], "footway"],
                    ["!=", ["get", "access"], "private"]
                ],
                [
                    "all", ["==", ["get", "highway"], "path"],
                    ["!=", ["get", "bicycle"], "designated"]
                ]
            ], "rgb(250, 132, 117)",
            [
                "all", ["==", ["get", "highway"], "track"],
                ["==", ["get", "tracktype"], "grade4"]
            ], "rgb(177, 140, 63)",
            "rgba(0, 0, 0, 0)"
        ],
            "line-dasharray": [2, 2]
    }
}, {
    "id": "highway_track_grade2",
        "type": "line",
        "filter": [
        "all", ["==", "highway", "track"],
        ["==", "tracktype", "grade2"]
    ],
        "source": "baremaps",
        "source-layer": "highway",
        "layout": {
        "visibility": "visible"
    },
    "paint": {
        "line-color": "rgb(177, 140, 63)",
            "line-dasharray": [8, 3]
    }
}, {
    "id": "highway_track_grade3",
        "type": "line",
        "filter": [
        "all", ["==", "highway", "track"],
        ["==", "tracktype", "grade3"]
    ],
        "source": "baremaps",
        "source-layer": "highway",
        "layout": {
        "visibility": "visible"
    },
    "paint": {
        "line-color": "rgb(177, 140, 63)",
            "line-dasharray": [5, 3]
    }
}, {
    "id": "highway_track_grade5",
        "type": "line",
        "filter": [
        "all", ["==", "highway", "track"],
        ["==", "tracktype", "grade5"]
    ],
        "source": "baremaps",
        "source-layer": "highway",
        "layout": {
        "visibility": "visible"
    },
    "paint": {
        "line-color": "rgb(177, 140, 63)",
            "line-dasharray": [2, 5]
    }
}, {
    "id": "highway_no_tracktype",
        "type": "line",
        "filter": [
        "all", ["==", ["get", "highway"], "track"],
        ["!", ["has", "tracktype"]]
    ],
        "source": "baremaps",
        "source-layer": "highway",
        "layout": {
        "visibility": "visible"
    },
    "paint": {
        "line-color": "rgb(177, 140, 63)",
            "line-dasharray": [4, 1.5, 1.5, 1.5]
    }
}, {
    "id": "highway_label",
        "type": "symbol",
        "filter": ["all"],
        "source": "baremaps",
        "source-layer": "highway",
        "layout": {
        "symbol-placement": "line",
            "text-anchor": "center",
            "text-field": ["get", "name"],
            "text-font": ["Noto Sans Regular"],
            "text-size": [
            "interpolate", ["exponential", 1], ["zoom"], 13, 10, 14,
            12
        ],
            "visibility": "visible"
    },
    "paint": {
        "text-color": "rgb(96,96,96)",
            "text-halo-color": "rgba(255,255,255,0.8)",
            "text-halo-width": 1.2
    }
}]
