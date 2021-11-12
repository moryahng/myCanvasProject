class InsertText extends PaintFunction {
  constructor(contextReal) {
    super();
    this.contextReal = contextReal;
  }

 onMouseDown(coord, event) {
   this.origX = coord[0];
   this.origY = coord[1];

   $("#textInput").css({
     display: "block",
     position:"absolute",
     font: "12px sans-serif",
    top: event.clientY,
    left: event.clientX,
   });

$("#textInput")

 }



}