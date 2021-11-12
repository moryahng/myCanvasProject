class InsertText extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
     
    }
    onMouseDown(coord, event) {
       
        this.contextReal.font = "12px sans-serif";
        this.contextReal.fillText = $("#primary-colour").val();

        this.origX = coord[0];
        this.origY = coord[1];
      }
}


