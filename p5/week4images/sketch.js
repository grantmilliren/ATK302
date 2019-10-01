var vidette ;

function setup() {
  // put setup code here
  createCanvas(1400, 800);
  vidette = loadImage('assets/TheVidette.jpg') ;
}

function draw() {
  // put drawing code here
  image(vidette, 100, 0, 400, 200) ;
}
