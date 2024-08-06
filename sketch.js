function setup() {
  createCanvas(600, 600);
  background("purple");
  
}

function draw() {
  
  
  stroke("#E91E63");
  fill ("black");
  
   // console.log(mouseIsPressed);
  
  if (mouseIsPressed) {
  rect (mouseX, mouseY, 55,55);
  }
  }
