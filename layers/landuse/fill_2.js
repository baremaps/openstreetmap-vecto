export default {
    id: 'landuse_fill_2',
    type: 'fill',
    source: 'baremaps',
    'source-layer': 'landuse',
    layout: {
        visibility: 'visible',
    },
    paint: {
        'fill-color': [
            'match',
            ['get', 'landuse'],
            'grass',
            'rgb(205, 235, 176)',
            'forest',
            'rgb(171, 210, 156)',
            'greenhouse_horticulture',
            'rgb(237, 240, 214)',
            'orchard',
            'rgb(172, 225, 161)',
            'rgba(0, 0, 0, 0)',
        ],
        'fill-antialias': true,
    },
}
