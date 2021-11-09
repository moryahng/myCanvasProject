$("#dimension-input" ).submit(function(event) {
  event.preventDefault();

  var newWidth = $("#canvas-width").val();
  console.log (`Width: ${newWidth}`)

  var newHeight = $("#canvas-height").val();
  console.log (`Height: ${newHeight}`)

  $("#canvas-container").css("height", newHeight);
  $("#canvas-real").attr("width", newWidth);
  $("#canvas-draft").attr("width", newWidth);
  $("#canvas-real").attr("height", newHeight);
  $("#canvas-draft").attr("height", newHeight);
  $("#submit-check").css("display", "inline");
  });

  $("#canvas-width").focus(function (event){
    event.preventDefault();
    $("#submit-check").css("display", "none");
  })

  $("#canvas-height").focus(function (event){
    event.preventDefault();
    $("#submit-check").css("display", "none");
  })


  var slider = document.getElementById("brushsize");
  var output = document.getElementById("brush-size-value");
  output.innerHTML = slider.value; // Display the default slider value
  
  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
    output.innerHTML = this.value;
  }



  $("#primary-colour").mouseenter(function (event){
    $("#label-colour-fill").css("display", "inline");
  })

  $("#primary-colour").mouseleave(function (event){
    $("#label-colour-fill").css("display", "none");
  })


  $("#secondary-colour").mouseenter(function (event){
    $("#label-colour-border").css("display", "inline");
  })

  $("#secondary-colour").mouseleave(function (event){
    $("#label-colour-border").css("display", "none");
  })

