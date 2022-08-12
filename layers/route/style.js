export default {
    id: 'route_ferry',
    type: 'line',
    source: 'baremaps',
    'source-layer': 'route',
    layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible',
    },
    paint: {
        'line-dasharray': [4, 4],
    },
    directives: [
        {
            filter: ['==', ['get', 'route'], 'ferry'],
            'line-color': 'rgb(102, 102, 255)',
        },
    ],
}
