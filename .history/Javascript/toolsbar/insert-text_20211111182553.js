class DrawingRectangle extends PaintFunction {
  constructor(contextReal) {
    super();
    this.contextReal = contextReal;
    
  }

  canvas.onclick = function(e) {
    if (hasInput) return;
    addInput(e.clientX, e.clientY);
 }



}