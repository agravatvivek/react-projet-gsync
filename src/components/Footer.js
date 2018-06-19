import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = (props) => (
  <div>
    <div className="footer">
      <div className="container">
        <h1 className="header__title">{props.title}</h1>
        {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
      </div>
  </div>
  
  </div>
);

Header.defaultProps = {
  title: 'GSync'
};

export default Footer;
