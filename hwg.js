
import Compressor from 'compressorjs';




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
  
  
  var messagewindowdropzone = document.createElement("DIV");
  messagewindowdropzone.id = "dropzone";
   messagewindowdropzone.innerHTML = "Drop file here";
  messagewindowdropzone.style.margin = "20px";
  messagewindowdropzone.style.padding = "30px";
  messagewindowdropzone.style.border = "2px dashed #bbb";
  messagewindowdropzone.style.textAlign = "center";
  
  
  
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

   messagewindow.appendChild(messagewindowdropzone);  
  messagewindow.appendChild(messagewindowfilereader);  
  
  
  
  
  messagewindow.appendChild(messagewindowoutput);  
  
 messagewindow.appendChild(messagewindowbutton);  
  
 
  var getbody = document.querySelector("body"); 
  document.body.appendChild(messagewindow); 
  
  
  
  
  
  
  
  
  
  //after messagewindow has been built, add handlers
  
  
  //handle direct click
  function handleFileClick(evt){
  
  var files = evt.target.files;
    handleFileSelect(files);
  }
  
  
   function handleFileDrop(evt){
  
 evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files;
    handleFileSelect(files);
  }
  
  
  
  
  
  //filehandler
   //function handleFileSelect(evt) {
      function handleFileSelect(files) {
     
     //console.log("handle file select called");
    //var files = evt.target.files; // FileList object

     
     
    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                  '</li>');
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  }//handleFileSelect
  
  
  

 // document.getElementById('files').addEventListener('change', handleFileSelect, false);
  
   document.getElementById('files').addEventListener('change', handleFileClick, false);
  
  
  
  
  //drop zone handler
  
  function handleDragOver(evt) {
    //console.log("dragover")
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

  
  
  
  // Setup the dnd listeners.
  var dropZone = document.getElementById('dropzone');
  dropZone.addEventListener('dragover', handleDragOver, false);
//  dropZone.addEventListener('drop', handleFileSelect, false);
  
    dropZone.addEventListener('drop', handleFileDrop, false);
  
  
  
  
  
  //close message window handler
  
  var addclosehandler = document.getElementById("closemessagewindow");
  addclosehandler.addEventListener('click', closeWindow);

function closeWindow(){

console.log("close window");
  
  var subwindow = document.getElementById("submitmeta");
   subwindow.parentNode.removeChild(subwindow);
  
  
}//close window



  
  
  
  

}//initMeta

initMeta();
