$(()=>{
    currentFunction =  new DrawingLine(contextReal)

    $("#drawing-line").click(() => {
        currentFunction = new DrawingLine(contextReal);});  

    $("#drawing-straight-line").click(() => {
        currentFunction = new DrawingStriaght(contextReal, contextDraft);});  
    
    $("#drawing-quadratic-curve").click(() => {
        currentFunction = new DrawingQuadratic(contextReal, contextDraft);});  
    
    $("#drawing-bezier-curve").click(() => {
        currentFunction = new DrawingBezier(contextReal);});  

    $("#drawing-rectangle").click(() => {
        currentFunction = new DrawingRectangle(contextReal, contextDraft);});

    $("#drawing-circle").click(() => {
        currentFunction = new DrawingCircle(contextReal, contextDraft);});

    $("#insert-text").click(() => {
        currentFunction = new InsertText(contextReal, contextDraft);});
    
    $("#filter").click(() => {
        currentFunction = new Filter(contextReal, contextDraft);});

    $("#fill-bucket").click(() => {
        currentFunction = new FillBucket(contextReal, contextDraft);});

    $("#eraser").click(() => {
      currentFunction = new Eraser(contextReal);});  

  })