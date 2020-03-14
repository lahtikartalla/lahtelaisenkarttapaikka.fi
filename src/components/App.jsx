import React from 'react';
import { Route } from 'react-router-dom';

import FrontPage from './FrontPage';
import MapPage from './MapPage';
// import Navigation from './Navigation';
import InfoPage from './InfoPage';

export default () => (
  <div>
    { /* <Navigation /> */ }
    <Route path="/" exact component={FrontPage} />
    <Route path="/kartta" component={MapPage} />
    <Route path="/info" component={InfoPage} />
    <Route path="/1918" component={() => <MapPage year={1918} noYearSelector />} />
  </div>
);
