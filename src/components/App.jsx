import React from 'react';
import { Route } from 'react-router-dom';

import FrontPage from './FrontPage';
import MapPage from './MapPage';

export default () => (
  <div>
    <Route path="/" exact component={FrontPage} />
    <Route path="/kartta" component={MapPage} />
  </div>
);
