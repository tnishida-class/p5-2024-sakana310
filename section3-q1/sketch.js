// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
letsize=50
let count=0
let cycle=100
let increment = 1;
function setup(){
  createCanvas(200, 200);
}
function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  count = (count + increment) % cycle;
  if (keyIsPressed) {
  increment = 2;
} else {
 increment = 1;
  }
  // BLANK[1]
  if (count < cycle/2) {
    size = count + 50;
    } else {
    size = (cycle - count) + 50;
    }
  ellipse(width / 2, height / 2, size);
}
