import React from 'react';

import './YearSelector.css';

const YearSelector = ({ years, selectYear, selectedYear }) => (
  <div className="years">
    {years.map(year => (
      <div key={year} className="year">
        <button
          className={year === selectedYear ? 'yearButton selected' : 'yearButton'}
          onClick={() => selectYear(year)}
        >
          {year}
        </button>
      </div>
    ))}
  </div>
);

export default YearSelector;
