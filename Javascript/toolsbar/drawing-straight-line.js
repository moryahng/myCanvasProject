class DrawingStriaght extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
  
    onMouseDown(coord, event) {
        
      this.contextReal.strokeStyle = "black";
      this.origX = coord[0];
      this.origY = coord[1];
    }
  
    onDragging(coord, event) {
      // Manipulating the context draft
      this.contextDraft.strokeStyle = "black";
      // Allows you to actually draw out your squares
      this.contextDraft.clearRect(
        0,
        0,
  canvasDraft.width,
  canvasDraft.height
      );
      this.contextDraft.beginPath();
      // Pass in the original x and y coordinates, followed by the new coordinates that we get for position x and y
      this.contextDraft.moveTo(
        this.origX ,
        this.origY 
      )
      this.contextDraft.lineTo(
        coord[0],
        coord[1]
       );
       this.contextDraft.stroke();
    }
  
    onMouseMove() {}
  
    // Committing the element to the canvas
    onMouseUp(coord) {
      // Clearing the rectangle first
      
      // Commit that drawing to context real
      // Without this commit, it won't actually draw
      this.contextReal.moveTo(
        this.origX ,
        this.origY 
      )
      this.contextReal.lineTo(
        coord[0],
        coord[1]
       );
       this.contextReal.stroke();
    }
    onMouseLeave() {}
    onMouseEnter() {}
  }