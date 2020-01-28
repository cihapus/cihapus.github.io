function init(){

console.log("logging from init");
  console.log("react here is "+window.React);
  
  const React = window.React;
  const ReactDOM = window.ReactDOM;
  
  console.log(React, ReactDOM);
  
  var test = document.createElement("div");
  test.id="testing";
  test.innerHTML="<h1>hello world</h1>";
  document.body.appendChild(test);
  
 ReactDOM.render("<h2>hello from react</h2>", document.getElementById('testing'));
  

}

export {init};
