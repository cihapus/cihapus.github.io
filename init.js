//this is called by rxp when react and reactdom have loaded
//need babel.js as well for jsx

import Compressor from './Compressorjs.js';
import { saveAs } from './filesaver.js';


function init(){

console.log("logging from init");
 
  const e = React.createElement;
 
 
 
 
 function createMarkup(data) {
  var divelement = document.createElement(data.type);
  divelement.id = data.id ? data.id : null;
  divelement.class = data.class ? data.class : null;
  divelement.style = data.styles ? data.styles : null;
  divelement.innerHTML = data.content ? data.content : null;
  return divelement;
}
 
 
const PopupElement = {
   "type" : "div",
     "id" : "testinit",
 "class" : "testclass",
 "styles" : `color:red; 
text-align: center; 
margin:30px`,
"content" : `<p>hello world from object?</p>`

}
 
 
 var testDiv = createMarkup(PopupElement);
 console.log("testdiv is: "+testDiv);

 document.body.appendChild(testDiv);//could render this via react instead I guess?
 
  
class SubmitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  
  render() {
  
  return e(
      'div',
      null,
      'Hello world from react'
    );
  }//render
 }//submitformclass
 
 
 const domContainer = document.getElementById('testinit');
//ReactDOM.render(e(SubmitForm), domContainer);
  
 
 
 
 
 
/*
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }
    
    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
*/
 
 
//const domContainer = document.getElementById("testinit");
//ReactDOM.render(e(LikeButton), domContainer);
  
  
  
}//init

export {init};
