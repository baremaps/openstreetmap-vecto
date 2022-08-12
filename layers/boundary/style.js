export default {
    id: 'boundary',
    type: 'line',
    source: 'baremaps',
    'source-layer': 'boundary',
    layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible',
    },
    paint: {
        'line-dasharray': [8, 2, 2, 2],
    },
    directives: [
        {
            filter: ['==', ['get', 'admin_level'], 1],
            'line-color': 'rgb(207, 155, 203)',
        },
        {
            filter: ['==', ['get', 'admin_level'], 2],
            'line-color': 'rgb(207, 155, 203)',
        },
        {
            filter: ['==', ['get', 'admin_level'], 3],
            'line-color': 'rgb(207, 155, 203)',
        },
        {
            filter: ['==', ['get', 'admin_level'], 4],
            'line-color': 'rgb(207, 155, 203)',
        },
    ],
}
