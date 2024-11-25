//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;

const n = 500
const m = 680
let f = 10
let ame = "💧"
let p = 50
let L =10
let O =0



function setup(){
  createCanvas(windowWidth, windowHeight);
  
  balls = [];
  
  x = width / 2;
  y = height / 2;
  vx = 2;
  vy = 2;


//   createCanvas(1000, 1000);
}



function draw(){
  background(10, 10, 80);
  if(keyIsDown("2".charCodeAt(0))){ 
    background(0, 255, 0);
  }
  if(keyIsDown("1".charCodeAt(0))){ 
    background(10, 10, 800);
    f=1
  }
  if(keyIsDown("3".charCodeAt(0))){ 
    background(255, 0, 0);
  }
if(keyIsDown("4".charCodeAt(0))){ 
  background(255, 128, 255);


} if(keyIsDown("5".charCodeAt(0))){ 
  background(0, 128, 255);



} if(keyIsDown("6".charCodeAt(0))){ 
  background(255, 255, 0);

}if(keyIsDown("7".charCodeAt(0))){ 
  background(255, 255, 128);

}if(keyIsDown("8".charCodeAt(0))){ 
background(255, 255, 255);


} if(keyIsDown("9".charCodeAt(0))){ 
background(255,192,0);
p=200

}if(keyIsDown("A".charCodeAt(0))){ 
  background(255, 255, 255);
  L=20
}if(keyIsDown("Z".charCodeAt(0))){ 
  background(255, 255, 255);
  O=(12)
}


 





     

  if(keyIsDown("0".charCodeAt(0))){ 
    background(10, 10, 80);
    f=10
    p=50
    L=10
    O=0
  
  }



  textSize(300);
  text("☔",n,m)
  textSize(80)
  text("🐸",650,800,)
  
  if(keyIsDown("2".charCodeAt(0))){ 
    ame= "🐸"
  }

  if(keyIsDown("3".charCodeAt(0))){ 
    ame= "🍎"
  }
  if(keyIsDown("4".charCodeAt(0))){ 
    ame= "🌸"
  }

  if(keyIsDown("5".charCodeAt(0))){ 
    ame= "💎"
  }

  if(keyIsDown("6".charCodeAt(0))){ 
    ame= "🥎"
  }
  if(keyIsDown("7".charCodeAt(0))){ 
    ame= "💡"
  }

  if(keyIsDown("8".charCodeAt(0))){ 
    ame= "✨"
  } 
 
  if(keyIsDown("0".charCodeAt(0))){ 
    ame= "💧"
  } 
   
  



 
      
  
  

  //image(img, 200, 200, 100, 100);


  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    textSize(b.size);//文字サイズをボールのサイズに合わせる
    text(ame,b.x, b.y);
   
    //rect(b.x, b.y, b.size);

    //ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;

//function(){  

      // 速度は「位置の変化量」
    

   
      
  
  
      
      //if (b.y < 0 || b.y > height) { 
        //b.vy = -b.vy; }
        // x座標, y座標を画面内に戻す 
      
       
// 四角形との衝突判定と跳ね返り処理 
if (b.x > n && b.x < 850 && b.y > m-200 && b.y < 1000) {
   if (b.x > 400 && b.x < 5000) { b.vx = -b.vx; }
    if (b.y > m-400 && b.y < 1200) { b.vy = -b.vy; 
    }

    }
  }
   
  


  

  
  if(frameCount % f === 0)


  

  //   if(keyIsDown("3".charCodeAt(0))){ 

  //     let f=10
  //     }
  //     if(keyIsDown("0".charCodeAt(0))){ 

  //       const f=10
  //       }
        
      
   {const b = {
    x:random(width),
    y: (0),//(height)
    size: random(10, p),
    vx:(O),//random(-2,2),
    vy:(L),//random(-2,2)
  };





balls.push(b);



  }


}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: random(10,50), vx: dx, vy: dy };
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


//}
