

function sortFiles(){
  
  var allsubmissions =[];
  
  allsubmissions[0]=[];
  allsubmissions[1]=[];
  allsubmissions[2]=[];
  

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
        
        //console.log(addressofeach, nameofeach, critiquenumber);
        
        var thissubmission = {"address": addressofeach, "name": nameofeach};
        
        if(critiquenumber=="Critique 1"){
        allsubmissions[0].push(thissubmission);
        }
          else if(critiquenumber=="Critique 2"){
         allsubmissions[1].push(thissubmission);
        }
          else if(critiquenumber=="Critique 3"){
         allsubmissions[2].push(thissubmission);
        }
        
        //works -- gives number of files and breaks them up into clickable links with student name and critique number
        // if critiquenumber ==="Critique 1" then push to that array, if "Critique 2" push to that array etc
        //that should give three lists of files which can be downloaded to correct folders manually
        
       
        
        
      
      }//i forloop - gets each submission
      
      
    }//if geteachfile
    
    
     console.log(allsubmissions);
    showFiles(allsubmissions);
    
  }//if studentfiles
  else{
  console.log("failed to find report results");
  }


}//sortfiles





function showFiles(allsubmissions) {
  
  console.log("showfiles called...");

 // var myWindow = window.open("", "MsgWindow", "width=200,height=100");
//myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>"); 
  
  var messagewindow = document.createElement("div");
  messagewindow.id = "submissions";
  
  messagewindow.style.zIndex = "9999";
  
   messagewindow.style.minHeight="400px";
  
  messagewindow.style.position = "fixed";
messagewindow.style.top = "80px";
messagewindow.style.left = "0px";
messagewindow.style.margin = '20px';
messagewindow.style.backgroundColor = "white"; 
  messagewindow.style.color="black";
  
  
  var newContent = document.createTextNode("Hi there and greetings!");
  messagewindow.appendChild(newContent);  

  
  
  
  // add the newly created element and its content into the DOM 
  var getbody = document.querySelector("body"); 
  document.body.appendChild(messagewindow); 
  
  
  
  
//newWindow = window.open("", null, "height=400,width=800,status=yes,toolbar=no,menubar=no,location=no");
 
//newWindow.document.write("<p>Submitted critiques:</p>");
 //newWindow.document.write(allsubmissions);
                          

}












sortFiles();
