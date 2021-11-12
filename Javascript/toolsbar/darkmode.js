$("#grid-background").change(function() {
if (document.getElementById("grid-background").checked == true){
    $("body").css("background-image", `url(./Images/grid-background-dark.png)`);
    $(".nav-bar").css("filter",`drop-shadow(5px 5px 8px #111)`);
    $(".tools-bar").css("filter",`drop-shadow(5px 5px 10px #111)`);
    $(".nav-bar").css("background-color",`#333`);
    $(".nav-icon").css("color",`#ececec`);
    $(".deactive").css("color",`#999`);
    $("body").css("color", `#ececec`);
    $(".gallery-img-container").css("background", `#454545`);
    $(".gallery-img-container").css("filter", `drop-shadow(5px 5px 5px #111)`);
}

//default light mode
else{
    $("body").css("background-image", `url(./Images/grid-background.png)`);
    $(".nav-bar").css("filter",`drop-shadow(5px 5px 10px #666)`);
    $(".tools-bar").css("filter",`drop-shadow(5px 5px 10px #666)`);
    $(".nav-bar").css("background-color",`#ececec`);
    $(".nav-icon").css("color",`#666`);
    $(".deactive").css("color",`#999`);
    $("body").css("color", `#000`);
    $(".gallery-img-container").css("background", `white`);
}
})
