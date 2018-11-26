

function sortFiles(){
  
  var allsubmissions =[];
  
  allsubmissions[0]=[];
  allsubmissions[1]=[];
  allsubmissions[2]=[];
   allsubmissions[3]=[];
 allsubmissions[4]=[];
   allsubmissions[5]=[];
  
  
  
  
console.log("sort files called....");

  var studentfiles = document.getElementById("report-results");
   var thisoriginalcourselink = document.getElementById("sample-permalink");
  var studentwork = document.getElementById("acf-critiques");//the work that is to be critiqued
  
  //extract student names from the uploaded files
  
  if(studentwork){
  var getuploads = studentwork.querySelectorAll('option[selected="selected"]');
    
   // console.log("getuploads is --");
   // console.log(getuploads);
    
    var submitterNames = [];
    
    for (var i = 0; i < getuploads.length; i++) {
      var thisnode = getuploads[i];
      submitterNames[i] = thisnode.textContent;
     // var exp2 = thisnode.value;
      //var exp3 = thisnode.innerHTML;
      //console.log(exp1, exp2, exp3);  
}//forloop
  }//ifstudentwork
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
        
        var originaladdressofeach = splitsubmission[0].querySelector("a");
        
        var addressofeach = originaladdressofeach.cloneNode(true);
        
        
        
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
         else if(critiquenumber=="Critique 4"){
         allsubmissions[3].push(thissubmission);
        }
         else if(critiquenumber=="Critique 5"){
         allsubmissions[4].push(thissubmission);
        }
         else if(critiquenumber=="Critique 6"){
         allsubmissions[5].push(thissubmission);
        }
        
        //works -- gives number of files and breaks them up into clickable links with student name and critique number
        // if critiquenumber ==="Critique 1" then push to that array, if "Critique 2" push to that array etc
        //that should give three lists of files which can be downloaded to correct folders manually
        
       
        
        
      
      }//i forloop - gets each submission
      
      
    }//if geteachfile
    
    
     console.log(allsubmissions);
    showFiles(allsubmissions, totalsubmissions, thiscourselink, submitterNames);
    
  }//if studentfiles
  else{
  console.log("failed to find report results");
  }


}//sortfiles





function showFiles(allsubmissions, totalsubmissions, thiscourselink, submitterNames) {
  
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
  
  
  
  var title = document.createElement("H2")                // Create a <h1> element
  var titleContent = document.createTextNode("Critique Submissions for ");
  title.appendChild(titleContent);
  
 // var courselink = document.createElement("P");
  //var courseLinkContent = thiscourse;
  //courselink.appendChild(courseLinkContent);
  
   var numsubmissions = document.createElement("H4");
  var numberOfSubmissionsContent = document.createTextNode("Total submissions received: "+totalsubmissions);
  numsubmissions.appendChild(numberOfSubmissionsContent);
  
 
 
  
  
  messagewindow.appendChild(title);  
  messagewindow.appendChild(thiscourselink);  
 messagewindow.appendChild(numsubmissions);  
  
  
  for (var i=0; i<submitterNames.length;i++){//loops through the three uploaders
    var submitterdiv = document.createElement("DIV");
    submitterdiv.id="critique-"+i;
    
    var submitterp = document.createElement("H3");
    
   var submitters = document.createTextNode(submitterNames[i] + "  (" + allsubmissions[i].length + ")");
    submitterp.appendChild(submitters); 
     submitterdiv.appendChild(submitterp);
    
    
    var thesecritiques = allsubmissions[i];
    
    var duplicates = [];
    
    for(let j=0;j<thesecritiques.length;j++){
      
      duplicates[j]=[];//hold the name of any submitter for this work
    
      
    var thiscritiquer = thesecritiques[j].name;
     var thiscritiquefile = thesecritiques[j].address;
      
      //console.log("thiscritquer and file - "+thiscritiquer, thiscritiquefile);
      
      
      //check critname for duplicates
      
      var markduplicate="";
      for(let dup=0;dup<duplicates.length;dup++){
      if(duplicates[dup]==thiscritiquer){
      var markduplicate = "*--"; 
      }
      }
      
      duplicates[j] = thiscritiquer;
      
      var critiquerp = document.createElement("P");
      var critname = document.createTextNode(markduplicate+thiscritiquer+"  :   ");
      
      
      
      
      
    critiquerp.appendChild(critname);
      critiquerp.appendChild(thiscritiquefile);
      
        submitterdiv.appendChild(critiquerp);
      
    }
    
    /*
    var critiquerp = document.createElement("P");
    var critiquefrom = allsubmissions[i].name;
    critiquerp.appendChild(critiquefrom);
    
    var critiqueaddress = allsubmissions[i].address;
     submitterdiv.appendChild(critiquerp);
    submitterdiv.appendChild(critiqueaddress);
    */
    
    
    
    
    
    messagewindow.appendChild(submitterdiv);
    
  }
 
  
  
  
  
  
  
  
  
  
  
  
  
  
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
