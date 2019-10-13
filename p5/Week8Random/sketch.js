var bands = ['Why did the chicken cross the road? \n To get to the other side','The National', 'Nickelback', 'Cymbals Eat Guitars', 'Beatles', 'Circa Waves', 'Lil Nas X'];
var aRandomBand = '';

function setup() {
  createCanvas(800, 800);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(100);
  textSize(48);
  text(aRandomBand, width / 2, height / 2);
}

function mouseClicked() {

  var i = floor(random(bands.length)); // floor changes the random to an integer

  aRandomBand = bands[i];


}
