export default {
    id: 'leisure',
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
            filter: ['==', ['get', 'leisure'], 'swimming_pool'],
            'fill-color': 'rgb(170, 211, 223)',
            'fill-outline-color': 'rgb(120, 183, 202)',
        },
        {
            filter: ['==', ['get', 'leisure'], 'sports_centre'],
            'fill-color': 'rgb(223, 252, 226)',
        },
        {
            filter: ['==', ['get', 'leisure'], 'miniature_golf'],
            'fill-color': 'rgb(181, 226, 181)',
        },
        {
            filter: ['==', ['get', 'leisure'], 'marina'],
            'fill-color': 'rgb(181, 208, 208)',
            'fill-outline-color': 'rgb(164, 187, 212)',
        },
        {
            filter: ['==', ['get', 'leisure'], 'ice_rink'],
            'fill-color': 'rgb(221, 236, 236)',
            'fill-outline-color': 'rgb(140, 220, 189)',
        },
        {
            filter: ['==', ['get', 'leisure'], 'golf_course'],
            'fill-color': 'rgb(181, 226, 181)',
        },
        {
            filter: ['==', ['get', 'leisure'], 'garden'],
            'fill-color': 'rgb(205, 235, 176)',
        },
        {
            filter: ['==', ['get', 'leisure'], 'dog_park'],
            'fill-color': 'rgb(224, 252, 227)',
        },
        {
            filter: ['==', ['get', 'leisure'], 'playground'],
            'fill-color': 'rgb(223, 252, 226)',
            'fill-outline-color': 'rgb(164, 221, 169)',
        },
        {
            filter: ['==', ['get', 'leisure'], 'track'],
            'fill-color': 'rgb(196, 224, 203)',
        },
        {
            filter: ['==', ['get', 'leisure'], 'stadium'],
            'fill-color': 'rgb(223, 252, 226)',
        },
    ],
}
