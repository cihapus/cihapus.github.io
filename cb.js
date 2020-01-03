

function sortFiles(){
  
  
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = "#submissions a { color: blue } #submissions a:active{color:red}  #submissions a:visited{color: #ddd} #submissions a:focus { color: #ddd }";
  document.head.appendChild(css);
  
  
  
  
  
  var allsubmissions =[];
  
  allsubmissions[0]=[];
  allsubmissions[1]=[];
  allsubmissions[2]=[];
   allsubmissions[3]=[];
 allsubmissions[4]=[];
   allsubmissions[5]=[];
  
  
  
  
console.log("sort files called");

  var studentfiles = document.getElementById("report-results");
   var thisoriginalcourselink = document.getElementById("sample-permalink");
  var studentwork = document.getElementById("acf-critiques");//the work that is to be critiqued
  
  
  
  if(studentwork){
  var getuploads = studentwork.querySelectorAll('option[selected="selected"]');
    
   
    
    var submitterNames = [];
    
    for (var i = 0; i < getuploads.length; i++) {
      var thisnode = getuploads[i];
      submitterNames[i] = thisnode.textContent;
    
}
  }
  else{
  console.log("no studentwork found");
  }

  
  
  
 
var thiscourselink = thisoriginalcourselink.cloneNode(true);
  
  
 
  
  if(studentfiles){
  console.log(studentfiles);
    
    var geteachfile = studentfiles.querySelectorAll("tr");
    
    if(geteachfile.length>0){
    
      var totalsubmissions = geteachfile.length;
      console.log("Total number of submissions = "+totalsubmissions);
      
      
      for(let i=0;i<geteachfile.length;i++){
        
        var eachfile = geteachfile[i];
        console.log(eachfile);
        
        var splitsubmission = eachfile.querySelectorAll("td");
        
        var originaladdressofeach = splitsubmission[0].querySelector("a");
        
        var addressofeach = originaladdressofeach.cloneNode(true);
        
        
        
        var nameofeach = splitsubmission[1].textContent;
        
        var critiquenumber = splitsubmission[0].textContent;
        
        
        
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
         else if(critiquenumber=="Critique 4"){
         allsubmissions[3].push(thissubmission);
        }
         else if(critiquenumber=="Critique 5"){
         allsubmissions[4].push(thissubmission);
        }
         else if(critiquenumber=="Critique 6"){
         allsubmissions[5].push(thissubmission);
        }
        
        
        
      
      }
      
      
    }
    
    
     console.log(allsubmissions);
    showFiles(allsubmissions, totalsubmissions, thiscourselink, submitterNames);
    
  }
  else{
  console.log("failed to find report results");
  }


}





function showFiles(allsubmissions, totalsubmissions, thiscourselink, submitterNames) {
  
  console.log("showfiles called....");

 
  
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
  
  
  
  var title = document.createElement("H2")               
  var titleContent = document.createTextNode("Critique Submissions for ");
  title.appendChild(titleContent);
  
 
   var numsubmissions = document.createElement("H4");
  var numberOfSubmissionsContent = document.createTextNode("Total submissions received: "+totalsubmissions);
  numsubmissions.appendChild(numberOfSubmissionsContent);
  
 
 
  
  
  messagewindow.appendChild(title);  
  messagewindow.appendChild(thiscourselink);  
 messagewindow.appendChild(numsubmissions);  
  
  
  for (var i=0; i<submitterNames.length;i++){
    var submitterdiv = document.createElement("DIV");
    submitterdiv.id="critique-"+i;
    
    var submitterp = document.createElement("H3");
    
   var submitters = document.createTextNode(submitterNames[i] + "  (" + allsubmissions[i].length + ")");
    submitterp.appendChild(submitters); 
     submitterdiv.appendChild(submitterp);
    
    
    var thesecritiques = allsubmissions[i];
    
    var duplicates = [];
    
    for(let j=0;j<thesecritiques.length;j++){
      
      duplicates[j]=[];
    
      
    var thiscritiquer = thesecritiques[j].name;
     var thiscritiquefile = thesecritiques[j].address;
        
      
      var markduplicate="";
      for(let dup=0;dup<duplicates.length;dup++){
      if(duplicates[dup]==thiscritiquer){
      var markduplicate = "* "; 
      }
      }
      
      duplicates[j] = thiscritiquer;
      
      var critiquerp = document.createElement("P");
      var critname = document.createTextNode(markduplicate+thiscritiquer+"  :   ");
      
      if(markduplicate !=""){
     
        critiquerp.style.color="blue";
        
      }
      
      
      
    critiquerp.appendChild(critname);
      critiquerp.appendChild(thiscritiquefile);
      
        submitterdiv.appendChild(critiquerp);
      
    }
    
    
    
    
    
    
    messagewindow.appendChild(submitterdiv);
    
  }
 
  
  
  
  
  
  
  
  
  
  
  
  
  
    messagewindow.appendChild(messagewindowbutton);  
  
 
  var getbody = document.querySelector("body"); 
  document.body.appendChild(messagewindow); 
  
  
  var addclosehandler = document.getElementById("closemessagewindow");
  addclosehandler.addEventListener('click', closeWindow);
  


}


function closeWindow(){

console.log("close window");
  
  var subwindow = document.getElementById("submissions");
   subwindow.parentNode.removeChild(subwindow);
  
  
}









sortFiles();
