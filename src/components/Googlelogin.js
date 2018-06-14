import React from 'react';
import GoogleLogin from 'react-google-login';

export default class Googlelogin extends React.Component {
    render() {
      return (
        <div>
            <GoogleLogin
            className="big-button"
            clientId="898293876566-iahl0l51tvtut5sfg2bopf4dlhnvsllu.apps.googleusercontent.com"
            buttonText="Login with google"
            onSuccess={this.props.componentGoogleLogin}
            onFailure={this.props.componentGoogleLogin}
            />
            </div>
      );
    }
  }