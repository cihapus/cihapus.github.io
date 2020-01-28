function init(){

console.log("logging from init");
  
  var test = document.createElement("div");
  test.id="testing";
  test.innerHTML="<h1>hello world</h1>";
  
  ReactDOM.render(<h2>hello from react</h2>, document.getElementById('testing'));
  

}

export {init};
