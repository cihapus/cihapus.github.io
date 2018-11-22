

function sortFiles(){

console.log("sort files called....");

  var studentfiles = document.getElementById("report-results");
  
  if(studentfiles){
  console.log(studentfiles);
    
    var geteachfile = studentfiles.querySelectorAll("tr");
    
    if(geteachfile.length>0){
    
      console.log("Total number of submissions = "+geteachfile.length);
      
      
      for(let i=0;i<geteachfile.length;i++){
        
        var eachfile = geteachfile[i];
        console.log(eachfile);//each submission
        
        var splitsubmission = eachfile.querySelectorAll("td");
        
        var addressofeach = splitsubmission[0].querySelector("a");
        
        
        var nameofeach = splitsubmission[1].textContent;
        
        var critiquenumber = splitsubmission[0].textContent;
        
        console.log(addressofeach, nameofeach, critiquenumber);
        
        
        
      
      }//i forloop - gets each submission
      
      
    }//if geteachfile
    
    
  }//if studentfiles
  else{
  console.log("failed to find report results");
  }


}//sortfiles

sortFiles();
