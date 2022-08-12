
export default {
    'id': 'highway_line', 
    'source': 'baremaps', 
    'source-layer': 'highway',
    'type': 'line',
    'layout': {
        'visibility': 'visible',
        'line-cap': 'round',
        'line-join': 'round',
    },
    'filter':  [
        'all',
        ['!=', ['get', 'bridge'], 'yes'],
        ['!=', ['get', 'tunnel'], 'yes'],
        ['!=', ['get', 'layer'], '-1'],
        ['!=', ['get', 'covered'], 'yes'],
    ],
    'directives': [
        {
            'filter': [
                'any',
                ['==', ['get', 'highway'], 'motorway'],
                ['==', ['get', 'highway'], 'motorway_link'],
            ],
            'line-color': 'rgb(233, 144, 161)',
            'line-width': 12,
            'line-sort-key': 2,
        },
        {
            'filter': [
                'any',
                ['==', ['get', 'highway'], 'primary'],
                ['==', ['get', 'highway'], 'primary_link'],
            ],
            'line-color': 'rgb(253, 221, 179)',
            'line-width': 10,
            'line-sort-key': 5,
        },
        {
            'filter': [
                'any',
                ['==', ['get', 'highway'], 'secondary'],
                ['==', ['get', 'highway'], 'secondary_link'],
            ],
            'line-color': 'rgb(248, 250, 202)',
            'line-width': 8,
            'line-sort-key': 4,
        },
        {
            'filter': [
                'any',
                ['==', ['get', 'highway'], 'tertiary'],
                ['==', ['get', 'highway'], 'tertiary_link'],
            ],
            'line-color': 'rgb(254, 254, 254)',
            'line-width': 8,
            'line-sort-key': 3,
        },
        {
            'filter': [
                'any',
                ['==', ['get', 'highway'], 'trunk'],
                ['==', ['get', 'highway'], 'trunk_link'],
            ],
            'line-color': 'rgb(250, 193, 172)',
            'line-width': 8,
            'line-sort-key': 2,
        },
        {
            'filter': ['==', ['get', 'highway'], 'unclassified'],
            'line-color': 'rgb(254, 254, 254)',
            'line-width': 4,
            'line-sort-key': 1,
        },
        {
            'filter': ['==', ['get', 'highway'], 'residential'],
            'line-color': 'rgb(254, 254, 254)',
            'line-width': 4,
            'line-sort-key': 1,
        },
        {
            'filter': ['==', ['get', 'highway'], 'living_street'],
            'line-color': 'rgb(237, 237, 237)',
            'line-width': 4,
            'line-sort-key': 1,
        },
        {
            'filter': ['==', ['get', 'highway'], 'service'],
            'line-color': 'rgb(254, 254, 254)',
            'line-width': 4,
            'line-sort-key': 1,
        },
        {
            'filter': ['==', ['get', 'highway'], 'residential'],
            'line-color': 'rgb(254, 254, 254)',
            'line-width': 4,
            'line-sort-key': 1,
        },
        {
            'filter': [
                'all',
                ['==', ['get', 'highway'], 'pedestrian'],
                ['!=', ['get', 'area'], 'yes'],
            ],
            'line-color': 'rgb(221, 221, 231)',
            'line-width': 2,
            'line-sort-key': 1,
        },
        {
            'filter': ['==', ['get', 'highway'], 'raceway'],
            'line-color': 'rgb(255, 192, 203)',
            'line-width': 2,
            'line-sort-key': 1,
        },
    ]
};