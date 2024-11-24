// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(200, 200);
  background(0, 51, 153);
  noStroke();
  for(let i = 0; i < 12; i++){
    //const theta = TWO_PI * i / 12; // TWO_PI は円周率πの2倍（ほかに PI, HALF_PI, QUARTER_PI　がある）
    let theta = TWO_PI * i / 12;// TWO_PI は円周率πの2倍
  fill(255, 204, 0);
 star((100 + cos(theta) * 50), (100 + sin(theta) * 50), width/20);
  }
}
function star(cx, cy, r){
  beginShape(); // 点つなぎを始める
  for (let i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    
   // let x = 100 + cos(theta) * 50;
    //let y = 100 + sin(theta) * 50;
   // ellipse((cx + cos(theta) * r), (cy + sin(theta) * r), 10);
    vertex((cx + cos(theta) * r),(cy + sin(theta) * r));// 次につなぐ点を１つ増やす
  }
  endShape(CLOSE);
}

  

// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
