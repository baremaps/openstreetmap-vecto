import layer from '../layer.js';
import style_highway_line from './style_highway_line.js';
import style_highway_outline from './style_highway_outline.js';
import style_highway_dash from './style_highway_dash.js';
import style_tunnel_line from './style_tunnel_line.js';
import style_tunnel_outline from './style_tunnel_outline.js';
import style_pedestrian_area from './style_pedestrian_area.js';
import style_highway_label from './style_highway_label.js';
import style_bridge_line from './style_bridge_line.js';
import style_bridge_outline from './style_bridge_outline.js';

// TODO:
// recover construction styles.
// https://raw.githubusercontent.com/baremaps/openstreetmap-vecto/7b7b9e8/layers/highway/style.js
// https://wiki.openstreetmap.org/wiki/Key:construction

export default [
    ...layer(style_tunnel_outline),
    ...layer(style_tunnel_line),
    ...layer(style_highway_outline),
    ...layer(style_highway_line),
    ...layer(style_highway_dash),
    ...layer(style_pedestrian_area),
    ...layer(style_bridge_line),
    ...layer(style_bridge_outline),
    ...layer(style_highway_label),
];
