import layer from './layers/layer.js';

import background from "./layers/background/style.js";
import amenity_fill_1 from "./layers/amenity/fill_1.js";
import amenity_fill_2 from "./layers/amenity/fill_2.js";
import landuse_fill_1 from "./layers/landuse/fill_1.js";
import landuse_fill_2 from "./layers/landuse/fill_2.js";
import natural_fill_1 from "./layers/natural/fill_1.js";
import natural_fill_2 from "./layers/natural/fill_2.js";
import power_plant from "./layers/power/plant.js";
import power_tower from "./layers/power/tower.js";
import power_cable from "./layers/power/cable.js";
import leisure_fill_1 from "./layers/leisure/fill_1.js";
import leisure_fill_2 from "./layers/leisure/fill_2.js";
import leisure_park from "./layers/leisure/park.js";
import railway_line from "./layers/railway/line.js";
import natural_tree from "./layers/natural/tree.js";
import natural_trunk from "./layers/natural/trunk.js";
import highway_line from './layers/highway/highway_line.js';
import highway_outline from './layers/highway/highway_outline.js';
import highway_dash from './layers/highway/highway_dash.js';
import highway_tunnel_line from './layers/highway/tunnel_line.js';
import highway_tunnel_outline from './layers/highway/tunnel_outline.js';
import highway_pedestrian_area from './layers/highway/pedestrian_area.js';
import highway_bridge_line from './layers/highway/bridge_line.js';
import highway_bridge_outline from './layers/highway/bridge_outline.js';
import highway_label from './layers/highway/highway_label.js';
import route_line from "./layers/route/style.js"
import building_fill from "./layers/building/fill.js";
import building_number from "./layers/building/number.js";
import man_made_pier_line from "./layers/man_made/pier_line.js";
import man_made_pier_label from "./layers/man_made/pier_label.js";
import point from "./layers/point/style.js";
import waterway_line from "./layers/waterway/line.js"
import waterway_tunnel_line from "./layers/waterway/tunnel_line.js"
import waterway_tunnel_casing from "./layers/waterway/tunnel_casing.js"

export default {
    "version": 8,
    "name": "OpenStreetMapVecto",
    "center": [6.6323, 46.5197],
    "zoom": 14,
    "sources": {
        "baremaps": {
            "type": "vector",
            "url": "http://localhost:9000/tiles.json"
        }
    },
    "sprite": "https://tiles.baremaps.com/sprites/osm/sprite",
    "glyphs": "https://tiles.baremaps.com/fonts/{fontstack}/{range}.pbf",
    "layers": [
        background,
        layer(landuse_fill_1),
        layer(landuse_fill_2),
        layer(amenity_fill_1),
        layer(amenity_fill_2),
        layer(natural_fill_1),
        layer(natural_fill_2),
        layer(power_plant),
        layer(leisure_fill_1),
        layer(leisure_fill_2),
        layer(leisure_park),
        layer(waterway_line),
        layer(waterway_tunnel_casing),
        layer(waterway_tunnel_line),
        layer(railway_line),
        layer(highway_tunnel_outline),
        layer(highway_tunnel_line),
        layer(highway_outline),
        layer(highway_line),
        layer(highway_dash),
        layer(highway_pedestrian_area),
        layer(highway_bridge_line),
        layer(highway_bridge_outline),
        layer(highway_label),
        layer(route_line),
        layer(building_fill),
        layer(building_number),
        layer(man_made_pier_line),
        layer(man_made_pier_label),
        layer(power_cable),
        layer(power_tower),
        layer(natural_tree),
        layer(natural_trunk),
        layer(point),
    ],
};
