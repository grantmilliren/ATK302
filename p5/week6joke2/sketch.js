let state = 0;
var myTimer = 0 ;

function setup() {
  createCanvas(800, 800);
}

function draw() {

  switch (state) {

    case 0:
      background('red')
      text("why did the chicken cross the road?", 100, 100);
      break;

      var myTimer = 0 ;  // declare in the global area


   // put this block of code at the end of a case where you want a timer, before the break ;

    if (myTimer >= 300) {

       myState++ ;  // this will go to the next state. You can also put myState = 3 or something
       myTimer = 0 ;  // people always forget to reset the timer!!

    }


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
