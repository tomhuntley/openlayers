import Feature from '../../../../src/ol/Feature.js';
import Map from '../../../../src/ol/Map.js';
import Point from '../../../../src/ol/geom/Point.js';
import View from '../../../../src/ol/View.js';
import {Icon, Style} from '../../../../src/ol/style.js';
import {
  Tile as TileLayer,
  Vector as VectorLayer,
} from '../../../../src/ol/layer.js';
import {Vector as VectorSource, XYZ} from '../../../../src/ol/source.js';
import {fromLonLat} from '../../../../src/ol/proj.js';

const center = fromLonLat([8.6, 50.1]);

new Map({
  layers: [
    new TileLayer({
      source: new XYZ({
        url: '/data/tiles/satellite/{z}/{x}/{y}.jpg',
      }),
    }),
    new VectorLayer({
      style: function () {
        return new Style({
          image: new Icon({
            opacity: 0.5,
            src: '/data/icon.png',
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
          }),
        });
      },
      source: new VectorSource({
        features: [new Feature(new Point(center))],
      }),
    }),
  ],
  target: 'map',
  view: new View({
    center: center,
    zoom: 3,
  }),
});

render();
