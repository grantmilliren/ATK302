
function draw() {
  background(237, 34, 93);
  fill(0);

  if (mouseIsPressed) {
    // this is where you put the pressed shapes
    ellipse(width/2, height/2, 50, 50);
  
  } else {

    // this is for the "unpressed state"
    rect(25, 25, 50, 50);
  }

  print(mouseIsPressed);
}

function setup(){
  createCanvas(800, 600);
}
