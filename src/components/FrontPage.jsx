import React from 'react';
import { Link } from 'react-router-dom';

import './FrontPage.css';

export default () => (
  <div className="frontPage">
    <div className="container">
      <div className="center">
        <h1>Lahtikartalla.fi</h1>

        <img alt="Lahden vaakuna" className="lahtiShield" src="/dist/Lahti.vaakuna.svg" />

        <p>
          Lahtikartalla.fi on sivusto, joka perustuu karttoihin eri
          vuosikymmeniltä Lahdesta. Karttoihin merkitään kuva-, video- tai
          tekstisisältöä sekä linkkejä, jotka kohdistetaan tiettyihin paikkoihin
          ja joiden sisällöt vaihtuvat eri vuosikymmenten mukaan. Sivusto aukeaa
          vuoden 2018 alussa, ja sen toteuttaa
          yhteistyössä <a href="http://lahtiseura.fi" target="new">Lahti-Seura ry</a> ja Juuso Lehtinen.
        </p>
        <Link to="/kartta">
          <button className="btn btn-lg btn-success">
            Kartalle
          </button>
        </Link>
      </div>
    </div>
  </div>
);
