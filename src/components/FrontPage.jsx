import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './FrontPage.css';

export default () => (
  <div className="frontPage">
    <div className="container">
      <Row>
        <Col md={12}>
          <h1>Lahtikartalla.fi</h1>

          <img alt="Lahden vaakuna" className="lahtiShield" src="dist/Lahti.vaakuna.svg" />

          <p>
          Tervetuloa lahtikartalla.fi-sivustolle!
          </p>

          <p>SIVUSTO AVATAAN KEVÄÄLLÄ 2018.</p>

          <p>
          Sivu esittelee Lahden historiaa karttojen, kuvien, videoiden ja
          tekstin muodossa. Sivun runkona toimii vanhat kartat, joita on
          jokaiselta vuosikymmeneltä alkaen 1870-luvulta. Vanhoja karttoja voi
          vertailla nykyhetkeen Google Mapsin avulla. Sivuston kartat ovat saatu
          Lahden kaupungilta.
          </p>

          <p>
            Sivuston ovat toteuttaneet Lahti-Seura ry <a href="http://lahtiseura.fi" target="new">Lahti-Seura ry</a> ja Juuso Lehtinen.
          </p>

          <p>
            Palaute, kehitysideat ja tiedustelut ovat tervetulleita osoitteeseen
            puheenjohtaja@lahtiseura.fi
          </p>

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
