/**********************************************
 * The Canvas
 * ==================================
 ***********************************************/

 let canvasReal = document.getElementById("canvas-real");
 let contextReal = canvasReal.getContext("2d");
 let canvasDraft = document.getElementById("canvas-draft");
 let contextDraft = canvasDraft.getContext("2d");
 let currentFunction;
 let dragging = false;
 let step = -1;
 let userhistory = []; 
 let gallery = [];
 console.log(`Gallery Length: ${gallery.length}`);


 function push(){
  step++;
  console.log("Step:" + step)
  console.log(userhistory)      
  if (step < userhistory.length) {
  userhistory.length = step}
  userhistory.push(canvasReal.toDataURL());
  console.log("Pushed - History Length: " + userhistory.length)  
 }



 $(document).ready(function() {
  if (step == -1){
    step++;   
    if (step < userhistory.length - 1) {
        userhistory.length = step + 1
    }
    userhistory.push(canvasReal.toDataURL());
  }
 })

 
 $("#canvas-draft").mousedown(function (e) {
   let mouseX = e.offsetX;
   let mouseY = e.offsetY;
   currentFunction.onMouseDown([mouseX, mouseY], e);
   dragging = true;
 });
 
 $("#canvas-draft").mousemove(function (e) {
   let mouseX = e.offsetX;
   let mouseY = e.offsetY;
   if (dragging) {
     currentFunction.onDragging([mouseX, mouseY], e);
   }
   currentFunction.onMouseMove([mouseX, mouseY], e);
 });
 
 $("#canvas-draft").mouseup(function (e) {
   dragging = false;
   let mouseX = e.offsetX;
   let mouseY = e.offsetY;
   currentFunction.onMouseUp([mouseX, mouseY], e);
 });
 
 $("#canvas-draft").mouseleave(function (e) {
   dragging = false;
   let mouseX = e.offsetX;
   let mouseY = e.offsetY;
   currentFunction.onMouseLeave([mouseX, mouseY], e);
 });
 
 $("#canvas-draft").mouseenter(function (e) {
   let mouseX = e.offsetX;
   let mouseY = e.offsetY;
   currentFunction.onMouseEnter([mouseX, mouseY], e);
 });
 
 /** # Class (all classes will have these methods) #
 /*  ====================== */
 class PaintFunction {
   constructor() {}
   onMouseDown() {
     
   }
   onDragging() {}
   onMouseMove() {}
   onMouseUp() {}
   onMouseLeave() {}
   onMouseEnter() {}
 }
 

