//this is called by rxp when react and reactdom have loaded
//need babel.js as well for jsx

import Compressor from './Compressorjs.js';
import { saveAs } from './filesaver.js';
import { Make } from './MakeElement.js';
import { DragHandler } from './DragHandler.js';


function init(){
 
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
 e.preventDefault();
console.log("clicked-"+e.target.id);
} 


 var testDiv = Make(PopupElement, null);
 document.body.appendChild(testDiv);//could render this via react instead I guess?
 
 Make(SecondElement, "submitmeta");
 
 /*Make(CloseButton, "header");
 const closeElement = document.getElementById('closebutton');
 if(!closeElement){
 console.warn("missing close button");
 }
 else{
 closeElement.addEventListener('click', handleCloseButton);
 }
  */
 
 
 
 
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
  
 
 
 dragHandle.addEventListener('mousedown', function(e){
  DragHandler(e, dragHandle, popContainer)
 });
 
 
 class CloseBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  
 
  
  render() {
   
   
   /*const closebtnstyle = `
      color: white;
      background-color: #000;
      padding: 10px;
    zIndex: 1000;
    `;
   */
   
   const closeBtnStyle = {
  color: '#eee',
  backgroundColor: '#444',
    margin: '10px',
    zIndex: '1000',
    border: '1px solid #eee',
    fontSize: "1.5rem",
    position: "absolute",
    top: "16px",
    right: "20px",
    padding: "10px",
    lineHeight: "1",
    borderRadius: "4px"
};
   
   
   
   
   
   
   
    if (this.state.clicked) {
     
     console.log("you clicked button");
     // return 'You liked this.';
    }
    
   
    return e(
      'button',
       { 
        style: closeBtnStyle,
        onClick: () => this.setState({ clicked: true }) 
       },
     '${this.props.writethis}'
    );
  }
}
 
 
 
 
 
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
ReactDOM.render(e(CloseBtn, {writethis: "X"}), header);
  
  
  
}//init

export {init};
