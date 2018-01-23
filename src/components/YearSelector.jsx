import React from 'react';
import { arrayOf, func, number } from 'prop-types';
import { Button } from 'react-bootstrap';

import './YearSelector.css';

const YearSelector = ({ years, selectYear, selectedYear }) => (
  <div className="years">
    {years.map(year => (
      <div key={year} className="year">
        <Button
          bsStyle="default"
          className={year === selectedYear ? 'yearButton selected' : 'yearButton'}
          onClick={() => selectYear(year)}
        >
          {year}
        </Button>
      </div>
    ))}
  </div>
);

YearSelector.propTypes = {
  selectedYear: number.isRequired,
  selectYear: func.isRequired,
  years: arrayOf(number).isRequired
};

export default YearSelector;
