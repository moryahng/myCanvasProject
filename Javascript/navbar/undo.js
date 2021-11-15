$("#undo-btn").click(function undo() {
    if (step > 0) {

    step--;
    console.log(step);
    let canvaspic = new Image();
    canvaspic.src = userhistory[step];
    canvaspic.onload = function() {
    contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
    contextReal.drawImage(canvaspic, 0, 0)
    }
    }

    })
   
document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.key == 'z') {
    if (step > 0) {

      step--;
      let canvaspic = new Image();
      canvaspic.src = userhistory[step];
      canvaspic.onload = function() {
      contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
      contextReal.drawImage(canvaspic, 0, 0)
      }
      }}
})