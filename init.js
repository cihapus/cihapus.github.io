//this is called by rxp when react and reactdom have loaded
//need babel.js as well for jsx

import Compressor from './Compressorjs.js';
import { saveAs } from './filesaver.js';


function init(){

console.log("logging from init");
 
  const e = React.createElement;
 
 
 
 
 function createMarkup(data) {
    return `
        <div id=${data.id} class=${data.class} style=${data.styles}>
            ${data.content}
        <div>
    `
}
 
 
const PopupElement = {
     "id" : "testinit",
 "class" : "testclass",
 "styles" : null,
 "content" : "hello world from object?"

}
 
 
 var testDiv = createMarkup(PopupElement);
 
 document.body.appendChild(testDiv);
 
 
 /*
  var test = document.createElement("div");
  test.id="testinit";
  test.innerHTML="<h1>hello world from init</h1>";
  document.body.appendChild(test);
 */
 
 
 
  
// ReactDOM.render("<h2>hello from react</h2>", document.getElementById('testinit'));
  
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
ReactDOM.render(e(SubmitForm), domContainer);
  
 
 
 
 
 
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
