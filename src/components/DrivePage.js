import React from 'react';

const DrivePage = () => (
  <div className="container">

    <button 
      className="big-button"
      onClick={() => {
        let formElement = document.getElementById("frame-drive");
        if (formElement.style.display === "none") {
          formElement.style.display = "block";
        } else {
          formElement.style.display = "none";
        }
      }}
    >Demo Drive</button>

    <iframe  
      id="frame-drive"
      display = "none"
      height="520"  
      width="600" 
      src="https://drive.google.com/embeddedfolderview?id=1zZVlz4sJKVvsLFmFfDQPUBaPRqh1Tkq7#list"
      style={{display :'none'}}
      >
        Loading...
      </iframe>

  </div>
);

export default DrivePage;
