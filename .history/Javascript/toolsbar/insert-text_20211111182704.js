class DrawingRectangle extends PaintFunction {
  constructor(contextReal) {
    super();
    this.contextReal = contextReal;
    
  }

  onclick = function(e) {
    if (hasInput) return;
    addInput(e.origX, e.origY);
 }



}