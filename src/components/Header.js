import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
  <div>
    <div className="header">
      <div className="container">
        <h1 className="header__title">{props.title}</h1>
        {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
      </div>
  </div>
  <div className="header-menu">
    <div className="container-dark">
      <a href="https://mail.google.com/" target="_blank" className="button-menu">Gmail</a>
      <NavLink to="/calender" activeClassName="is-active" className="button-menu">Calender</NavLink>
      <NavLink to="/forms" activeClassName="is-active" className="button-menu">Forms</NavLink>
      <NavLink to="/drive" activeClassName="is-active" className="button-menu">Drive</NavLink>
    </div>
  </div>
  </div>
);

Header.defaultProps = {
  title: 'GSync'
};

export default Header;
