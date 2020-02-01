//this is called by rxp when react and reactdom have loaded
//need babel.js as well for jsx

import Compressor from './Compressorjs.js';
import { saveAs } from './filesaver.js';
import { Make } from './MakeElement.js';
import { DragHandler } from './DragHandler.js';


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
z-index:999;
position:absolute;
overflow-y:scroll;
border: 4px solid rgba(0,0,0,0.3);
resize: both;
top:10px;
left:10px;
padding:20px;
text-align: center; 
min-height:300px;
min-width:300px;
max-height:600px;
height:auto;
width:80%;
margin:10px`,
"content" : `<div id="main" style="width:100%; height:auto; border 1px solid red;">
<div id="header" 
style="background-color: #333; 
cursor:move;
padding:10px;
color : #fff;
width : 100%; 
text-align: center; 
margin: 0 auto; 
max-width:100%;"
><p>Submit Metadata</p><p style="position:absolute; top:10px;left:30px;color:#555;font-size:3rem;">&#10070</p></div>
</div>`,
}
 
/*
margin: 20px;
box-shadow: 0px 0px 0px 10px rgba(0, 0, 0, 0.3),0px 20px 10px 0px rgba(0, 0, 0, 0.6);
*/



const CloseButton = {
"type":"button",
 "id":"closebutton",
 "styles":`border:1px solid #eee;
color:#fff;
font-size:1.5rem;
background-color:#444;
position:absolute;
margin:10px;
top:16px;
right:20px;
z-index:1000;
padding:10px;
line-height:1;
border-radius:4px`,
 "content":"&#10006"
}






const SecondElement = {
   "type" : "div",
     "id" : "testtwo",
 "class" : "testclass",
 "styles" : `color:blue; 
text-align: right; 
margin:30px`,
"content" : `<p>hello world from second element</p>`
}





function handleCloseButton(e){
console.log("clicked-"+e.target.id);
} 


 var testDiv = Make(PopupElement, null);
 document.body.appendChild(testDiv);//could render this via react instead I guess?
 
 Make(SecondElement, "submitmeta");
 
 Make(CloseButton, "header");
 const closeElement = document.getElementById('closebutton');
 if(!closeElement){
 console.warn("missing close button");
 }
 else{
 closeElement.addEventListener('click', handleCloseButton);
 }
  
 
 
 
 
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
 
 
 const popContainer = document.getElementById('submitmeta');
 
 const dragHandle = document.getElementById('header');
 
//ReactDOM.render(e(SubmitForm), popContainer);
  
 DragHandler("header", "submitmeta");
 
 
 /*
 
 PROBABLY NEED TO CHECK FOR MOUSEOVER ON HEADER ELEMENT RATHER THAN DOCUMENT/SUBMITMETA AND THEN MOVE SUBMITMETA RATHER THAN HEADER....
 
 */
 
 

 /*
 popContainer.ondragstart = function() {
  return false;
};
 
 dragHandle.onmousedown = function(event) { 

   let shiftX = event.clientX - popContainer.getBoundingClientRect().left;
  let shiftY = event.clientY - popContainer.getBoundingClientRect().top;

  
  
  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    popContainer.style.left = pageX - shiftX + 'px';
    popContainer.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  popContainer.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    popContainer.onmouseup = null;
  };

};
 
 */
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
