$("#insert-text").click(function (e) {
  if (hasInput) return;
  addInput(e.clientX, e.clientY);
})

