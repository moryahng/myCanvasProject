$('#insert-text').click(function(){
  $('.font-setting').toggle();
  });

class InsertText extends PaintFunction {
  constructor(contextReal) {
    super();
    this.contextReal = contextReal;
    this.textBox = false;
  }

 onMouseDown(coord, event) {

  if (this.textBox === false) {
  $("#canvas-container").after(`<input id="textInput" placeholder="type here and press enter" name="inputField"></input>`)

   this.font= $("#font-select").val();
   this.contextReal.fillStyle = $("#primary-colour").val();

   $("#textInput").css({
    //  display: "block",
     position:"absolute",
     width: "300px",
     font: "20px Dongle",
      top: event.clientY,
      left: event.clientX,
   });

   this.textBox = true;


$("#textInput").keydown((event)=> {
  console.log("COORD", coord)
  if (event.key == "Enter"){
    let text = $("#textInput").val();
    this.contextReal.font= `${fontSize}px ${this.font}`;
    this.contextReal.fillText(text, coord[0], coord[1]);
    this.contextReal.fillStyle = $("#primary-colour").val();
    // $("#textInput").css({display: "none"});
    $("#textInput").remove();
    // $("#textInput").val("");
  //   this.origX = coord[0];
  //  this.origY = coord[1];
  this.textBox = false;
    push()
  }
})
  }
 }

 onDragging() {}
 onMouseMove() {}
 onMouseUp() {}

 onMouseLeave() {}
 onMouseEnter() {}
}