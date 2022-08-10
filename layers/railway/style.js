import layer from '../utils.js'

let railwayLine = {
    'id': 'railway_line', 
    'source': 'baremaps', 
    'source-layer': 'railway',
    'type': 'line',
    'layout': {
        'visibility': 'visible',
        'line-cap': 'round',
        'line-join': 'round',
    },
    'directives': [
        {
            'filter': ['==', ['get', 'railway'], 'abandoned'],
            'line-color': 'rgb(100,100,100)',
            'line-width': 2,
        },
        {
            'filter': ['==', ['get', 'railway'], 'construction'],
            'line-color': 'rgb(170,170,170)',
            'line-width': 6,
        },
        {
            'filter': ['==', ['get', 'railway'], 'disused'],
            'line-color': 'rgb(100,100,100)',
            'line-width': 2,
        },
        {
            'filter': ['==', ['get', 'railway'], 'funicular'],
            'line-color': 'rgb(100,100,100)',
            'line-width': 6,
        },
        {
            'filter': ['==', ['get', 'railway'], 'light_rail'],
            'line-color': 'rgb(100,100,100)',
            'line-width': 6,
        },
        {
            'filter': ['==', ['get', 'railway'], 'miniature'],
            'line-color': 'rgb(158,158,158)',
            'line-width': 2,
        },
        {
            'filter': ['==', ['get', 'railway'], 'monorail'],
            'line-color': 'rgb(126,126,126)',
            'line-width': 6,
        },
        {
            'filter': ['==', ['get', 'railway'], 'narrow_gauge'],
            'line-color': 'rgb(100,100,100)',
            'line-width': 2,
        },
        {
            'filter': ['==', ['get', 'railway'], 'preserved'],
            'line-color': 'rgb(220,220,220)',
            'line-width': 6,
        },
        {
            'filter': [
                'all',
                ['==', ['get', 'railway'], 'rail'],
                ['!', ['has', 'service']],
            ],
            'line-color': 'rgb(112,112,112)',
            'line-width': 10,
        },
        {
            'filter': ['all', ['==', ['get', 'railway'], 'rail'], ['has', 'service']],
            'line-color': 'rgb(160,160,160)',
            'line-width': 6,
        },
        {
            'filter': ['==', ['get', 'railway'], 'subway'],
            'line-color': 'rgb(160,160,160)',
            'line-width': 6,
        },
        {
            'filter': ['==', ['get', 'railway'], 'tram'],
            'line-color': 'rgb(77,77,77)',
            'line-width': 6,
        },
    ]
};

export default layer(railwayLine)
