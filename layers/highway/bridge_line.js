export default {
    id: 'bridge_line',
    source: 'baremaps',
    'source-layer': 'highway',
    type: 'line',
    layout: {
        visibility: 'visible',
        'line-cap': 'square',
        'line-join': 'miter',
    },
    filter: ['any', ['==', ['get', 'bridge'], 'yes']],
    directives: [
        {
            filter: [
                'any',
                ['==', ['get', 'highway'], 'motorway'],
                ['==', ['get', 'highway'], 'motorway_link'],
            ],
            'line-color': 'rgb(227, 113, 134)',
            'line-width': 12,
        },
        {
            filter: [
                'any',
                ['==', ['get', 'highway'], 'primary'],
                ['==', ['get', 'highway'], 'primary_link'],
            ],
            'line-color': 'rgb(252, 202, 137)',
            'line-width': 10,
        },
        {
            filter: [
                'any',
                ['==', ['get', 'highway'], 'secondary'],
                ['==', ['get', 'highway'], 'secondary_link'],
            ],
            'line-color': 'rgb(243, 246, 161)',
            'line-width': 8,
        },
        {
            filter: [
                'any',
                ['==', ['get', 'highway'], 'tertiary'],
                ['==', ['get', 'highway'], 'tertiary_link'],
            ],
            'line-color': 'rgb(229, 229, 229)',
            'line-width': 8,
        },
        {
            filter: [
                'any',
                ['==', ['get', 'highway'], 'trunk'],
                ['==', ['get', 'highway'], 'trunk_link'],
            ],
            'line-color': 'rgb(248, 163, 132)',
            'line-width': 8,
        },
        {
            filter: ['==', ['get', 'highway'], 'unclassified'],
            'line-color': 'rgb(229, 229, 229)',
            'line-width': 4,
        },
        {
            filter: ['==', ['get', 'highway'], 'residential'],
            'line-color': 'rgb(229, 229, 229)',
            'line-width': 4,
        },
        {
            filter: ['==', ['get', 'highway'], 'living_street'],
            'line-color': 'rgb(213, 213, 213)',
            'line-width': 4,
        },
        {
            filter: ['==', ['get', 'highway'], 'service'],
            'line-color': 'rgb(229, 229, 229)',
            'line-width': 4,
        },
        {
            filter: ['==', ['get', 'highway'], 'residential'],
            'line-color': 'rgb(229, 229, 229)',
            'line-width': 4,
        },
        {
            filter: [
                'all',
                ['==', ['get', 'highway'], 'pedestrian'],
                ['!=', ['get', '$type'], 'Polygon'],
            ],
            'line-color': 'rgb(194, 194, 212)',
            'line-width': 2,
        },
        {
            filter: ['==', ['get', 'highway'], 'track'],
            'line-color': 'rgb(159, 126, 57)',
            'line-width': 2,
        },
        {
            filter: ['==', ['get', 'highway'], 'raceway'],
            'line-color': 'rgb(255, 147, 166)',
            'line-width': 2,
        },
    ],
}
