//import 'React' from './react.js'
import React as module from "https://unpkg.com/react@16/umd/react.development.js";

console.log("v1");


//import 'ReactDOM' from './react-dom.js'

var test = document.createElement('div');
test.id = "testing";
test.innerHTML = "<h1>Hello world</h1>";

document.body.appendChild(test);
//reactDOM.render(<h2>hello from react</h2>, document.getElementById('testing'));
