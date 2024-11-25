// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2019, 10);

  // isLeapYear の動作確認のため console に出力しています
  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  for(let d = 1; d <= daysInMonth(y, m); d++){
   console.log(`${y}年${m}月${d}日は${dayOfWeekAsString(dayOfWeek(y, m, d))}曜日です`); }
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
  }


function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  return isLeapYear(y) ? 366 : 365;// BLANK[1]
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  // BLANK[2]
  // ツェラーの公式を利用して曜日を計算
  let day = d;
  let month = m;
  let year = y; 
if (month < 3) { month += 12; year -= 1; }
let K = year % 100; let J = Math.floor(year / 100); 
let f = day + Math.floor(13 * (month + 1) / 5) + K + Math.floor(K / 4) + Math.floor(J / 4) - 2 * J; 
return ((f % 7) + 7) % 7;
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}
