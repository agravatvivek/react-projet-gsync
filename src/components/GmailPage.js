import React from 'react';
import Iframe from 'react-iframe'

const GmailPage = () => (
  <div className="container">
    <Iframe url="https://drive.google.com/drive/u/0/folders/0BwE29vQFHQSrbUc5NUxKTmtTYnM"
        width="600px"
        height="600px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        />
  </div>
);

export default GmailPage;
