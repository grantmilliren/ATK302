var song1;

function preload() {
  song1 = loadSound('assets/GoldbugV1.mp3');
}


function setup() {

}

function draw() {

}

function mouseReleased() {
  // if song is playing, pause it
  // otherwise, play it!
  if (song1.isPlaying()) {
    song1.pause();

  } else {

    song1.play();
  }

}
