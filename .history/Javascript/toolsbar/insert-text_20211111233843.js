class InsertText extends PaintFunction {
  constructor(contextReal) {
    super();
    this.contextReal = contextReal;
  }

 onMouseDown(coord, event) {
   this.origX = coord[0];
   this.origY = coord[1];
   this.font= $("#font-select").val();

   $("#textInput").css({
     display: "block",
     position:"absolute",
     width: "400px",
     font: "30px Arial",
      top: event.clientY,
      left: event.clientX,
   });

$("#textInput").keydown((event)=> {
  if (event.key == "Enter"){
    let text = $("#textInput").val();
    this.contextReal.font=`${fontSize}px ${this.font}`;
    this.contextReal.fillText(text, this.origX, this.origY);
    $("#textInput").css({display: "none"});
    $("#textInput").val("");
  }
})
 }

 onDragging() {}
 onMouseMove() {}
 onMouseUp() {}
 onMouseLeave() {}
 onMouseEnter() {}
}