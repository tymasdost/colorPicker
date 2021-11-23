const colpicker = document.getElementsByClassName("colpicker");
const cell = document.getElementsByClassName("cell");
const clearMap = document.getElementById("clearMap");
const newColor = document.getElementById("newColor");
const newGrid = document.getElementById("grid");

let i = 0;

while (i < 900) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("cell");
  newGrid.appendChild(newDiv);
  i++;
}

const clearDiv = () => {
  [...colpicker].forEach((remove) => remove.classList.remove("border"));
};

//[...cell].forEach((cell) => cell.onmouseover = () => cell.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`); // Random colors on hover

// Normalni kod ||
//              \/

[...cell].forEach((cell) => {
   cell.onclick = () => {
     cell.style.backgroundColor = color;
   };
 });

[...colpicker].forEach((picker) => {
   let randomColor = Math.floor(Math.random() * 16777215).toString(16);
   picker.style.backgroundColor = `#${randomColor}`;

   picker.onclick = () => {
     clearDiv();
     color = picker.style.backgroundColor;
     picker.classList.add("border");
   };
 });

clearMap.onclick = () => {
  [...cell].forEach((cell) => {
    clearDiv();
    cell.style.backgroundColor = "#ffffff63";
  });
};

newColor.onclick = () => {
  [...colpicker].forEach((picker) => {
    clearDiv();
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    picker.style.backgroundColor = `#${randomColor}`;
  });
};
