import aerialway from "./layers/aerialway/tileset.js";
import amenity from "./layers/amenity/tileset.js";
import attraction from "./layers/attraction/tileset.js";
import barrier from "./layers/barrier/tileset.js";
import boundary from "./layers/boundary/tileset.js";
import building from "./layers/building/tileset.js";
import highway from "./layers/highway/tileset.js";
import natural from "./layers/natural/tileset.js";
import leisure from "./layers/leisure/tileset.js";
import landuse from "./layers/landuse/tileset.js";
import tourism from "./layers/tourism/tileset.js";
import railway from "./layers/railway/tileset.js";
import route from "./layers/route/tileset.js";
import man_made from "./layers/man_made/tileset.js";
import power from "./layers/power/tileset.js";
import point from "./layers/point/tileset.js";
import waterway from "./layers/waterway/tileset.js";

export default {
  "tilejson": "2.2.0",
  "center": [
    6.5743,
    46.5189,
    14.0
  ],
  "minzoom": 1.0,
  "maxzoom": 14.0,
  "tiles": [
    "http://localhost:9000/tiles/{z}/{x}/{y}.mvt"
  ],
  "vector_layers": [
    // ...point,
    // ...aerialway,
    // ...power,
    // ...amenity,
    // ...attraction,
    // ...barrier,
    // ...boundary,
    // ...building,
    // ...highway,
    // ...natural,
    // ...leisure,
    // ...landuse,
    // ...tourism,
    ...railway,
    // ...route,
    // ...man_made,
    // ...waterway,
  ]
}