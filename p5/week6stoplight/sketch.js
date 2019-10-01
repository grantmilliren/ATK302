let myState = 0 ;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here
  // make a yellow rectangle for the stoplight
  fill('grey') ;
  rect(width/2, height/2, 150, 500);

  // do the case thing
  // make 3 ellipses in each case
  // case 0 :: -- green light!
fill('yellow') ;
  ellipse(width/2, height/2, 100, 100) // center ellipse

fill('red')
  ellipse(width/2, height/2 - 150, 100, 100); // the red one

fill('green')
  ellipse(width/2, height/2 + 150, 100, 100);

}
