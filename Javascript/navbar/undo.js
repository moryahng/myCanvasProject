$("#undo-btn").click(function undo() {
    if (step > 0) {
    step--;
    let canvaspic = new Image(); //建立新的 Image
    canvaspic.src = userhistory[step]; //載入剛剛存放的影像
    console.log(`undo step ${step}`)
    canvaspic.onload = function() {
    contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
    contextReal.drawImage(canvaspic, 0, 0) //匯出影像並從座標 x:0 y:0 開始
    }
    }

   
    //最後這邊是讓上一步下一步可以在不能使用時顯示灰色及更改鼠標，可以不加
    if (step < userhistory.length && step > 0) {
    $('.next-step').removeClass('disable-btn');
    }

    })