class DrawingQuadratic extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.click = 0;
  }

  onMouseDown(coord, event) {
      
      
    

    if (this.click === 0 ) {
        
        
      this.contextDraft.strokeStyle = $("#primary-colour").val();
      this.contextReal.strokeStyle = $("#primary-colour").val();
      this.contextDraft.lineWidth = $("#brushsize").val();
      this.contextReal.lineWidth = $("#brushsize").val();
      this.origX = coord[0];
      this.origY = coord[1];

    } else if (this.click == 1)  {
    
      this.ControlX = coord[0];
      this.ControlY = coord[1];
    }
  }

  onDragging(coord, event) {
    // Manipulating the context draft
   
  if (this.click == 0) {
      this.contextDraft.clearRect(
          0,
          0,
    canvasDraft.width,
    canvasDraft.height
        );
   
        this.contextDraft.beginPath();
        //
        this.contextDraft.moveTo(
          this.origX ,
          this.origY 
        )
        this.contextDraft.lineTo(
          coord[0],
          coord[1]
         );
         this.endX = coord[0];
         this.endY = coord[1];

         this.contextDraft.stroke();
  } else if (this.click == 1) {
      this.contextDraft.clearRect(
          0,
          0,
    canvasDraft.width,
    canvasDraft.height
    );
              
   
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      this.contextDraft.quadraticCurveTo(coord[0], coord[1], this.endX, this.endY);
      this.contextDraft.stroke();
  }
   
  }




  onMouseUp(coord) {
   
    
    if (this.click===0){
        
      
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(
          this.origX ,
          this.origY 
        )
        this.contextDraft.lineTo(
          this.endX,
          this.endY
         );
         this.contextDraft.stroke();
         this.click ++;
        
    } else if (this.click===1) {
     
      this.contextDraft.clearRect(
          0,
          0,
    canvasDraft.width,
    canvasDraft.height
        );
        this.click=0
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX, this.origY);
        this.contextReal.quadraticCurveTo(coord[0], coord[1], this.endX, this.endY);
        this.contextReal.stroke();
        push();

    }
    // Commit that drawing to context real
    // Without this commit, it won't actually draw
    
  }
  onMouseLeave() {}
  onMouseEnter() {}
}