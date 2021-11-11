class InsertText extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
    onMouseDown(coord, event) {
        this.contextReal.fillStyle = $("#primary-colour").val();
        this.contextReal.fillText = $("#primary-colour").val();
        this.origX = coord[0];
        this.origY = coord[1];
      }

     

}