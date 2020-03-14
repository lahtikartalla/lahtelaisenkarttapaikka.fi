import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Row, Col } from 'react-bootstrap';

import './FrontPage.css';
import textContent from '../texts/etusivu.md';

export default () => (
  <div className="frontPage">
    <div className="container">
      <Row>
        <Col md={12}>
          <h1>Lahtikartalla.fi</h1>

          <img alt="Lahden vaakuna" className="lahtiShield" src="dist/Lahti.vaakuna.svg" />

          <ReactMarkdown source={textContent} />

          {/* <Link to="/kartta">
            <button className="btn btn-lg btn-success">
              Kartalle
            </button>
          </Link> */}
        </Col>
      </Row>
    </div>
  </div>
);
