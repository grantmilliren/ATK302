var song1, song2, song3;
var myState = 0;


function preload() {
  song1 = loadSound('assets/BestYears.mp3');
  song2 = loadSound('assets/Shrine.mp3');
  song3 = loadSound('assets/Misery.mp3');

  // set each song to loop and then immediately pause it so it doesn't play

  song1.loop();
  song1.stop();
  song2.loop();
  song2.stop();
  song3.loop();
  song3.stop();

}

function setup() {

  createCanvas(1200, 1200);
  background('blue');


}

function draw() {
    rect(width /2, height / 2, 800, 800);
  switch (myState) {

    case 0: // trigger the playing, and go immediately to the next state
      fill('blue');
      text('Hello');
      rect(width / 2, height / 2, 500, 500);
      song1.play();
      myState = 1;  // go immediately (the next time) to the next state
      break;


    case 1:
    fill('red');
    rect(width / 2, height / 2, 500, 500);
      song2.play();
      myState = 2;
      break;



    case 2: // trigger the playing, and go immediately to the next state
    fill('green');
    rect(width / 2, height / 2, 500, 500);
      song3.play();
      myState = 0;
      break;
  }


}

function mouseReleased() {
  myState++;

  // pause all the songs
  song1.stop();
  song2.stop();
  song3.stop();

  if (myState > 2) {
    myState = 0;
  }
}
