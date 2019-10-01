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
    quad(80, 248, 81, 222, 16, 176, 16, 213) ;
    quad(81, 393, 38, 460, 72, 460, 93, 395) ;
    quad(146, 395, 156, 395,188, 456, 159, 457) ;
    quad(103, 157, 103, 163, 109, 163, 109, 155) ;
    quad(108, 176, 108, 182, 129, 180, 130, 173) ;
    quad(122, 158, 122, 163, 128, 163, 128, 157) ;

    fill("red");
    quad(123, 237, 123, 245, 107, 247, 108, 237) ;
    quad(110, 270, 110, 281, 121, 281, 121, 274) ;
    quad(111, 312, 111, 324, 124, 325, 124, 311) ;
  }


}

function mouseReleased() {
  console.log(mouseX + ", "+mouseY) ;
}
