import React, { Component } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

import YearSelector from './YearSelector';

import './MapPage.css';
import maps from '../maps.json';
import objects from '../objects.json';
import ImageView from './ImageView';

/* eslint-disable */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
/* eslint-enable */

class MapPage extends Component {
  state = {
    years: maps.basemaps.map(map => Number(map.name)),
    selectedYear: 1950,
    showImage: false,
    feature: null
  };

  componentDidMount() {
    this.leafletMap = L.map('mapContainer', {
      maxZoom: 16,
      minZoom: 14
    }).setView([60.985, 25.65], 15);

    this.addLayer(this.state.selectedYear);
    this.addObjects(this.state.selectedYear);
  }

  addLayer = (year) => {
    const index = this.state.years.indexOf(year);

    if (this.currentLayer) {
      this.leafletMap.removeLayer(this.currentLayer);
    }

    this.currentLayer = L.tileLayer(`${maps.basemaps[index].url}/{z}/{x}/{y}.png`, { tms: true }).addTo(this.leafletMap);
  }

  addObjects = (year) => {
    const mapObjects = objects.features.filter(feature => feature.properties.year === year);

    if (this.objectLayer) {
      this.leafletMap.removeLayer(this.objectLayer);
    }

    this.objectLayer = L.geoJSON({ type: 'FeatureCollection', features: mapObjects }, {
      onEachFeature: (feature, layer) => layer.on('click', () => this.setState({ feature, showImage: true }))
    })
      .addTo(this.leafletMap);
  }

  selectYear = (year) => {
    this.setState({ selectedYear: year });
    this.addLayer(year);
    this.addObjects(year);
  }

  close = () => {
    this.setState({ showImage: false });
  }

  render() {
    return (
      <div className="mapPage container-fluid">
        {this.state.showImage ? <ImageView feature={this.state.feature} close={this.close} /> : null}
        <div className="row">
          <div className="col-md-12">
            <div id="mapContainer" className="mapContainer" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <YearSelector
              years={this.state.years}
              selectedYear={this.state.selectedYear}
              selectYear={this.selectYear}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MapPage;
