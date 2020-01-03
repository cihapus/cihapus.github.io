function initMeta(){

  console.log("working...");
alert("hello world");
  
  if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
    console.log("file reader support");
} else {
  console.warn('The File APIs are not fully supported in this browser.');
}
  
  
  
  

}

initMeta();
