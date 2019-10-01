var timer = 200;

function setup() {
  createCanvas(800, 800);
  background('black');
}

function draw() {
  timer-- ;
  if (timer <= 0) {
    background(random (255), random (255), random (255));
    timer = 200;
  }
}
