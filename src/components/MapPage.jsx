import React, { Component } from 'react';
import { number, bool } from 'prop-types';
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
    selectedYear: this.props.year || 1950,
    showImage: false,
    feature: null
  };

  componentDidMount() {
    this.leafletMap = L.map('mapContainer', {
      maxZoom: 16,
      minZoom: 13
    }).setView([60.98, 25.65], 14);

    this.addLayer(this.state.selectedYear);
    this.addObjects(this.state.selectedYear);
  }

  addLayer = (year) => {
    const index = this.state.years.indexOf(year);

    if (this.currentLayer) {
      this.leafletMap.removeLayer(this.currentLayer);
    }

    this.currentLayer = L.tileLayer(`${maps.basemaps[index].url}/{z}/{x}/{y}.png`, { tms: true }).addTo(this.leafletMap);
    this.leafletMap.setMinZoom(maps.basemaps[index].hiZoom ? 13 : 14);
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
    const mapContainerClass = this.props.noYearSelector ? 'fullMapContainer' : 'mapContainer';

    return (
      <div className="mapPage container-fluid">
        {this.state.showImage ?
          <ImageView feature={this.state.feature} close={this.close} /> : null}
        <div className="row">
          <div className="col-md-12">
            <div id="mapContainer" className={mapContainerClass} />
          </div>
        </div>
        {!this.props.noYearSelector &&
        <div className="row">
          <div className="col-md-12">
            <YearSelector
              years={this.state.years}
              selectedYear={this.state.selectedYear}
              selectYear={this.selectYear}
            />
          </div>
        </div>
        }
      </div>
    );
  }
}

MapPage.propTypes = {
  year: number,
  noYearSelector: bool
};

MapPage.defaultProps = {
  year: 1950,
  noYearSelector: false
};

export default MapPage;
