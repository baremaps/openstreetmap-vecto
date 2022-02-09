import './style.css'

import 'maplibre-gl/dist/maplibre-gl.css'
import maplibregl from 'maplibre-gl/dist/maplibre-gl.js' 

var map1 = new maplibregl.Map({
  container: 'map1',
  style: 'http://localhost:9090/style.json',
  center: [6.6323, 46.5197],
  zoom: 14,
  hash: true
});

var map2 = new maplibregl.Map({
  container: 'map2',
  hash: true,
  style: {
    version: 8,
    sources: {
      osm: {
        type: 'raster',
        tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
        tileSize: 256,
      }
    },
    layers: [{
      id: 'osm',
      type: 'raster',
      source: 'osm',
    }],
  }
});

map1.on('moveend', (e) => {
  map2.setCenter(map1.getCenter());
  map2.setZoom(map1.getZoom());
});
