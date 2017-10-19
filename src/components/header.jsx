import React from 'react';
import css from './header.scss';

export default () => (
  <header>
    <div className="container header-container">
      <div className="header-title" lang="en">
        Microsoft Developer Tour
        <small className="ht-subtitle" lang="ru">Технологическая экспедиция</small>
      </div>
      <div className="spring"></div>
      <div className="header-links">
        <a className="header-link" href="#">Об экспедиции</a>
        <a className="header-link" href="#">Новости</a>
      </div>
      <div className="header-social-links">
        <a className="header-social fb" href="#" target="_blank" lang="en">Facebook</a>
        <a className="header-social tw" href="#" target="_blank" lang="en">Twitter</a>
        <a className="header-social vk" href="#" target="_blank">Вконтакте</a>
      </div>
    </div>
  </header>
);
