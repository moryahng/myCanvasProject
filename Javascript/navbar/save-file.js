$("#savef").click(() => {
var link = document.createElement('p');
let name = prompt("Enter name of the file: ")
  link.download = `${name}.png`;
  link.href = document.getElementById('canvas-real').toDataURL()
  link.click();
    
});


