const shapes = ["triangle", "square", "circle", "rectangle", "diamond"];
const colors = [
  "red",
  "blue",
  "green",
  "blueviolet",
  "orange",
  "pink",
  "yellow",
  "cyan",
  "turquoise",
  "paleturquoise",
];

const changeColorBtn = document.getElementById("change-color");
const changeShapeBtn = document.getElementById("change-shape");
const shapeContainer = document.getElementById("shape-container");
const shape = document.getElementById("square");
const colorSelected = document.getElementById("color");

changeColorBtn.addEventListener("click", function (e) {
  const colorsIndex = Math.floor(Math.random() * colors.length);

  shapeContainer.style.backgroundColor = colors[colorsIndex];
});

changeShapeBtn.addEventListener("click", function (e) {
  const shapesIndex = Math.floor(Math.random() * shapes.length);

  shape.id = shapes[shapesIndex];
});

colorSelected.addEventListener("change", function (e) {
  shapeContainer.style.backgroundColor = colorSelected.value;
});
