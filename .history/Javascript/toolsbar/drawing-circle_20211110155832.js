class DrawingCircle extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
      this.radius = radius;
    }
  
    onMouseDown(coord, event) {
      this.contextReal.fillStyle = $("#primary-colour").val();
      //this.context.lineWidth = $("#brushsize").val();
      this.origX = coord[0];
      this.origY = coord[1];
    }
  
    onDragging(coord, event) {
      // Manipulating the context draft
      this.contextDraft.fillStyle = $("#primary-colour").val();
      // Allows you to actually draw out your squares
      this.contextDraft.clearRect(
        0,
        0,
        canvasDraft.width,
        canvasDraft.height
      );
      // Pass in the original x and y coordinates, followed by the new coordinates that we get for position x and y
      this.contextDraft.arc(
        this.origX,
        this.origY,
        this.radius,
        0,
        2 * Math.PI,
      );
    }
  
    onMouseMove() {}
  
    // Committing the element to the canvas
    onMouseUp(coord) {
      // Clearing the rectangle first
      this.contextDraft.clearRect(
        0,
        0,
        canvasDraft.width,
        canvasDraft.height
      );
      // Commit that drawing to context real
      // Without this commit, it won't actually draw
      this.contextReal.arc(
        this.origX,
        this.origY,
        this.radius,
        0,
        2 * Math.PI
      );
    }
    onMouseLeave() {}
    onMouseEnter() {}
  }