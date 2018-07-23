import React from 'react';

export default class FormPage extends React.Component {

  handleAddOption = (e) => {
    e.preventDefault();
    const name1 = e.target.elements.name.value.trim();
    const option = e.target.elements.option.value.trim();
    console.log(option, name1);

    if (sessionStorage.getItem('linkListArr')) {
      var linkListArr = [];
      linkListArr = JSON.parse(sessionStorage.getItem("linkListArr"));
      console.log(linkListArr);
      var object = {};
      object[name1] = option;
      linkListArr.push(object);
      sessionStorage.setItem('linkListArr',JSON.stringify(linkListArr));
    } else {
      var object = {};
      object[name1] = option;
      var linkListArr = [];
      linkListArr[0] = object;
      sessionStorage.setItem('linkListArr',JSON.stringify(linkListArr));
      console.log(JSON.parse(sessionStorage.getItem("linkListArr")));
    }
    this.forceUpdate();
  }

  getFormURL = () => (
    <div className="container">
    <form className = "add-option" onSubmit={this.handleAddOption}>
        <input className="add-option__input" type="text" name="name" placeholder="Name" />
        <input className="add-option__input" type="url" name="option" placeholder="URL" />
        <button className="button">Add Form Link</button>
      </form>
    </div>
  );

  checkLinkList = () => {
    if (sessionStorage.getItem('linkListArr')) {
      var linkListArr = [];
      linkListArr = JSON.parse(sessionStorage.getItem("linkListArr"));
      if (linkListArr.length > 0) {
        return linkListArr;
      }
    }
    return undefined;
  }

  showLinkedList = (linkListArr = []) => {
    return(
      <div>
        {linkListArr.map(p => {
          let arr = Object.entries(p)[0]
          console.log(arr)
          return(
            <button className="big-button" value={arr[1]} onClick={() => {
              let formElement = document.getElementById("frame-form");
              formElement.src = arr[1]
              if (formElement.style.display === "none") {
                formElement.style.display = "block";
              } else {
                formElement.style.display = "none";
              }
            }}>
              {arr[0]}
            </button>
          )
        })}
      </div>
      
    );
  }

  /*<button className="big-button">
        </button>*/

  render() {
    return(
      <div className="container">
        {this.getFormURL()}

        <button 
          className="big-button"
          onClick={() => {
            var linkListArr = JSON.parse(sessionStorage.getItem("linkListArr"));
            console.log(linkListArr);
            console.log(sessionStorage.removeItem('linkListArr'));
            this.forceUpdate()
          }}
        >Remove LinkList</button>

          {this.showLinkedList(this.checkLinkList())}

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
  }
}

/*
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
*/