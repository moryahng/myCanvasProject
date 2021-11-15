
// gallery button
$("#gallery-btn").click(function() {
    $(".modal").css("display","block");
    $(".modal")
  })
  
//close button
  $(".close").click(function() {
    $(".modal").css("display","none");
  })

//add button
$("#add-btn").click(function addGallery(event) {
let gallerypic = new Image();
gallerypic.src = userhistory[step];
gallery.push(gallerypic);
    if(gallery.length > 12){
        gallery.shift()}
    for (i = 0; i < gallery.length; i++){
        $(`#gallery-img-${i+1}`).html(gallery[i]);
    }
})

//view button
$("#view-img-1").click(function() {
    push();
    let gallerypic = gallery[0];
        contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
        contextReal.drawImage(gallerypic, 0, 0);
});
$("#view-img-2").click(function() {
    push();
    let gallerypic = gallery[1];
        contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
        contextReal.drawImage(gallerypic, 0, 0)
        
});
$("#view-img-3").click(function() {
    push();
    let gallerypic = gallery[2];
        contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
        contextReal.drawImage(gallerypic, 0, 0)
});
$("#view-img-4").click(function() {
    push();
    let gallerypic = gallery[3];
        contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
        contextReal.drawImage(gallerypic, 0, 0)
});
$("#view-img-5").click(function() {
    push();
    let gallerypic = gallery[4];
        contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
        contextReal.drawImage(gallerypic, 0, 0)
});
$("#view-img-6").click(function() {
    push();
    let gallerypic = gallery[5];
        contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
        contextReal.drawImage(gallerypic, 0, 0)
});
$("#view-img-7").click(function() {
    push();
    let gallerypic = gallery[6];
        contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
        contextReal.drawImage(gallerypic, 0, 0)
});
$("#view-img-8").click(function() {
    push();
    let gallerypic = gallery[7];
        contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
        contextReal.drawImage(gallerypic, 0, 0)
});
$("#view-img-9").click(function() {
    push();
    let gallerypic = gallery[8];
        contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
        contextReal.drawImage(gallerypic, 0, 0)
});
$("#view-img-10").click(function() {
    push();
    let gallerypic = gallery[9];
        contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
        contextReal.drawImage(gallerypic, 0, 0)
});
$("#view-img-11").click(function() {
    push();
    let gallerypic = gallery[10];
        contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
        contextReal.drawImage(gallerypic, 0, 0)
});
$("#view-img-12").click(function() {
    push();
    let gallerypic = gallery[11];
        contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
        contextReal.drawImage(gallerypic, 0, 0)
});

//delete button

$("#delete-img-1").click(function() {
    gallery.splice(0 , 1);

    if (gallery.length == 0){
        $(`#gallery-img-1`).html(`<img src="./Images/empty-img.jpeg">`);
    }else{
    for (i = 0; i < gallery.length; i++){
        console.log(gallery[i]);
        $(`#gallery-img-${i+1}`).html(gallery[i]);
        $(`#gallery-img-${i+2}`).html(`<img src="./Images/empty-img.jpeg">`);
    }}
});

$("#delete-img-2").click(function() {
    gallery.splice(1 , 1);

    for (i = 0; i < gallery.length; i++){
        console.log(gallery[i]);
        $(`#gallery-img-${i+1}`).html(gallery[i]);
        $(`#gallery-img-${i+2}`).html(`<img src="./Images/empty-img.jpeg">`);
    }
});

$("#delete-img-3").click(function() {
    gallery.splice(2 , 1);

    for (i = 0; i < gallery.length; i++){
        console.log(gallery[i]);
        $(`#gallery-img-${i+1}`).html(gallery[i]);
        $(`#gallery-img-${i+2}`).html(`<img src="./Images/empty-img.jpeg">`);
    }
});

$("#delete-img-4").click(function() {
    gallery.splice(3 , 1);

    for (i = 0; i < gallery.length; i++){
        console.log(gallery[i]);
        $(`#gallery-img-${i+1}`).html(gallery[i]);
        $(`#gallery-img-${i+2}`).html(`<img src="./Images/empty-img.jpeg">`);
    }
});

$("#delete-img-5").click(function() {
    gallery.splice(4 , 1);

    for (i = 0; i < gallery.length; i++){
        console.log(gallery[i]);
        $(`#gallery-img-${i+1}`).html(gallery[i]);
        $(`#gallery-img-${i+2}`).html(`<img src="./Images/empty-img.jpeg">`);
    }
});


$("#delete-img-6").click(function() {
    gallery.splice(5 , 1);

    for (i = 0; i < gallery.length; i++){
        console.log(gallery[i]);
        $(`#gallery-img-${i+1}`).html(gallery[i]);
        $(`#gallery-img-${i+2}`).html(`<img src="./Images/empty-img.jpeg">`);
    }
});

$("#delete-img-7").click(function() {
    gallery.splice(6 , 1);

    for (i = 0; i < gallery.length; i++){
        console.log(gallery[i]);
        $(`#gallery-img-${i+1}`).html(gallery[i]);
        $(`#gallery-img-${i+2}`).html(`<img src="./Images/empty-img.jpeg">`);
    }
});

$("#delete-img-8").click(function() {
    gallery.splice(7 , 1);

    for (i = 0; i < gallery.length; i++){
        console.log(gallery[i]);
        $(`#gallery-img-${i+1}`).html(gallery[i]);
        $(`#gallery-img-${i+2}`).html(`<img src="./Images/empty-img.jpeg">`);
    }
});

$("#delete-img-9").click(function() {
    gallery.splice(8 , 1);

    for (i = 0; i < gallery.length; i++){
        console.log(gallery[i]);
        $(`#gallery-img-${i+1}`).html(gallery[i]);
        $(`#gallery-img-${i+2}`).html(`<img src="./Images/empty-img.jpeg">`);
    }
});

$("#delete-img-10").click(function() {
    gallery.splice(9 , 1);

    for (i = 0; i < gallery.length; i++){
        console.log(gallery[i]);
        $(`#gallery-img-${i+1}`).html(gallery[i]);
        $(`#gallery-img-${i+2}`).html(`<img src="./Images/empty-img.jpeg">`);
    }
});

$("#delete-img-11").click(function() {
    gallery.splice(10 , 1);

    for (i = 0; i < gallery.length; i++){
        console.log(gallery[i]);
        $(`#gallery-img-${i+1}`).html(gallery[i]);
        $(`#gallery-img-${i+2}`).html(`<img src="./Images/empty-img.jpeg">`);
    }
});

$("#delete-img-12").click(function() {
    gallery.splice(11 , 1);

    for (i = 0; i < gallery.length; i++){
        console.log(gallery[i]);
        $(`#gallery-img-${i+1}`).html(gallery[i]);
        $(`#gallery-img-${i+2}`).html(`<img src="./Images/empty-img.jpeg">`);
    }
});