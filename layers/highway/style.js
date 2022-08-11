import layer from '../layer.js'

import highway_line from './highway_line.js'
import highway_outline from './highway_outline.js'
import highway_dash from './highway_dash.js'
import tunnel_line from './tunnel_line.js'
import tunnel_outline from './tunnel_outline.js'
import pedestrian_area from './pedestrian_area.js'
import highway_label from './highway_label.js'
import bridge_line from './bridge_line.js'
import bridge_outline from './bridge_outline.js'

// TODO:
// recover construction styles.
// https://raw.githubusercontent.com/baremaps/openstreetmap-vecto/7b7b9e8/layers/highway/style.js
// https://wiki.openstreetmap.org/wiki/Key:construction

export default [

    ...layer(tunnel_outline),
    ...layer(tunnel_line),
    ...layer(highway_outline),
    ...layer(highway_line),
    ...layer(highway_dash),
    ...layer(pedestrian_area),
    ...layer(bridge_line),
    ...layer(bridge_outline),
    ...layer(highway_label),
];
