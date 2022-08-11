
export default {
    'id': 'tunnel_outline', 
    'source': 'baremaps', 
    'source-layer': 'highway',
    'type': 'line',
    'layout': {
        'visibility': 'visible',
        'line-cap': 'square',
        'line-join': 'miter',
    },
    'filter':  [
        'any',
        ['==', ['get', 'tunnel'], 'yes'],
        ['==', ['get', 'layer'], '-1'],
        ['==', ['get', 'covered'], 'yes'],
      ],
    'paint': {
        'line-dasharray': [1,1],
    },
    'directives': [
        {
            'filter': [
                'any',
                ['==', ['get', 'highway'], 'motorway'],
                ['==', ['get', 'highway'], 'motorway_link'],
            ],
            'line-color': 'rgba(227, 82, 126, 1)',
            'line-gap-width': 12,
            'line-width': 2,
        },
        {
            'filter': [
                'any',
                ['==', ['get', 'highway'], 'primary'],
                ['==', ['get', 'highway'], 'primary_link'],
            ],
            'line-color': 'rgba(192, 147, 62, 1)',
            'line-gap-width': 10,
            'line-width': 2,
        },
        {
            'filter': [
                'any',
                ['==', ['get', 'highway'], 'secondary'],
                ['==', ['get', 'highway'], 'secondary_link'],
            ],
            'line-color': 'rgba(154, 166, 67, 1)',
            'line-gap-width': 8,
            'line-width': 2,
        },
        {
            'filter': [
                'any',
                ['==', ['get', 'highway'], 'tertiary'],
                ['==', ['get', 'highway'], 'tertiary_link'],
            ],
            'line-color': 'rgba(190, 189, 188, 1)',
            'line-gap-width': 8,
            'line-width': 2,
        },
        {
            'filter': [
                'any',
                ['==', ['get', 'highway'], 'trunk'],
                ['==', ['get', 'highway'], 'trunk_link'],
            ],
            'line-color': 'rgba(217, 111, 78, 1)',
            'line-gap-width': 8,
            'line-width': 2,
        },
        {
            'filter': ['==', ['get', 'highway'], 'unclassified'],
            'line-color': 'rgba(211, 207, 206, 1)',
            'line-gap-width': 4,
            'line-width': 2,
        },
        {
            'filter': ['==', ['get', 'highway'], 'residential'],
            'line-color': 'rgba(211, 207, 206, 1)',
            'line-gap-width': 4,
            'line-width': 2,
        },
        {
            'filter': ['==', ['get', 'highway'], 'living_street'],
            'line-color': 'rgba(207, 207, 207, 1)',
            'line-gap-width': 4,
            'line-width': 2,
        },
        {
            'filter': ['==', ['get', 'highway'], 'service'],
            'line-color': 'rgba(213, 211, 211, 1)',
            'line-gap-width': 4,
            'line-width': 2,
        },
        {
            'filter': ['==', ['get', 'highway'], 'residential'],
            'line-color': 'rgba(211, 207, 206, 1)',
            'line-gap-width': 4,
            'line-width': 2,
        },
        {
            'filter': [
                'all',
                ['==', ['get', 'highway'], 'pedestrian'],
                ['!=', ['get', '$type'], 'Polygon'],
            ],
            'line-color': 'rgba(184, 183, 182, 1)',
            'line-gap-width': 2,
            'line-width': 2,
        },
    ]
};