function setup() {
  createCanvas(100,100);
  background(255);
  fill(0);
  for(let i= 0;i<5;i++){
  ellipse(100, 100, 100);
stroke(255, 0, 0);
stroke(0, 0, 255);
  
  while(x < 100){ // 四角を描く座標が描画範囲内であれば続ける
    rect(x, x, 20, 20);
    x = x + 20; // 繰り返し1回ごとに場所を動かす
  }
}

// for 文を使うと、同じプログラムを以下のように書くことができます
// function setup() {
//   createCanvas(100,100);
//   fill(0);
//   for(let i = 0; i < 5; i++){
//     rect(i * 20, i * 20, 20, 20);
//   }
// }
