$("#redo-btn").click(function redo() {
    if (step < userhistory.length - 1) {
    step++;
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
  if (event.ctrlKey && event.key == 'Z') {
    if (step < userhistory.length - 1) {
      step++;
      console.log(`redo step: ${step}`)
      let canvaspic = new Image();
      canvaspic.src = userhistory[step];
      canvaspic.onload = function() {
      contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
      contextReal.drawImage(canvaspic, 0, 0)
      }
      }}
})