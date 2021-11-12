class DrawingStriaght extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
  
    onMouseDown(coord, event) {
        
      this.contextDraft.strokeStyle = $("#primary-colour").val();
      this.contextReal.strokeStyle = $("#primary-colour").val();
      this.contextDraft.lineWidth = $("#brushsize").val();
      this.contextReal.lineWidth = $("#brushsize").val();
      this.origX = coord[0];
      this.origY = coord[1];
      
    }
  
    onDragging(coord, event) {
      
      
      this.contextDraft.clearRect(
        0,
        0,
  canvasDraft.width,
  canvasDraft.height
      );
      this.contextDraft.beginPath();
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
  
    onMouseUp(coord) {
      this.contextDraft.clearRect(0,0, canvasReal.width, canvasDraft.width);
      this.contextReal.beginPath();
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