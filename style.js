import background from "./style/background.js";
import labels from "./style/labels.js";
import aerialway from "./style/aerialway.js";
import highway from "./style/highway.js";
import landuse from "./style/landuse.js";
import amenity from "./style/amenity.js";
import leisure from "./style/leisure.js";
import water from "./style/water.js";
import tree from "./style/tree.js";
import power from "./style/power.js";
import powerOverlay from "./style/power-overlay.js";
import natural from "./style/natural.js";
import naturalOverlay from "./style/natural-overlay.js";
import waterway from "./style/waterway.js";
import barrier from "./style/barrier.js";
import railway from "./style/railway.js";
import amenityOverlay from "./style/amenity-overlay.js";
import route from "./style/route.js";
import tourism from "./style/tourism.js";
import building from "./style/building.js";
import attraction from "./style/attraction.js";
import boundary from "./style/boundary.js";
import manMade from "./style/man-made.js";

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
        ...water,
        ...leisure,
        ...naturalOverlay,
        ...waterway,
        ...amenityOverlay,
        ...barrier,
        ...railway,
        ...highway,
        ...route , 
        ...tourism, 
        ...building, 
        ...attraction, 
        ...manMade, 
        ...boundary,
        ...powerOverlay,
        ...aerialway,
        ...tree,
        ...labels
    ],
    "center": [6.6323, 46.5197],
    "metadata": {
        "maputnik:renderer": "mbgljs"
    },
    "zoom": 14
};
