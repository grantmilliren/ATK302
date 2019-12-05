var daysunpos=200;
var nightsunpos=200;
// var rwStripes;
// var cars = [];
// var car;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   //for loop for rwStripes
//   for (var i = 0; i < 5; i++) {
//   cars.push(new Car()) ;
//     rwStripes = createVector(width / 2, height/ 2);
//     rectMode(CENTER);
//     ellipseMode(CENTER);
//   }
//
// }

function nighttime() {
  background(159, 189, 237); // rgb  0-255

  // pretty sky
  for (var i = 0; i <= 500; i += 5) {
    strokeWeight(10);
    stroke(215 - i, 128 - i, 64);
    line(0, 350 - i, width, 350 - i); // x,y,x,y
  }

  // sun
  noStroke();
  fill(250, 186, 3);
  ellipse(700, nightsunpos = nightsunpos + .5, 70, 70);
//  1
  //text(frameCount,200,150);



  // cloud
  fill(255, 255, 255, 50);
  ellipse(frameCount / 4, 150, 40, 20);
  //cloud 2
  fill(255, 255, 255, 50);
  ellipse(frameCount / 6, 95, 40, 20);

  // Green Ground
  noStroke();
  fill(0, 100, 0); // rgb
  rect(0, 350, width, 1000);


  //street
  fill('#6E6C6C');
  quad(660, 350, 740, 350, 1175, 1000, 275, 1000);

}


function daylight() {
  // pretty sky
  for (var i = 0; i <= 500; i += 5) {

   strokeWeight(10);
      stroke(477 - i, 128 - i, 64);
      line(0, 350 - i, width, 350 - i); // x,y,x,y
    }

  // sun
  noStroke();
  fill(250, 186, 3);
  ellipse(700, daysunpos = daysunpos - .5, 70, 70);
  //  1
  //text(frameCount,200,150);



  // cloud
  fill(255, 255, 255, 50);
  ellipse(frameCount / 4, 150, 40, 20);

  // Green Ground2
  noStroke();
  fill(4, 107, 0); // rgb
  rect(0, 322, width, 1000);
  // Green Ground
  noStroke();
  fill(0, 100, 0); // rgb
  rect(0, 350, width, 1000);
//mountians

fill('#C0C0C0');
strokeWeight(0);
triangle(276, 161, 440, 322, 107, 322);


fill('#A0A0A0');
strokeWeight(0);
triangle(123, 119, 440, 322, -15, 322);

fill('#A0A0A0');
strokeWeight(0);
triangle(427, 147, 609, 322, 238, 322);


//mountians 2nd setup
fill('#808080');
strokeWeight(0);
triangle(427, 147, 609, 322, 178, 322);

fill('#808080');
strokeWeight(0);
triangle(25, 138, 259, 322, -15, 322);


fill('#606060');
strokeWeight(0);
triangle(0, 169, 255, 322, -30, 322);

fill('#606060');
strokeWeight(0);
triangle(344, 179, 633, 322, 196, 322);



  fill('#6E6C6C');
  quad(660, 350, 740, 350, 1175, 1000, 275, 1000);
  //street
  fill('#6E6C6C');
  quad(690, 322, 707, 323, 1175, 1000, 275, 1000);

  mouseLocation();
} // end daylight
//
// // define car Brandon
// function Car() {
//   this.pos = createVector(random(100), 100);
//   this.vel = createVector(random(-15, 10), random(-10, 20));
//   this.r = random(255);
//   this.g = random(255);
//   this.b = random(255);
//   // methods
//   this.display = function() {
//     fill(this.r, this.g, this.b);
//     rect(this.pos.x, this.pos.y, 100, 50);
//   }
//
//   this.drive = function() {
//     this.pos.add(this.vel);
//     if (rwStripes.pos.y > width) rwStripes.pos.y = 0;
//     if (rwStripes.pos.y < 0) rwStripes.pos.y = height;
// }}
