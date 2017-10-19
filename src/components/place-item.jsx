import React from 'react';
import css from './place-item.scss';

export default (props) => (
  <a className="place-item" href={"#" + props.id}>
    <img className="pi-img" src={props.img}/>
    <div className="pi-small-info">
      <div className="pi-title">{props.title}</div>
      <div className="pi-city">{props.city}</div>
    </div>
  </a>
);
