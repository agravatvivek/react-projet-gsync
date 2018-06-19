import React from 'react';
import Googlelogin from './Googlelogin';

export default class GsyncApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
    showRestOfBody: false
  };
  
  componentGoogleLogin = (response) => {
    console.log(response);
    this.setState(() => ({
      showRestOfBody: true
    }));
  }

  render() {
    const subtitle = 'Sync with Google.';
    return (
      <div>
        
        <div className="container">
          <Googlelogin
            componentGoogleLogin = {this.componentGoogleLogin}
          />
        </div>
      </div>
    );
  }
}
