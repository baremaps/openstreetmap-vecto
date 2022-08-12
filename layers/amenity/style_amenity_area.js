export default {
    'id': 'amenity_area',
    'type': 'fill',
    'source': 'baremaps',
    'source-layer': 'amenity',
    'layout': {
        'visibility': 'visible'
    },
    'paint': {
        'fill-antialias': true
    },
    'directives': [
        {
            'filter': [
                'any',
                ['==', 'amenity', 'kindergarten'],
                ['==', 'amenity', 'school'],
                ['==', 'amenity', 'college'],
                ['==', 'amenity', 'university']
            ],
            'fill-color': 'rgb(255, 255, 228)',
        },
        {
            'filter': ['==', 'amenity', 'hospital'],
            'fill-color': 'rgb(255, 255, 228)',
        },
        {
            'filter': ['==', 'amenity', 'grave_yard'],
            'fill-color': 'rgb(170, 203, 175)',
        },
        {
            'filter': [
                'any',
                ['==', 'amenity', 'parking'],
                ['==', 'amenity', 'motorcycle_parking']
            ],
            'fill-color': 'rgb(238, 238, 238)',
            'fill-outline-color': 'rgb(222, 214, 214)'
        },
    ]
};