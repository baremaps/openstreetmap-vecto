import background from "./layers/background/style.js";
import labels from "./layers/labels/style.js";
import aerialway from "./layers/aerialway/style.js";
import highway from "./layers/highway/style.js";
import landuse from "./layers/landuse/style.js";
import amenity from "./layers/amenity/style.js";
import leisure from "./layers/leisure/style.js";
import tree from "./layers/tree/style.js";
import power from "./layers/power/style.js";
import power_overlay from "./layers/power/style_overlay.js";
import natural from "./layers/natural/style.js";
import natural_overlay from "./layers/natural/style_overlay.js";
import waterway from "./layers/waterway/style.js";
import barrier from "./layers/barrier/style.js";
import railway from "./layers/railway/style.js";
import amenity_overlay from "./layers/amenity/style_overlay.js";
import route from "./layers/route/style.js";
import tourism from "./layers/tourism/style.js";
import building from "./layers/building/style.js";
import attraction from "./layers/attraction/style.js";
import boundary from "./layers/boundary/style.js";
import man_made from "./layers/man_made/style.js";

export default {
    "version": 8,
    "name": "OpenStreetMapVecto",
    "sources": {
        "baremaps": {
            "type": "vector",
            "url": "http://localhost:9000/tiles.json"
        }
    },
    "sprite": "https://tiles.baremaps.com/sprites/osm/sprite",
    "glyphs": "https://tiles.baremaps.com/fonts/{fontstack}/{range}.pbf",
    "layers": [
        ...background,
        ...landuse,
        ...power,
        ...amenity ,
        ...natural,
        ...leisure,
        ...natural_overlay,
        ...waterway,
        ...amenity_overlay,
        ...barrier,
        ...railway,
        ...highway,
        ...route , 
        ...tourism, 
        ...building, 
        ...attraction, 
        ...man_made, 
        ...boundary,
        ...power_overlay,
        ...aerialway,
        ...tree,
        ...labels,
    ],
    "center": [6.6323, 46.5197],
    "metadata": {
        "maputnik:renderer": "mbgljs"
    },
    "zoom": 14
};
