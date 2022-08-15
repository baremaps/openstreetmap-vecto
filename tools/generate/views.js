import highway_line from "../../layers/highway/highway_line.js";

function translate(expression) {
    if (!Array.isArray(expression)) {
        return `'${expression}'`;
    }
    switch (expression[0]) {
        case "all": {
            let arr = expression.slice(1);
            if (arr.length == 0) {
                return '';
            } else if(arr.length == 1) {
                return translate(arr[0]);
            } else {
                return `(${arr.map(e => translate(e)).join(" AND ")})`
            }
        }
        case "any": {
            let arr = expression.slice(1);
            if (arr.length == 0) {
                return '';
            } else if(arr.length == 1) {
                return translate(arr[0]);
            } else {
                return `(${arr.map(e => translate(e)).join(" OR ")})`
            }
        }
        case 'get':
            return `tags ->> '${expression[1]}'`
        case '==':
            return `${translate(expression[1])} LIKE ${translate(expression[2])}`
        case '!=':
            return `${translate(expression[1])} NOT LIKE ${translate(expression[2])}`
        default:
            throw new Error('Unsupported')
    }
}
let zoomLevels = Array.from(Array(20).keys());
    zoomLevels.forEach(zoom => {
    let directives = highway_line.directives
        .filter(directive => directive.minzoom < zoom)
        .map(directive => directive.filter);
    let conditions = translate(['any', ...directives]);
    let sql = `CREATE MATERIALIZED VIEW osm_ways_${zoom} AS SELECT * FROM osm_ways WHERE ${conditions};`
    console.log(sql)
});




