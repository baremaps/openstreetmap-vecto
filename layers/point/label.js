export default {
    id: 'label',
    type: 'symbol',
    source: 'baremaps',
    'source-layer': 'point',
    layout: {
        visibility: 'visible',
        'text-font': ['Noto Sans Regular'],
        'text-field': ['get', 'name'],
        'text-size': 12,
    },
    paint: {
        'text-halo-color': 'rgba(255, 255, 255, 0.8)',
        'text-halo-width': 1,
    },
}