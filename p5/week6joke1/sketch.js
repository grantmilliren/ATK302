let state = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {

  switch (state) {

    case 0:
      background('red')
      text("why did the chicken cross the road?", 100, 100);
      break;

      // for joke2 = put timer code in here

    case 1:
      background('blue')
      text("to get to the other side!! LOL BRO", 100, 100);
      break;

  }
}



function mouseReleased() {

  state = state + 1;

}

 if (state > 1) {
      state = 0;
}
