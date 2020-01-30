//this is called by rxp when react and reactdom have loaded
//need babel.js as well for jsx

import {Compressor} from './Compressorjs.js';



function init(){

console.log("logging from init");
  //console.log("react here is "+window.React);
  
  //const React = window.React;
  //const ReactDOM = window.ReactDOM;
  
  //console.log(React, ReactDOM);
  
  var test = document.createElement("div");
  test.id="testinit";
  test.innerHTML="<h1>hello world from init</h1>";
  document.body.appendChild(test);
  
// ReactDOM.render("<h2>hello from react</h2>", document.getElementById('testinit'));
  
  const e = React.createElement;

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

const domContainer = document.getElementById("testinit");
ReactDOM.render(e(LikeButton), domContainer);
  
  
  
  
  

}

export {init};
