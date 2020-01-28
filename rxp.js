import {React} from './react.js'
//import * as React from "https://unpkg.com/react@16/umd/react.development.js";
//import * as React from "https://unpkg.com/react@16.12.0/umd/react.production.min.js";

console.log("v1");


//import 'ReactDOM' from './react-dom.js'

var test = document.createElement('div');
test.id = "testing";
test.innerHTML = "<h1>Hello world</h1>";

document.body.appendChild(test);
//reactDOM.render(<h2>hello from react</h2>, document.getElementById('testing'));
