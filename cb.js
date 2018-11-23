

function sortFiles(){
  
  var allsubmissions =[];
  
  allsubmissions[0]=[];
  allsubmissions[1]=[];
  allsubmissions[2]=[];
  

console.log("sort files called....");

  var studentfiles = document.getElementById("report-results");
   var thisoriginalcourselink = document.getElementById("sample-permalink");
  var studentwork = document.getElementById("acf-critiques");//the work that is to be critiqued
  
  //extract student names from the uploaded files
  
  if(studentwork){
  var getuploads = studentwork.querySelectorAll('option[selected="selected"]');
    
   // console.log("getuploads is --");
   // console.log(getuploads);
    
    for (var i = 0; i < getuploads.length; i++) {
      var thisnode = getuploads[i];
      var exp1 = thisnode.textContent;
      var exp2 = thisnode.value;
      var exp3 = thisnode.innerHTML;
      
      console.log(exp1, exp2, exp3);
      
}
    
    
    
  }
  else{
  console.log("no studentwork found");
  }
  //ifstudentwork
  
  
  
 
var thiscourselink = thisoriginalcourselink.cloneNode(true);
  
  
  //var thiscourse = thiscourselink.innerHTML;
  
  if(studentfiles){
  console.log(studentfiles);
    
    var geteachfile = studentfiles.querySelectorAll("tr");
    
    if(geteachfile.length>0){
    
      var totalsubmissions = geteachfile.length;
      console.log("Total number of submissions = "+totalsubmissions);
      
      
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
    showFiles(allsubmissions, totalsubmissions, thiscourselink);
    
  }//if studentfiles
  else{
  console.log("failed to find report results");
  }


}//sortfiles





function showFiles(allsubmissions, totalsubmissions, thiscourselink) {
  
  console.log("showfiles called....");

 // var myWindow = window.open("", "MsgWindow", "width=200,height=100");
//myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>"); 
  
  var messagewindow = document.createElement("DIV");
  messagewindow.id = "submissions";
  
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
  
  
  
  var title = document.createElement("H1")                // Create a <h1> element
  var titleContent = document.createTextNode("Critique Submissions for ");
  title.appendChild(titleContent);
  
 // var courselink = document.createElement("P");
  //var courseLinkContent = thiscourse;
  //courselink.appendChild(courseLinkContent);
  
   var numsubmissions = document.createElement("P");
  var numberOfSubmissionsContent = document.createTextNode("Total submissions received: "+totalsubmissions);
  numsubmissions.appendChild(numberOfSubmissionsContent);
  
  
 
  
  
  messagewindow.appendChild(title);  
  messagewindow.appendChild(thiscourselink);  
 messagewindow.appendChild(numsubmissions);  
  
    messagewindow.appendChild(messagewindowbutton);  
  
  // add the newly created element and its content into the DOM 
  var getbody = document.querySelector("body"); 
  document.body.appendChild(messagewindow); 
  
  
  var addclosehandler = document.getElementById("closemessagewindow");
  addclosehandler.addEventListener('click', closeWindow);
  
//newWindow = window.open("", null, "height=400,width=800,status=yes,toolbar=no,menubar=no,location=no");
 
//newWindow.document.write("<p>Submitted critiques:</p>");
 //newWindow.document.write(allsubmissions);
                          

}//showfiles


function closeWindow(){

console.log("close window");
  
  var subwindow = document.getElementById("submissions");
   subwindow.parentNode.removeChild(subwindow);
  
  
}









sortFiles();
