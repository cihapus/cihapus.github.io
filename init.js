//this is called by rxp when react and reactdom have loaded
//need babel.js as well for jsx

import Compressor from './Compressorjs.js';
import { saveAs } from './filesaver.js';


function init(){

console.log("logging from init");
 
  const e = React.createElement;
 
 
  var test = document.createElement("div");
  test.id="testinit";
  test.innerHTML="<h1>hello world from init</h1>";
  document.body.appendChild(test);
  
// ReactDOM.render("<h2>hello from react</h2>", document.getElementById('testinit'));
  
 class SubmitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  
  render() {}
  
  return e(
      'div',
      { id: "testreact" },
      [e('h1',null,'Hello world from react')]
    );
  }
  
  
  
  
 }//submitformclass
 
 
 const domContainer = document.body;
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
  
  
  
  
  

}

export {init};
