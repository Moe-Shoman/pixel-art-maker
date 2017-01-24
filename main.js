const canvas = document.getElementById('canvas');
const pallet = document.getElementById('colorPallet');
let brushColor = "rgb(255,255,255)"
let mouseColor = false;
for (var i = 0; i < 1400; i++) {
    let pixel = document.createElement('div');
    pixel.className += " pixels";
    pixel.addEventListener("click", function(event) {
        event.target.style.backgroundColor = brushColor;
    });
    pixel.addEventListener("mousedown", function (evt) {
      mouseColor = true;
    });
    pixel.addEventListener("mouseover", function (event) {
      if(mouseColor){
        event.target.style.backgroundColor = brushColor;
      }
    });
    pixel.addEventListener("mouseup", function (event) {
      mouseColor = false;
    });
    canvas.appendChild(pixel);
}
const colorList = [
    "rgb(0,0,0)",
    "rgb(255,255,255)",
    "rgb(255,0,0)",
    "rgb(0,255,0)",
    "rgb(0,0,255)",
    "rgb(255,255,0)",
    "rgb(0,255,255)",
    "rgb(255,0,255)",
    "rgb(192,192,192)",
    "rgb(128,128,128)",
    "rgb(128,0,0)",
    "rgb(128,128,0)",
    "rgb(0,128,0)",
    "rgb(128,0,128)",
    "rgb(0,128,128)",
    "rgb(0,0,128)"
];
for (var i = 0; i < colorList.length; i++) {
    let colorIcon = document.createElement('div');
    colorIcon.className += " colorCircles";
    colorIcon.style.backgroundColor = colorList[i];
    colorIcon.id = `color ${i}`;
    colorIcon.addEventListener("click", function() {
        brushColor = colorIcon.style.backgroundColor;
    });
    colorPallet.appendChild(colorIcon);
}
