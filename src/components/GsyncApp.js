import React from 'react';
import Googlelogin from './Googlelogin';
import Googlelogout from './Googlelogout';
import FormPage from './FormPage';

export default class GsyncApp extends React.Component {
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

  componentGoogleLogout = (response) => {
    console.log(response);
    console.log('response');
    /*var myObject = response['profileObj'].givenName;
    console.log(myObject);
    sessionStorage.setItem('googleLoginObject',myObject);
    console.log(sessionStorage.getItem('googleLoginObject'));
    this.setState(() => ({
      showRestOfBody: true,
      googleLoginObject: response
    }));
    console.log(this.state.googleLoginObject);*/
  }

  render() {
    const subtitle = 'Sync with Google.'; 
    const componentToDisplay = () => {
      if (this.state.googleLoginObject) {
        return (
          <div className="container">
              <Googlelogout
                componentGoogleLogout = {this.componentGoogleLogout}
              />
            </div>
        )
      } else {
        return (
          <div className="container">
              <Googlelogin
            componentGoogleLogin = {this.componentGoogleLogin}
            />
            </div>
        )
      }

    };
    return (
      <div>
        {//componentToDisplay()
        }
        <FormPage/>
      </div>
    );
  }
}
