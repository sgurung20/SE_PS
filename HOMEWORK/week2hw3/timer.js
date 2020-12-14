var colors = ["blue", "orange", "red", "yellow"];

let elements = document.getElementsByClassName("ovals");
var len = elements.length;

var currentColorIndex = 0;
var colorsLength = colors.length;

function colorChange() {

  console.log("before increment" + currentColorIndex);
  if (currentColorIndex > colorsLength) {
    currentColorIndex = 0;
  } else {
    for (i = 0; i < len; i++)
      elements[i].style.backgroundColor = colors[currentColorIndex];
  }
    currentColorIndex++;
    console.log("after increment" + currentColorIndex);

    if(currentColorIndex >= colorsLength)
    currentColorIndex = 0;
}

// another solution:
// const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'white'];
// const container = document.querySelector('.container');
// const children = document.querySelectorAll('.child');
//
// container.addEventListener('click', (e) => {
//   if (e.target) {
//     for (i = 0; i < children.length; i++) {
//       children.item(i).style.background = colors[Math.floor(Math.random() * ((colors.length -1) - 0) + 0)];
//     }
//   }
// })
