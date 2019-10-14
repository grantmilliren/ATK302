var song1, song2, song3;
var myState = -1;
var x = 0;
var myTimer = 0;
var image1, image2, image3;


function preload() {
  song1 = loadSound('assets/EmeraldBay.wav');
  song2 = loadSound('assets/InsideMyHead.wav');
  song3 = loadSound('assets/FarAway.wav');

  // set each song to loop and then immediately pause it so it doesn't play

  song1.loop();
  song1.stop();
  song2.loop();
  song2.stop();
  song3.loop();
  song3.stop();

}

function setup() {

  createCanvas(500, 500);
  background('blue');
  image1 = loadImage('YoungChasersCover.jpg');
  image2 = loadImage('PrettyYears Cover.jpg');
  image3 = loadImage('MiseryCover.jpg');


}

function draw() {
  switch (myState) {

    case -1:
    background('blue');
    textSize(32);
    text("Welcome to my program. These are three original songs of mine.", 50, 50, 200, 400);

    myTimer++;
    if (myTimer > 200){
      myState = 0;
    }
    break;

    case 0: // trigger the playing, and go immediately to the next state

      song1.play();
      myState = 1; // go immediately (the next time) to the next state
      break;


    case 1:
      fill('blue');
      background("#03fcc6");
      text('emerald bay by grant milliren', x, 30);
      x = x + 3;

      if (x > width) {
        x = 0 ;
      }

      image(image1, 100, 0, 400, 200) ;

      break;

    case 2:
      song2.play();
      myState = 3;
      break;

    case 3: // trigger the playing, and go immediately to the next state
      fill('green');
      background("#03fcc6");
      text("inside my head by grant milliren", x, 30);
      x = x + 1;

      if (x > width) {
        x = 0 ;
      }
      image(image2, 100, 0, 400, 200) ;
      break;

      case 4:
      song3.play();
      myState = 5;
      break ;

      case 5:
          fill('red');
          background("#03fcc6");
          text("far away by grant milliren", x, 30);
          image(image3, 100, 0, 400, 200) ;
      break ;


  }


}

function mouseReleased() {
  myState++; // same as myState = myState + 1

  // pause all the songs
  song1.stop();
  song2.stop();
  song3.stop();

  if (myState > 5) {
    myState = 0;
  }
}
