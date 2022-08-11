export default [
  {
    id: 'natural_tree',
    type: 'circle',
    filter: ['all', ['==', 'natural', 'tree']],
    source: 'baremaps',
    'source-layer': 'points',
    layout: {
      visibility: 'visible',
    },
    paint: {
      'circle-color': 'rgb(113, 205, 111)',
      'circle-radius': [
        'interpolate',
        ['exponential', 2],
        ['zoom'],
        14,
        0,
        22,
        200,
      ],
    },
  },
  {
    id: 'natural_trunk',
    type: 'circle',
    filter: ['all', ['==', 'natural', 'tree']],
    source: 'baremaps',
    'source-layer': 'points',
    layout: {
      visibility: 'visible',
    },
    paint: {
      'circle-color': 'rgb(129, 94, 39)',
      'circle-radius': [
        'interpolate',
        ['exponential', 2],
        ['zoom'],
        14,
        0,
        22,
        50,
      ],
    },
  },
]
