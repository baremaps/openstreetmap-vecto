export default {
    id: 'leisure_overlay',
    type: 'fill',
    filter: ['all'],
    source: 'baremaps',
    'source-layer': 'leisure',
    layout: {
        visibility: 'visible',
    },
    directives: [
        {
            filter: ['==', ['get', 'leisure'], 'pitch'],
            'fill-color': 'rgb(170, 224, 203)',
            'fill-outline-color': 'rgb(151, 212, 186)',
        },
        {
            filter: ['==', ['get', 'leisure'], 'swimming_pool'],
            'fill-color': 'rgb(170, 211, 223)',
            'fill-outline-color': 'rgb(120, 183, 202)',
        },
    ],
}
