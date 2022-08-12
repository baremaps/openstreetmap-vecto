export default function layer(layer) {
  return [
    {
      'id': layer['id'],
      'type': layer['type'],
      'filter': filter(layer),
      'source': layer['source'],
      'source-layer': layer['source-layer'],
      'layout': layer['directives']
        ? Object.assign(
            {
              ...iconImage(layer),
              ...lineSortKey(layer),
            },
            layer['layout'],
          )
        : layer['layout'],
      'paint': layer['directives']
        ? Object.assign(
            {
              ...textColor(layer),
              ...lineWidth(layer),
              ...lineColor(layer),
              ...iconColor(layer),
              ...lineGapWidth(layer),
              ...fillColor(layer),
              ...fillOutlineColor(layer),
            },
            layer['paint'],
          )
        : layer['paint'],
    },
  ]
}

function filter(layer) {
  if (layer['filter'] && layer['directives']) {
    return [
      'all',
      layer['filter'],
      ['any', ...layer['directives'].map((rule) => rule['filter'])],
    ]
  } else if (layer['directives']) {
    return ['any', ...layer['directives'].map((rule) => rule['filter'])]
  } else if (layer['filter']) {
    return layer['filter']
  } else {
    return []
  }
}

function lineWidth(layer) {
  return mergeInterpolatedDirective(layer, 'line-width', 1)
}

function lineGapWidth(layer) {
  return mergeInterpolatedDirective(layer, 'line-gap-width', 1)
}

function fillColor(layer) {
  return mergeDirectives(layer, 'fill-color', 'rgba(0, 0, 0, 0)')
}

function fillOutlineColor(layer) {
  return mergeDirectives(layer, 'fill-outline-color', 'rgba(0, 0, 0, 0)')
}

function lineColor(layer) {
  return mergeDirectives(layer, 'line-color', 'rgba(0, 0, 0, 0)')
}

function iconImage(layer) {
  return mergeDirectives(layer, 'icon-image', 'none')
}

function iconColor(layer) {
  return mergeDirectives(layer, 'icon-color', 'rgba(0, 0, 0, 0)')
}

function textColor(layer) {
  return mergeDirectives(layer, 'text-color', 'rgba(0, 0, 0, 0)')
}

function lineSortKey(layer) {
  return mergeDirectives(layer, 'line-sort-key', 0)
}

function mergeDirectives(layer, property, value) {
  let cases = layer['directives'].flatMap((rule) => {
    if (rule[property]) {
      return [rule['filter'], rule[property]]
    } else {
      return []
    }
  })
  if (cases.length == 0) {
    return {}
  }
  return {
    [property]: ['case', ...cases, value],
  }
}

function mergeInterpolatedDirective(layer, property, value) {
  let cases = layer['directives'].flatMap((rule) => {
    if (rule[property]) {
      return [rule['filter'], rule[property]]
    } else {
      return []
    }
  })
  if (cases.length == 0) {
    return {}
  }
  return {
    [property]: [
      'interpolate',
      ['exponential', 1.2],
      ['zoom'],
      4,
      1,
      20,
      ['case', ...cases, value],
    ],
  }
}

function groupBy(xs, key) {
  return xs.reduce(function (rv, x) {
    ;(rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})
}
