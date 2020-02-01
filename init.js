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
 "styles":`border:1px solid #efefef;
color:#fff;
font-size:2rem;
background-color:#555;
position:absolute;
top:15px;
right:30px;
z-index:1000;
padding:4px;
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
  
 
 
 
 /*
 
 PROBABLY NEED TO CHECK FOR MOUSEOVER ON HEADER ELEMENT RATHER THAN DOCUMENT/SUBMITMETA AND THEN MOVE SUBMITMETA RATHER THAN HEADER....
 
 */
 
 
 //disable native drag/drop
 popContainer.ondragstart = function() {
  return false;
};
 
 dragHandle.onmousedown = function(event) { // (1) start the process

  
  
   let shiftX = event.clientX - popContainer.getBoundingClientRect().left;
  let shiftY = event.clientY - popContainer.getBoundingClientRect().top;

  
  // (2) prepare to moving: make absolute and on top by z-index
  //ball.style.position = 'absolute';
  //ball.style.zIndex = 1000;
  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  //document.body.append(ball);
  // ...and put that absolutely positioned ball under the pointer
  
 // var getX = event.pageX;
  //var getY = event.pageY;
  
 //console.log(getX, getY);
  //console.log("offsetcontainerheight "+popContainer.offsetHeight);
  
  moveAt(event.pageX, event.pageY);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    //popContainer.style.left = pageX - popContainer.offsetWidth / 2 + 'px';
    //popContainer.style.top = pageY - popContainer.offsetHeight / 2 + 'px';
   
   
    popContainer.style.left = pageX - shiftX + 'px';
    popContainer.style.top = pageY - shiftY + 'px';
   
   
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (3) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (4) drop the ball, remove unneeded handlers
  popContainer.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    popContainer.onmouseup = null;
  };

};
 
 
 
 
 
 /*
 function drag_start(event) {
  if(!event.target.id || event.target.id !="submitmeta"){
  console.log("wrong id, returning");
   return;
  }
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
