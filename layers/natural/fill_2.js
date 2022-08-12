export default {
    id: 'natural_overlay',
    type: 'fill',
    source: 'baremaps',
    'source-layer': 'natural',
    layout: {
        visibility: 'visible',
    },
    paint: {
        'fill-antialias': true,
    },
    directives: [
        {
            filter: ['==', ['get', 'natural'], 'beach'],
            'fill-color': 'rgb(255, 241, 186)'
        },
        {
            filter: ['==', ['get', 'natural'], 'water'],
            'fill-color': 'rgb(170, 211, 223)'
        },
        {
            filter: ['==', ['get', 'natural'], 'wetland'],
            'fill-color': 'rgba(184, 224,189, .5)'
        },
        {
            filter: ['==', ['get', 'natural'], 'scrub'],
            'fill-color': 'rgb(201, 216, 173)'
        }
    ]
}
