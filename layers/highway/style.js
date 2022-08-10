import layer from '../utils.js'

import highwayLine from './highway_line.js'
import highwayOutline from './highway_outline.js'
import highwayDash from './highway_dash.js'
import tunnelLine from './tunnel_line.js'
import tunnelOutline from './tunnel_outline.js'
import pedestrianArea from './pedestrian_area.js'

// TODO:
// recover construction styles.
// https://raw.githubusercontent.com/baremaps/openstreetmap-vecto/7b7b9e8/layers/highway/style.js
// https://wiki.openstreetmap.org/wiki/Key:construction

export default [
    ...layer(highwayOutline),
    ...layer(highwayLine),
    ...layer(highwayDash),
    ...layer(tunnelOutline),
    ...layer(tunnelLine),
    ...layer(constructionDash),
    ...layer(pedestrianArea),
];
