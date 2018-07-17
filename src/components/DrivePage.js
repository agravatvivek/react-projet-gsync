import React from 'react';

const DrivePage = () => (

  <div className="container">
  
    <iframe  
      id="frame-drive"
      display = "none"
      height="520"  
      width="600" 
      src="https://drive.google.com/embeddedfolderview?id=1zZVlz4sJKVvsLFmFfDQPUBaPRqh1Tkq7#list"
      style={{display :'block'}}
      >
        Loading...
      </iframe>

  </div>
);

export default DrivePage;
