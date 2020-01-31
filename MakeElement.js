


 function Make(data, target) {
  
  try{
  var divelement = document.createElement(data.type);
  divelement.id = data.id ? data.id : null;
  divelement.class = data.class ? data.class : null;
  divelement.style = data.styles ? data.styles : null;
  divelement.innerHTML = data.content ? data.content : null;
  }
  catch(err){
  console.warn("couldn't create element: ",err);
  }
  
  
  
  if(!target){
  return divelement
  }
  else{
  var container = document.getElementById(target);
  }
  
  if(!container){
  console.warn("target container element not found in document");
  return;
  }
  else{
  container.appendChild(divelement);
  }
  
  
  //return divelement;
}

export {Make};
