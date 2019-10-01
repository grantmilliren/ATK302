var myFont;
var x = 0;
function preload() {
  myFont = loadFont('assets/Gayathri-Regular.ttf');  // find an otf or ttf
}

function setup() {
  createCanvas(1000, 800) ;
}
function draw() {
  background('black');
  fill('navy');   // SETS the color
  textFont(myFont);  // SETS the font
  textSize(36);	// SETS the size of the font
  text('HELLO WORLD', x, 50); // DISPLAYS TEXT WITH THE FONT
  x = x + 1 ;
  if (x > width) {
    x = 0;
  }
}
