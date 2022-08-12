import layer from '../layer.js';
import style_amenity_area from './style_amenity_area.js';
import style_amenity_fountain from './style_amenity_fountain.js';

export default [
    ...layer(style_amenity_area),
    ...layer(style_amenity_fountain),
];
