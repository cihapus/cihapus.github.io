//import * as React from './react.js'
//import * as React from "https://unpkg.com/react@16/umd/react.development.js";
//import * as React from "https://unpkg.com/react@16.12.0/umd/react.production.min.js";

import {init} from './init.js';


    var head=document.getElementsByTagName("head")[0];
    var script=document.createElement('script');
    script.src="https://unpkg.com/react@16/umd/react.development.js";
    script.type='text/javascript';
    //real browsers
    script.onload=trythis();
    //Internet explorer
    script.onreadystatechange = function() {
        if (this.readyState == 'complete') {
            trythis();
        }
    }
    head.appendChild(script);



function trythis(){

  console.log("scripts loaded");
    init();

}

//console.log("v1");


//import 'ReactDOM' from './react-dom.js'

//var test = document.createElement('div');
//test.id = "testing";
//test.innerHTML="<h1>hello world</h1>";
//document.body.appendChild(test);



//test.innerHTML = `<script src='https://unpkg.com/react@16/umd/react.development.js'></script>
//<script src='https://unpkg.com/react@16.12.0/umd/react.production.min.js'></script>`;

//document.body.appendChild(test);
//reactDOM.render(<h2>hello from react</h2>, document.getElementById('testing'));
