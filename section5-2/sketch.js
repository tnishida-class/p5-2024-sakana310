function setup(){
    createCanvas(1000, 1000);
    star(400, 400, 150,); // 作った関数を呼び出す
  }
  
  
function star(cx, cy, r){
fill(1)
    beginShape();    // 点つなぎを始める
    const n = 10
    for(let i = 0; i < n; i++){
      const theta = TWO_PI * i * 1/n- HALF_PI;
      const x = cx + cos(theta) * r;
      const y = cy + sin(theta) * r;
      vertex(x, y);  // 次につなぐ点を１つ増やす
    }
    endShape(CLOSE); // 点つなぎを終わる
}