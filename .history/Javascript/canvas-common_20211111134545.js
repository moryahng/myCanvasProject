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
   onMouseDown() {}
   onDragging() {}
   onMouseMove() {}
   onMouseUp() {}
   onMouseLeave() {}
   onMouseEnter() {}
 }
 

 /* pris added */
/* selection change color */

$(".toolsbar-item img").click(function(){
  $(".tools-bar .toolsbar-item img").removeClass('active');
  $(this).toggleClass('active');
})
