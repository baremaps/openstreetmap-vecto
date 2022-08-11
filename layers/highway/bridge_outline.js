
export default {
    'id': 'bridge_outline', 
    'source': 'baremaps', 
    'source-layer': 'highway',
    'type': 'line',
    'layout': {
        'visibility': 'visible',
        'line-cap': 'round',
        'line-join': 'round',
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
            'line-color': 'rgba(40, 40, 40, 1)',
            'line-gap-width': 12,
            'line-width': 2,
        },
        {
            'filter': [
                'any',
                ['==', ['get', 'highway'], 'primary'],
                ['==', ['get', 'highway'], 'primary_link'],
            ],
            'line-color': 'rgba(40, 40, 40, 1)',
            'line-gap-width': 8,
            'line-width': 2,
        },
        {
            'filter': [
                'any',
                ['==', ['get', 'highway'], 'secondary'],
                ['==', ['get', 'highway'], 'secondary_link'],
            ],
            'line-color': 'rgba(40, 40, 40, 1)',
            'line-gap-width': 8,
            'line-width': 2,
        },
        {
            'filter': [
                'any',
                ['==', ['get', 'highway'], 'tertiary'],
                ['==', ['get', 'highway'], 'tertiary_link'],
            ],
            'line-color': 'rgba(40, 40, 40, 1)',
            'line-gap-width': 8,
            'line-width': 2,
        },
        {
            'filter': [
                'any',
                ['==', ['get', 'highway'], 'trunk'],
                ['==', ['get', 'highway'], 'trunk_link'],
            ],
            'line-color': 'rgba(40, 40, 40, 1)',
            'line-gap-width': 8,
            'line-width': 2,
        },
        {
            'filter': ['==', ['get', 'highway'], 'unclassified'],
            'line-color': 'rgba(40, 40, 40, 1)',
            'line-gap-width': 4,
            'line-width': 2,
        },
        {
            'filter': ['==', ['get', 'highway'], 'residential'],
            'line-color': 'rgba(40, 40, 40, 1)',
            'line-gap-width': 4,
            'line-width': 2,
        },
        {
            'filter': ['==', ['get', 'highway'], 'living_street'],
            'line-color': 'rgba(40, 40, 40, 1)',
            'line-gap-width': 4,
            'line-width': 2,
        },
        {
            'filter': ['==', ['get', 'highway'], 'service'],
            'line-color': 'rgba(40, 40, 40, 1)',
            'line-gap-width': 4,
            'line-width': 2,
        },
        {
            'filter': ['==', ['get', 'highway'], 'residential'],
            'line-color': 'rgba(40, 40, 40, 1)',
            'line-gap-width': 4,
            'line-width': 2,
        },
        {
            'filter': [
                'all',
                ['==', ['get', 'highway'], 'pedestrian'],
                ['!=', ['get', '$type'], 'Polygon'],
            ],
            'line-color': 'rgba(40, 40, 40, 1)',
            'line-gap-width': 2,
            'line-width': 2,
        },
    ]
};