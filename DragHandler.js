

function DragHandler (dragHandle, elem){

//disable default drag to prevent conflicts
 elem.ondragstart = function() {
  return false;
};



 dragHandle.onmousedown = function(event) { // (1) start the process

  
  
   let shiftX = event.clientX - elem.getBoundingClientRect().left;
  let shiftY = event.clientY - elem.getBoundingClientRect().top;

  
  
  moveAt(event.pageX, event.pageY);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    //popContainer.style.left = pageX - popContainer.offsetWidth / 2 + 'px';
    //popContainer.style.top = pageY - popContainer.offsetHeight / 2 + 'px';
   
   
    elem.style.left = pageX - shiftX + 'px';
    elem.style.top = pageY - shiftY + 'px';
   
   
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (3) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (4) drop the ball, remove unneeded handlers
  elem.onmouseup = function() {
    elem.removeEventListener('mousemove', onMouseMove);
    elem.onmouseup = null;
  };

};
 
 }//DragHandler
 
 export {DragHandler};
