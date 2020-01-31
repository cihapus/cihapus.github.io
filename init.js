//this is called by rxp when react and reactdom have loaded
//need babel.js as well for jsx

import Compressor from './Compressorjs.js';
import { saveAs } from './filesaver.js';
import { Make } from './MakeElement.js';


function init(){

console.log("logging from init");
 
  const e = React.createElement;
 
 
 
 
 
//the actual popup window, with a header element
const PopupElement = {
   "type" : "div",
     "id" : "submitmeta",
 //"class" : "testclass",
 "styles" : `color:black;
background-color: white;
draggable : true;
z-index:999;
position:absolute;
overflow-y:scroll;
border: 4px solid #FFFFFF;
margin: 20px;
//box-shadow: 0px 0px 0px 15px rgba(0, 0, 0, 0.3),0px 20px 15px 0px rgba(0, 0, 0, 0.6);
box-shadow: 0px 0px 0px 10px rgba(0, 0, 0, 0.3),0px 20px 10px 0px rgba(0, 0, 0, 0.6);
resize: both;
top:20px;
left:10px;
padding:20px;
text-align: center; 
min-height:300px;
min-width:300px;
max-height:600px;
height:autp;
width:80%;
margin:30px`,
"content" : `<div id="header" 
style="background-color: #333; 
color : #fff;
width : 80%; 
text-align: center; 
margin: 0 auto; 
max-width:80%;"
>Submit Metadata</div>`,
}
 













const SecondElement = {
   "type" : "div",
     "id" : "testtwo",
 "class" : "testclass",
 "styles" : `color:blue; 
text-align: right; 
margin:30px`,
"content" : `<p>hello world from second element</p>`,
}





 
 var testDiv = Make(PopupElement, null);
 document.body.appendChild(testDiv);//could render this via react instead I guess?
 
 Make(SecondElement, "submitmeta");
 
  
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
 
 
 const domContainer = document.getElementById('submitmeta');
//ReactDOM.render(e(SubmitForm), domContainer);
  
 
 
 
 
 
 function drag_start(event) {
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text/plain",
    (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
} 
function drag_over(event) { 
    event.preventDefault(); 
    return false; 
} 
function drop(event) { 
    var offset = event.dataTransfer.getData("text/plain").split(',');
    var dm = document.getElementById('submitmeta');
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
event.preventDefault();
    return false;
} 

var dm = document.getElementById('submitmeta'); 
dm.addEventListener('dragstart',drag_start,false); 
document.body.addEventListener('dragover',drag_over,false); 
document.body.addEventListener('drop',drop,false);

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
