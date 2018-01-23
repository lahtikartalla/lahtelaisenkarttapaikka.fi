import React from 'react';
import Info from './InfoPages/Info';
import Sources from './InfoPages/Sources';
import Links from './InfoPages/Links';
import Contact from './InfoPages/Contact';

export default () => (
  <div className="container">
    <Info />
    <Sources />
    <Links />
    <Contact />
  </div>
);
