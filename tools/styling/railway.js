const csv = require('csv-parser')
const fs = require('fs')

function groupBy(xs, key) {
    return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

function sources(rules) {
    return Object.entries(groupBy(rules, 'source'))
        .flatMap(([source, rules]) => layers(source, rules));
}

function layers(source, rules) {
    return Object.entries(groupBy(rules, 'layer'))
        .flatMap(([layer, rules]) => {
            return [{
                "id": `${layer}_casing`,
                "type": "line",
                "filter": filter(rules),
                "source": "baremaps",
                "source-layer": source,
                "layout": {
                    "visibility": "visible",
                    "line-cap": "round",
                    "line-join": "round"
                },
                "paint": {
                    ...casingLineWidth(rules),
                    ...casingLineColor(rules),
                }
            },
            {
                "id": `${layer}_path`,
                "type": "line",
                "filter": filter(rules),
                "source": "baremaps",
                "source-layer": source,
                "layout": {
                    "visibility": "visible",
                    "line-cap": "square",
                    "line-join": "round"
                },
                "paint": {
                    ...fillingLineWidth(rules),
                    ...fillingLineColor(rules),
                    ...fillingLineDasharray(rules),
                }
            }];
        });
}

function filter(rules) {
    return ["any", ...rules.map(rule => ["==", rule.key, rule.value])];
}

function casingLineWidth(rules) {
    return {
        "line-width": [
            "interpolate",
            ["exponential", 1.2],
            ["zoom"],
            4,
            1,
            20,
            ["case", ...rules.flatMap(rule => [["==", [ "get", rule.key ], rule.value], parseInt(rule.casing_line_width)]), 1]
        ]
    };
}

function casingLineColor(rules) {
    return {"line-color": ["case", ...rules.flatMap(rule => [["==", [ "get", rule.key ], rule.value], rule.casing_line_color]), "rgba(0, 0, 0, 0)"]};
}

function fillingLineWidth(rules) {
    return {
        "line-width": [
            "interpolate",
            ["exponential", 1.2],
            ["zoom"],
            4,
            1,
            20,
            ["case", ...rules.flatMap(rule => [["==", [ "get", rule.key ], rule.value], parseInt(rule.filling_line_width)]), 1]
        ]
    };
}

function fillingLineColor(rules) {
    return {"line-color": ["case", ...rules.flatMap(rule => [["==", [ "get", rule.key ], rule.value], rule.filling_line_color]), "rgba(0, 0, 0, 0)"]};
}

function fillingLineDasharray(rules) {
    return {"line-dasharray": [2, 2]};
}

const records = [];
fs.createReadStream('railway.csv')
    .pipe(csv())
    .on('data', (data) => records.push(data))
    .on('end', () => {
        let newLayers = sources(records);
        console.log(JSON.stringify(newLayers));
        
        let data = fs.readFileSync('../../style.json');
        let style = JSON.parse(data);
        for (let k1 in style.layers) {
            for (let k2 in newLayers) {
                if (style.layers[k1].id == newLayers[k2].id) {
                    style.layers[k1] = newLayers[k2];
                }
            }
        }
        fs.writeFileSync('../../style.json', JSON.stringify(style));
    
    });