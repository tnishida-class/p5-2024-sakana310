function setup() {
  createCanvas(128,128);
}

function draw() {
  background(0);
  strokeWeight(4);
  fill(10, 200, 162);
  triangle(12,12,116,220,116,10);
  fill(94, 185, 84);
  triangle(0,108,106,108,106,0);
  fill(105);
  textSize(32);
  textFont("serif");
  text("★", 68, 100);
}
