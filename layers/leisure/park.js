export default {
    id: 'leisure_park',
    type: 'fill',
    source: 'baremaps',
    'source-layer': 'leisure',
    layout: {
        visibility: 'visible',
    },
    paint: {
        'fill-antialias': true,
    },
    directives: [
        {
            filter: ['==', ['get', 'leisure'], 'park'],
            'fill-color': 'rgb(200, 250, 204)',
        },
    ],
}
