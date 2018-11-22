

function sortFiles(){

console.log("sort files called....");

  var studentfiles = document.getElementById("report-results");
  
  if(studentfiles){
  console.log(studentfiles);
    
    var geteachfile = student.querySelectorAll("tr");
    
    if(geteachfile.length>0){
    
      for(let i=0;i<geteachfile.length;i++){
        
        console.log(geteachfile[i]);
      
      }//forloop
      
      
    }//if geteachfile
    
    
  }//if studentfiles
  else{
  console.log("failed to find report results");
  }


}//sortfiles

sortFiles();
