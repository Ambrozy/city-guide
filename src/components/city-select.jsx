import React from 'react';
import css from './city-select.scss';

export default (props) => (
  <div className="city-select-p">
    Выберите&nbsp;
    <button className="link city-select">
      город
      <ul className="cs-popup">
        {(props.cities || []).map((item, key) => (
          <li className="cs-popup-item" key={key}><a href="#">{item}</a></li>
        ))}
      </ul>
    </button>
  </div>
);
