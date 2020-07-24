function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  // Water symbol 
  // noFill();
  // stroke(5);
  // circle(width/2, height/2, 100);
  // circle(225, 225, 25);
  // circle(215, 250, 25);
  // circle(250, 220, 25);
   drawFireNation();
}

function drawFireNation() {
  noFill();
  strokeWeight(5);
  stroke(color(161, 0, 0));

  triangle(210, 270, 220, 270, 215, 200)
  ellipse(250, 250, 60, 60);
}