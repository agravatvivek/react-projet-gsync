import React from 'react';
import { NavLink } from 'react-router-dom';
import Googlelogin from './Googlelogin';
import Googlelogout from './Googlelogout';

export default class Header extends React.Component {

  state = {
    options: [],
    selectedOption: undefined,
    showRestOfBody: false,
    googleLoginObject: undefined
  };

  componentGoogleLogin = (response) => {
    console.log(response);
    var myObject = response['profileObj'].givenName;
    sessionStorage.setItem('googleLoginObject',myObject);
    this.setState(() => ({
      showRestOfBody: true,
      googleLoginObject: response
    }));
  }

  render() {

    const componentToDisplay = () => {
      console.log(this.state.googleLoginObject);
      if (this.state.googleLoginObject || sessionStorage.getItem('googleLoginObject'))  {
        return (
          <Googlelogout
            componentGoogleLogout = {this.componentGoogleLogout}
          />
        )
      } else {
        return (
          <Googlelogin
            componentGoogleLogin = {this.componentGoogleLogin}
          />
        )
      }

    };

    return (
  <div>
    <div className="header">
      <div className="container">
        <table className="table-header">
        <tbody>
          <tr>
            <td className="tableRow-header">
              <h1 className="header__title">Gsync</h1>
            </td>
            <td className="tableRow-header__last">
                <div>
                  {componentToDisplay()}
                </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
  </div>
  <div className="header-menu">
    <div className="container-dark">
      <NavLink to="/forms" activeClassName="is-active" className="button-menu">Forms</NavLink>
      <NavLink to="/calender" activeClassName="is-active" className="button-menu">Calender</NavLink>
      <NavLink to="/drive" activeClassName="is-active" className="button-menu">Drive</NavLink>
      <NavLink to="/gmail" activeClassName="is-active" className="button-menu">Gmail</NavLink>
    </div>
  </div>
  </div>
);
}
}

//<NavLink to="/forms" activeClassName="is-active" className="button-menu">Forms</NavLink>
//<NavLink to="/drive" activeClassName="is-active" className="button-menu">Drive</NavLink>


/*

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
      <a href="https://docs.google.com/forms/" target="_blank" className="button-menu">Forms</a>
      <a href="https://drive.google.com/drive/my-drive" target="_blank" className="button-menu">Drive</a>
    </div>
  </div>
  </div>
);

Header.defaultProps = {
  title: 'GSync'
};

export default Header;

*/