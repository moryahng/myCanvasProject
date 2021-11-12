class FillBucket extends PaintFunction {
    // This class extends the PaintFunction class
    // You are only passing one instance here
  
    constructor(contextReal) {
      super();
      this.context = contextReal;
    }
  
    onMouseDown(coord, event) {
        // The coordinate on MouseDown event
    var pixelStack = [coord];
    var canvasWidth = canvasReal.width;
    var canvasHeight = canvasReal.height;
    console.log("canvasWidth: " + canvasWidth + "canvasHeight: "+ canvasHeight);
    var colorLayer = contextReal.getImageData(0, 0, canvasWidth, canvasHeight);


    while(pixelStack.length){
        var newPos = pixelStack.pop();
        var x = newPos[0];
        var y = newPos[1];
        var startRBG = contextReal.getImageData(x , y , 1 , 1);
        //moving the pixelPos up 1 by 1 until different colours or border:
        var pixelPos = (y*canvasWidth + x) * 4;
        while(y-- >= 0 && matchStartColor(pixelPos)){
            pixelPos -= canvasWidth * 4;}
            pixelPos += canvasWidth * 4;
            ++y;
            var reachLeft = false;
            var reachRight = false;
            //going down if in same color or reach the border
            while(y++ < canvasHeight-1 && matchStartColor(pixelPos)){
                colorPixel(pixelPos);
                if(x > 0){
                    if(matchStartColor(pixelPos - 4)){
                        if(!reachLeft){
                            pixelStack.push([x - 1, y]);
                            reachLeft = true;
                            }
                        }else if(reachLeft){
                            reachLeft = false;}
                }
                
                if(x < canvasWidth-1){
                    if(matchStartColor(pixelPos + 4)){
                        if(!reachRight){
                            pixelStack.push([x + 1, y]);
                            reachRight = true;}
                        }else if(reachRight){
                             reachRight = false;}
                }
                pixelPos += canvasWidth * 4;
            }
        }
        context.putImageData(colorLayer, 0, 0);
  
    function matchStartColor(pixelPos){
    var r = colorLayer.data[pixelPos];	
    var g = colorLayer.data[pixelPos+1];	
    var b = colorLayer.data[pixelPos+2];

    return (r == startR && g == startG && b == startB);}

    function colorPixel(pixelPos){
    colorLayer.data[pixelPos] = 0;
    colorLayer.data[pixelPos+1] = 0;
    colorLayer.data[pixelPos+2] = 0;
    colorLayer.data[pixelPos+3] = 255;}
}
    onDragging(coord, event) {}
    onMouseMove() {}
    onMouseUp() {      
      push()
    }
    onMouseLeave() {}
    onMouseEnter() {}
    draw(x, y) {}
  }
  







