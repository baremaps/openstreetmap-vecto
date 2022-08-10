export default function layer(layer) {
    return [
        {
            'id': layer['id'],
            'type': layer['type'],
            'filter': filter(layer),
            'source': layer['source'],
            'source-layer': layer['source-layer'],
            'layout': layer['layout'],
            'paint': layer['directives'] ? Object.assign({
                ...lineWidth(layer),
                ...lineColor(layer),
                ...lineGapWidth(layer),
            }, layer['paint']): layer['paint'],
        },
    ]
}

function filter(layer) {
    if (layer['filter'] && layer['directives']) {
        return ['all', layer['filter'], ['any', ...layer['directives'].map((rule) => rule['filter'])]];
    } else if (layer['directives']) {
        return ['any', ...layer['directives'].map((rule) => rule['filter'])];
    } else if (layer['filter']){
        return layer['filter'];
    } else {
        return [];
    }
}

function lineWidth(layer) {
    let cases = layer['directives'].flatMap((rule) => {
        if (rule['line-width']) {
            return [rule['filter'], rule['line-width']]
        } else {
            return []
        }
    })
    if (cases.length == 0) {
        return {};
    }
    return {
        'line-width': [
            'interpolate',
            ['exponential', 1.2],
            ['zoom'],
            4,
            1,
            20,
            [
                'case',
                ...cases,
                1,
            ],
        ],
    }
}

function lineGapWidth(layer) {
    let cases = layer['directives'].flatMap((rule) => {
        if (rule['line-gap-width']) {
            return [rule['filter'], rule['line-gap-width']]
        } else {
            return []
        }
    });
    if (cases.length == 0) {
        return {};
    }
    return {
        'line-gap-width': [
            'interpolate',
            ['exponential', 1.2],
            ['zoom'],
            4,
            1,
            20,
            [
                'case',
                ...cases,
                1,
            ],
        ],
    }
}

function lineColor(layer) {
    let cases = layer['directives'].flatMap((rule) => {
        if (rule['line-color']) {
            return [rule['filter'], rule['line-color']]
        } else {
            return []
        }
    })
    if (cases.length == 0) {
        return {};
    }
    return {
        'line-color': [
            'case',
            ...cases,
            'rgba(0, 0, 0, 0)',
        ],
    }
}

function groupBy(xs, key) {
    return xs.reduce(function (rv, x) {
        ; (rv[x[key]] = rv[x[key]] || []).push(x)
        return rv
    }, {})
}
