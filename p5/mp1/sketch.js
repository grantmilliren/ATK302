function setup(){
  createCanvas(800, 600);
}


function draw() {
  background(237, 34, 93);
  fill(0);

  if (mouseIsPressed) {
    // this is where you put the pressed shapes
//    ellipse(25, 25, 50, 50);

  } else {

    // this is for the "unpressed state"
    ellipse(118, 163, 50, 50 ) ;
    rect(81, 192, 75, 200) ;

    fill("blue");
    rect(75, 61, 75, 75);

    quad(154, 216, 156, 246, 250, 190, 235, 150) ;
    
  }


}

function mouseReleased() {
  console.log(mouseX + ", "+mouseY) ;
}
