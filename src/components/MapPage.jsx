import React, { Component } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

import YearSelector from './YearSelector';

import './MapPage.css';
import maps from '../maps.json';

class MapPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      years: maps.basemaps.map(map => Number(map.name)),
      selectedYear: 1950
    };

    this.selectYear = this.selectYear.bind(this);
    this.addLayer = this.addLayer.bind(this);
  }

  componentDidMount() {
    this.leafletMap = L.map('mapContainer', {
      maxZoom: 16,
      minZoom: 14
    }).setView([60.985, 25.66], 15);
    this.addLayer(this.state.selectedYear);
  }

  addLayer(year) {
    const index = this.state.years.indexOf(year);

    if (this.currentLayer) {
      this.leafletMap.removeLayer(this.currentLayer);
    }

    this.currentLayer = L.tileLayer(`${maps.basemaps[index].url}/{z}/{x}/{y}.png`, { tms: true }).addTo(this.leafletMap);
  }

  selectYear(year) {
    this.setState({ selectedYear: year });
    this.addLayer(year);
  }

  render() {
    return (
      <div className="mapPage">
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
