class InsertText extends PaintFunction {
  constructor(contextReal) {
    super();
    this.contextReal = contextReal;
  }

 onMouseDown(coord, event) {
   this.origX = coord[0];
   this.origY = coord[1];
   this.font= $("font-select").val();

   $("#textInput").css({
     display: "block",
     position:"absolute",
     font: `${}`
    top: event.clientY,
    left: event.clientX,
   });

$("#textInput").keydown((event)=>{
  if (event.key == "Enter"){
    let text = $("#textInput").val();
    this.contextReal.font=
  }
})

 }



}