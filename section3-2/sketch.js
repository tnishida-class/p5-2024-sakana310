// テキスト「アニメーションの基本」

//function windowResized(){
 // resizeCanvas(windowWidth, windowHeight);
//}

//let x, y;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 1.032;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 50);
  // キーの処理（else ifにすると同時押しできなくなってしまうので要注意）
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
 // if(keyIsDown(UP_ARROW)){ y -= 5; }
  //if(keyIsDown(DOWN_ARROW)){ y += 5; }
  if(keyIsDown(RIGHT_ARROW)&&keyIsDown("A".charCodeAt(0))){ x+= 10; } // 文字キーの場合
  if(keyIsDown(LEFT_ARROW)&&keyIsDown(" ".charCodeAt(0))){ x-= 10; } // スペースキーも文字キーと同様
}
 // if(keyIsDown(LEFT_ARROW)){ x -= 5; }}
  //if(keyIsDown(RIGHT_ARROW)){ x += 5; }

 
  // if (keyIsDown("") && keyIsDown(RIGHT_ARROW)) { // 65 is the keycode for 'A'
    //x += 10; 
  //}
   // if (keyIsDown("") && keyIsDown(LEFT_ARROW)) { // 65 is the keycode for 'A'
     // x -= 10; 
  //}
  //if(keyIsDown("A".charCodeAt(0) and (keyIsDown(RIGHT_ARROW))){ x+= 10; } 
// 文字キーの場合
 // if(keyIsDown(LEFT_ARROW))(" ".charCodeAt(0)){ x-= 10; }// スペースキーも文字キーと同