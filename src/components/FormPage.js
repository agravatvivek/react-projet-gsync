import React from 'react';

const FormPage = () => (
  <div className="container">

    <button 
      className="big-button"
      onClick={() => {
        let formElement = document.getElementById("frame-form");
        if (formElement.style.display === "none") {
          formElement.style.display = "block";
        } else {
          formElement.style.display = "none";
        }
      }}
    >Demo Form</button>

    <iframe  
      id="frame-form"
      display = "none"
      height="520"  
      width="600" 
      src="https://docs.google.com/forms/d/e/1FAIpQLSfj9zcndkN625ZjxL7oLLopW6OyrKDsnTmB5vN81lS9Gd0OVg/viewform?embedded=true"
      style={{display :'none'}}
      >
        Loading...
      </iframe>

  </div>
);

export default FormPage;
