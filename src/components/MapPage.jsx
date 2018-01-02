import React, { Component } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import './MapPage.css';

class MapPage extends Component {
  componentDidMount() {
    L.map('mapContainer');
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
          <div className="col-md-1">
            Vuodet
          </div>
        </div>
      </div>
    );
  }
}

export default MapPage;
