
export default {
    'id': 'highway_outline', 
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
        //['!=', ['get', 'bridge'], 'yes'],
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
            'line-color': 'rgb(227, 82, 126)',
            'line-gap-width': 12,
            'line-width': 2,
            'line-sort-key': 6,
        },
        {
            'filter': [
                'any',
                ['==', ['get', 'highway'], 'primary'],
                ['==', ['get', 'highway'], 'primary_link'],
            ],
            'line-color': 'rgb(192, 147, 62)',
            'line-gap-width': 10,
            'line-width': 2,

            'line-sort-key': 5,
        },
        {
            'filter': [
                'any',
                ['==', ['get', 'highway'], 'secondary'],
                ['==', ['get', 'highway'], 'secondary_link'],
            ],
            'line-color': 'rgb(154, 166, 67)',
            'line-gap-width': 8,
            'line-width': 2,
            'line-sort-key': 4,
        },
        {
            'filter': [
                'any',
                ['==', ['get', 'highway'], 'tertiary'],
                ['==', ['get', 'highway'], 'tertiary_link'],
            ],
            'line-color': 'rgb(190, 189, 188)',
            'line-gap-width': 8,
            'line-width': 2,
            'line-sort-key': 3,
        },
        {
            'filter': [
                'any',
                ['==', ['get', 'highway'], 'trunk'],
                ['==', ['get', 'highway'], 'trunk_link'],
            ],
            'line-color': 'rgb(217, 111, 78)',
            'line-gap-width': 8,
            'line-width': 2,
            'line-sort-key': 2,
        },
        {
            'filter': ['==', ['get', 'highway'], 'unclassified'],
            'line-color': 'rgb(211, 207, 206)',
            'line-gap-width': 4,
            'line-width': 2,
            'line-sort-key': 1,
        },
        {
            'filter': ['==', ['get', 'highway'], 'residential'],
            'line-color': 'rgb(211, 207, 206)',
            'line-gap-width': 4,
            'line-width': 2,
            'line-sort-key': 1,
        },
        {
            'filter': ['==', ['get', 'highway'], 'living_street'],
            'line-color': 'rgb(207, 207, 207)',
            'line-gap-width': 4,
            'line-width': 2,
            'line-sort-key': 1,
        },
        {
            'filter': ['==', ['get', 'highway'], 'service'],
            'line-color': 'rgb(213, 211, 211)',
            'line-gap-width': 4,
            'line-width': 2,
            'line-sort-key': 1,
        },
        {
            'filter': ['==', ['get', 'highway'], 'residential'],
            'line-color': 'rgb(211, 207, 206)',
            'line-gap-width': 4,
            'line-width': 2,
            'line-sort-key': 1,
        },
        {
            'filter': [
                'all',
                ['==', ['get', 'highway'], 'pedestrian'],
                ['!=', ['get', 'area'], 'yes'],
            ],
            'line-color': 'rgb(184, 183, 182)',
            'line-gap-width': 2,
            'line-width': 2,
            'line-sort-key': 1,
        },
        {
            'filter': [
                'all',
                ['==', ['get', 'highway'], 'pedestrian'],
                ['==', ['get', 'area'], 'yes'],
            ],
            'line-color': 'rgb(184, 183, 182)',
            'line-width': 2,
            'line-sort-key': 1,
        },
    ]
};