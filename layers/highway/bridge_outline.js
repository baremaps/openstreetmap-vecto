
export default {
    'id': 'bridge_outline', 
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
        ['==', ['get', 'bridge'], 'yes'],
      ],
    'directives': [
        {
            'filter': [
                'any',
                ['==', ['get', 'highway'], 'motorway'],
                ['==', ['get', 'highway'], 'motorway_link'],
            ],
            'line-color': 'rgb(223, 55, 106)',
            'line-gap-width': 12,
            'line-width': 2,
        },
        {
            'filter': [
                'any',
                ['==', ['get', 'highway'], 'primary'],
                ['==', ['get', 'highway'], 'primary_link'],
            ],
            'line-color': 'rgb(173, 132, 56)',
            'line-gap-width': 10,
            'line-width': 2,
        },
        {
            'filter': [
                'any',
                ['==', ['get', 'highway'], 'secondary'],
                ['==', ['get', 'highway'], 'secondary_link'],
            ],
            'line-color': 'rgb(139, 149, 60)',
            'line-gap-width': 8,
            'line-width': 2,
        },
        {
            'filter': [
                'any',
                ['==', ['get', 'highway'], 'tertiary'],
                ['==', ['get', 'highway'], 'tertiary_link'],
            ],
            'line-color': 'rgb(171, 170, 169)',
            'line-gap-width': 8,
            'line-width': 2,
        },
        {
            'filter': [
                'any',
                ['==', ['get', 'highway'], 'trunk'],
                ['==', ['get', 'highway'], 'trunk_link'],
            ],
            'line-color': 'rgb(212, 91, 54)',
            'line-gap-width': 8,
            'line-width': 2,
        },
        {
            'filter': ['==', ['get', 'highway'], 'unclassified'],
            'line-color': 'rgb(191, 185, 184)',
            'line-gap-width': 4,
            'line-width': 2,
        },
        {
            'filter': ['==', ['get', 'highway'], 'residential'],
            'line-color': 'rgb(191, 185, 184)',
            'line-gap-width': 4,
            'line-width': 2,
        },
        {
            'filter': ['==', ['get', 'highway'], 'living_street'],
            'line-color': 'rgb(186, 186, 186)',
            'line-gap-width': 4,
            'line-width': 2,
        },
        {
            'filter': ['==', ['get', 'highway'], 'service'],
            'line-color': 'rgb(192, 189, 189)',
            'line-gap-width': 4,
            'line-width': 2,
        },
        {
            'filter': ['==', ['get', 'highway'], 'residential'],
            'line-color': 'rgb(166, 165, 163)',
            'line-gap-width': 4,
            'line-width': 2,
        },
        {
            'filter': [
                'all',
                ['==', ['get', 'highway'], 'pedestrian'],
                ['!=', ['get', '$type'], 'Polygon'],
            ],
            'line-color': 'rgb(166, 165, 163)',
            'line-gap-width': 2,
            'line-width': 2,
        },
    ]
};