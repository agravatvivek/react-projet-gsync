import React from 'react';
import { GoogleLogout } from 'react-google-login';

export default class Googlelogout extends React.Component {
    render() {
      console.log('log out class');
      return (
        <div>
            <GoogleLogout
            className="button-menu"
            clientId="898293876566-iahl0l51tvtut5sfg2bopf4dlhnvsllu.apps.googleusercontent.com"
            buttonText={sessionStorage.getItem('googleLoginObject')}
            onSuccess={this.props.componentGoogleLogout}
            onFailure={this.props.componentGoogleLogout}
            onClick={this.props.componentGoogleLogout}
            />
            </div>
      );
    }
  }