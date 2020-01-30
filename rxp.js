//loads necessary dependencies

import {init} from './init.js';

//load external scripts in sequence - we're only actually loading two though


//var scripts=["https://unpkg.com/react@16/umd/react.development.js",
//"https://unpkg.com/react-dom@16/umd/react-dom.development.js",
  //  "https://unpkg.com/babel-standalone@6/babel.min.js"];

var scripts=["https://unpkg.com/react@16/umd/react.development.js",
"https://unpkg.com/react-dom@16/umd/react-dom.development.js"];


var head=document.getElementsByTagName("head")[0];


//builds script tags for each script needed

var scriptElements = [];

scripts.forEach(function(src) {
		  var script = document.createElement('script');
		  script.src = src;
		  script.async = false;
		  script.type='text/javascript';
         	
		scriptElements.push(script);
		});

//callback loop to load scripts
scriptElements[0].addEventListener('load', function(){
 
    head.appendChild(scriptElements[1]);
	
    	 scriptElements[1].addEventListener('load', function(){
         
    		// head.appendChild(scriptElements[2]);
		 
          	//	scriptElements[2].addEventListener('load', function(){
              
    			
              
              		init();
          
		//});//element2
     });//element1
});//element0

//fires the script loading loop
head.appendChild(scriptElements[0]);

		
		
		
		
		

/*
    var head=document.getElementsByTagName("head")[0];
    var script=document.createElement('script');
    script.src="https://unpkg.com/react@16/umd/react.development.js";
    script.type='text/javascript';
script.async =false;
script.addEventListener("load", function(){
    console.log("script1 loaded");
    trythis();
});
    head.appendChild(script);

function trythis(){
  console.log("first script loaded");
      var head=document.getElementsByTagName("head")[0];
    var script2=document.createElement('script');
    script2.src="https://unpkg.com/react-dom@16/umd/react-dom.development.js";
    script2.type='text/javascript';
    script2.async =false;
    script2.addEventListener("load", function(){
        console.log("script2 loaded");
    trythistoo();
    });
     head.appendChild(script2);
}

function trythistoo(){
console.log("try this too - react is "+window.React, window.ReactDOM);
    var test = document.createElement('div');
test.id = "testing";
test.innerHTML="<h1>hello world</h1>";
document.body.appendChild(test);
    init();  
}
*/
