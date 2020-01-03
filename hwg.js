function initMeta(){

  console.log("working...");
//alert("hello world");
  
  if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
    console.log("file reader support");
} else {
  console.warn('The File APIs are not fully supported in this browser.');
}
  
  
  
  
  
  
  
  
  
  var messagewindow = document.createElement("DIV");
  messagewindow.id = "submitmeta";
  
  
  //
  
  var messagewindowfilereader = document.createElement("INPUT");
  messagewindowfilereader.id="files";
  messagewindowfilereader.name="files[]";
   messagewindowfilereader.type="file";
  
    var messagewindowoutput = document.createElement("DIV");
  messagewindowoutput.id = "list";
  
  
  
  
  
  
  
  //
  
   var messagewindowbutton = document.createElement("BUTTON");
  messagewindowbutton.id = "closemessagewindow";
  messagewindowbutton.innerHTML = "close popup";
  
  messagewindow.style.zIndex = "9999";
  
   messagewindow.style.minHeight="400px";
  messagewindow.style.minWidth="1000px";
  messagewindow.style.maxHeight="600px";
  
  
  messagewindow.style.position = "fixed";
messagewindow.style.top = "20px";
messagewindow.style.left = "0px";
messagewindow.style.margin = "20px";
  messagewindow.style.padding = "20px";
  
messagewindow.style.backgroundColor = "white"; 
  messagewindow.style.color="black";
  messagewindow.style.overflowY = "scroll";
  
  
  
  var title = document.createElement("H2")               
  var titleContent = document.createTextNode("Submit metadata for ");
  title.appendChild(titleContent);
  
  messagewindow.appendChild(title);  

  
  messagewindow.appendChild(messagewindowfilereader);  
  messagewindow.appendChild(messagewindowoutput);  
  
 messagewindow.appendChild(messagewindowbutton);  
  
 
  var getbody = document.querySelector("body"); 
  document.body.appendChild(messagewindow); 
  
  
  var addclosehandler = document.getElementById("closemessagewindow");
  addclosehandler.addEventListener('click', closeWindow);

function closeWindow(){

console.log("close window");
  
  var subwindow = document.getElementById("submitmeta");
   subwindow.parentNode.removeChild(subwindow);
  
  
}



  
  
  
  

}//initMeta

initMeta();
