/**
 * 
 */
var os = "Android";
// var os = "iPhone";
var accrev = 1;
if (navigator.userAgent.indexOf(os) > 0){
  accrev = -1;
}

var canvas =document.querySelector("#canvas");
var c = canvas.getContext("2d");
var check = 0;
var touchcheck = 2;
var bureeki = 0.03;
var bureekicount = 0;
var timecount = 0;

//難易度に関係する変数
var score = 10000;
var timeout = 20;
var kosu = 8;
var maxrad = 60;
var minrad = 30;
var losscore = 1.5;
var maxmp = 1;
//ここまで
var level = 0;
var sumtime = 0;
var sumscore = 0;
var sumbreeki = 0;
//windowの準備
var canvaz = document.getElementById('canvas');

function expandCanvas() {
  var b = document.body;
  var d = document.documentElement;
  canvas.width = Math.max(b.clientWidth, b.scrollWidth, d.scrollWidth, d.clientWidth);
  canvas.height = Math.max(b.clientHeight, b.scrollHeight, d.scrollHeight, d.clientHeight);
}
expandCanvas();
SCWIDTH = canvas.width;
SCHEIGHT = canvas.height;
//障害物の動き用変数
var move = [0];
var mp = [0];
for(var i = 0; i < kosu; ++i){
  move[i] = 0;
  mp[i] = 0;
}
//センサーの値
var x;
var y;
var z;
//玉の設定
var rad = [0];
rad[0] = 20;
rad[1] = 30;
rad[2] = 40;
for(var i = 3; i < kosu; ++i){
  rad[i] = Math.floor(Math.random() * maxrad) + minrad;
  console.log(rad[i]);
}
console.log(rad);
var cofe = 200.0;
var bounce = 1.8;
var xx = [0];
var yy = [0];
var vx = [0];
var vy = [0];

  //玉の座標
  xx[0] = 20;
  yy[0] = 20;
  xx[1] = SCWIDTH - 30;
  yy[1] = SCHEIGHT - 30;
  xx[2] = Math.floor((Math.random() * (SCWIDTH / 5) * 2));
  yy[2] = Math.floor((Math.random() * (SCHEIGHT / 5) * 2));

  for(var i = 3; i < kosu; ++i){
      xx[i] = Math.floor((Math.random() * SCWIDTH));
      yy[i] = Math.floor((Math.random() * SCHEIGHT));
      if(xx[i] <= 200 && yy[i] <= 200){
        i--;
      }else if(xx[i] >= SCWIDTH - 100 && yy[i] >= SCHEIGHT - 100){
        i--;
      }
  }

  //玉の速度


var c;
//時間経過計測用
var timeTo;
var timeFrom = 0;
//キャンバスのサイズ
var SCWIDTH;
var SCHEIGHT;
var WIDTH = 400;
var HEIGHT = 300;

var date = new Date().getTime();

window.addEventListener("devicemotion", devicemotionHandler);
window.addEventListener("DOMContentLoaded", drawCircle(xx, yy, rad));

//タイムカウント用
setInterval(function(){
  if(touchcheck != 2){
    if(check == 0){
      timecount = timecount - 0 + 0.01;
      timecount = timecount.toFixed(2);
      if(score > 0){
        if(touchcheck == 0){
          score -=  100 / timeout;
        }else if(touchcheck == 1){
          score -= (100 / timeout) * 2;
        }
      }else if(score < 0){
        score = 0;
      }
    }
  }
}, 10);
//点数計算
// score = 1000000 * (timeout - timecount) / timeout;


vx[0] = 0;
vy[0] = 0;
var movecount = 50.0;
//重力加速度センサーの値取得＝＞端末のセンサーの値が変わるたびに発火
function devicemotionHandler(event){
    x = accrev * event.accelerationIncludingGravity.x * 1.5;
    y = accrev * event.accelerationIncludingGravity.y * 1.5;
    // z = event.accelerationIncludingGravity.z * 1.5;

  // if(touchcheck != 2){
    moveCircle();
  // }
}

function gameover() {
  var avetime = (sumtime - 0) / level;
  var name = prompt("ゲームオーバー！！\n最終到達レベル" + level + "\n1ステージの平均タイムは" + avetime.toFixed(2) + "秒です\n合計スコアは" + sumscore + "です\nブレーキを使用した回数の合計は" + sumbreeki + "回です");
    
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/addrank", true);
  xhr.setRequestHeader("Content-Type", 'application/json');
  //xhr.send("name=aaa");
  if(name == null){
    name = "anonymous";
  }
  const j = { name: name, score: sumscore, gamecode: "acc" };
  xhr.send(JSON.stringify(j));
  
  if(window.confirm("リトライしますか")) {
  location.href = "/acc/play";
  } else {
  location.href = "/";
  
  }
//  if(level == 0){
//    alert("ゲームオーバー！！");
//  }else{
//    alert("ゲームオーバー！！\n最終到達レベル" + level + "\n1ステージの平均タイムは" + avetime.toFixed(2) + "秒です\n合計スコアは" + sumscore + "です\nブレーキを使用した回数の合計は" + sumbreeki + "回です");
//  }
//  sumtime = 0;
//  sumscore = 0;
//  sumbreeki = 0;
//  level = 0;
//  restart();
}


//画面タッチブレーキ
canvaz.ontouchstart = function(){
  if(touchcheck == 2){
    timeFrom = new Date().getTime();
  }else{
    ++bureekicount;
  }
  touchcheck = 1;
}
canvaz.ontouchend = function(){
  bureeki = 0.03;
  touchcheck = 0;
}

//センサーの値に合わせて玉を動かすfunction
function moveCircle() {
  if(touchcheck != 2){
    timeTo = new Date().getTime();
    var time = timeTo - timeFrom;
    time = time / 1000.0;



    var dx = [0];
    var dy = [0];
    for(var i = 0; i < 1; ++i){
        dx[i] = vx[i] * time + x * time * time / 2.0;
        dy[i] = vy[i] * time + y * time * time / 2.0;
      xx[i] = xx[i] + dx[i] * cofe;
      yy[i] = yy[i] - dy[i] * cofe;

      if(touchcheck == 1){
        bureeki += 0.01;
        if(vx[i] < 0){
          vx[i] += bureeki;
        }else{
          vx[i] -= bureeki;
        }
        if(vy[i] < 0){
          vy[i] += bureeki;
        }else{
          vy[i] -= bureeki;
        }
      }else{
        vx[i] = vx[i] + x * time;
        vy[i] = vy[i] + y * time;
      }
      //canvasの端にぶつかったときの処理
      if (xx[i] - rad[i] < 0 && vx[i] < 0) {
        vx[i] = -vx[i] / bounce;
        xx[i] = rad[i];
      } else if (xx[i] + rad[i] > SCWIDTH && vx[i] > 0) {
        vx[i] = -vx[i] / bounce;
        xx[i] = SCWIDTH - rad[i];
      }

      if (yy[i] - rad[i] < 0 && vy[i] > 0) {
        vy[i] = -vy[i] / bounce;
        yy[i] = rad[i];
      } else if (yy[i] + rad[i] > SCHEIGHT && vy[i] < 0) {
        vy[i] = -vy[i] / bounce;
        yy[i] = SCHEIGHT - rad[i];
      }

      for(var j = 1; j < kosu; ++j){
        var ballLength = Math.sqrt(Math.pow(xx[0] - xx[j], 2) + Math.pow(yy[0] - yy[j], 2));
        if(ballLength + 7 <= rad[0] + rad[j]){

          if(j == 1 && check ==0){
            alert("レベル" + level + "クリア！！\nクリアタイムは" + timecount + "秒です\nスコアは" + score + "です\nブレーキを使用した回数は" + bureekicount + "回です");
            check++;
            sumtime = (sumtime - 0) + (timecount - 0);
            sumscore += score;
            sumbreeki += bureekicount;
            restart();
            //location.reload();
            ++level;
            continue;
          }else if(j == 2 && check == 0){
            for(var k = 3; k < kosu; ++k){
              if(rad[k] > 20){
                var time
                rad[k] -= 0.2;
              }
            }
          }else{
            rad[0] = SCWIDTH / 2;
            if(check == 0){
              check++;
              setTimeout(gameover, 500);
            }
          }
        }
      }
    }
    //障害物を動かす
    for(var i = 2; i < kosu; ++i){
      if(move[i] % 100 == 0){
        move[i] = Math.floor(Math.random() * 400);
        mp[i] = Math.floor(Math.random() * 2) + maxmp;
        if(i == 2){
          mp[2] = 0.7;
        }
      }

      if(move[i] >= 1 && move[i] <= 100){
        xx[i] += mp[i];
        move[i]--;
      }else if(move[i] >= 101 && move[i] <= 200){
        xx[i] -= mp[i];
        move[i]--;
      }else if(move[i] >= 201 && move[i] <= 300){
        yy[i] += mp[i];
        move[i]--;
      }else if(move[i] >= 301 && move[i] <= 400){
        yy[i] -= mp[i];
        move[i]--;
      }
  //理不尽な死の処理
      // if(xx[i] <= 50 && yy[i] <= 50){
      //   if(move[i] <= 200 && move[i] >= 101){
      //     move[i] = Math.floor(Math.random() * 400);
      //   }else if(move[i] >= 301 && move[i] <= 400)
      //     move[i] = Math.floor(Math.random() * 400);
      // }
    }
  }

//画面表示
  c.beginPath();
  c.clearRect(0, 0, SCWIDTH, SCHEIGHT);

  c.beginPath();
  c.font = "400px 'MS ゴシック'";
  c.fillStyle = "#E6E6E6";
  c.fillText(timecount + "", 1 /5, 300);
  c.fillText(score.toFixed(0) + "", 1, 600);
  c.fillText(bureekicount + "", 1, 900);
  c.fillText("Lv." + level + "", 1, 1200);
  for(var i = 0; i < kosu; ++i){
    c.beginPath();
    if(i == 0){
      c.fillStyle = 'rgb(0, 0, 255)';
      c.arc(xx[i], yy[i], rad[i], 0, Math.PI * 2, false);
      c.fill();
      c.fillStyle = 'rgb(0, 0, 0)';
      ++i;
      c.beginPath();
    }
    if(i == 1){
      c.fillStyle = 'rgb(255, 0, 0)';
      c.arc(xx[i], yy[i], rad[i], 0, Math.PI * 2, false);
      c.fill();
      c.fillStyle = 'rgb(0, 0, 0)';
      ++i;
      c.beginPath();
    }
    if(i == 2){
      c.arc(xx[i], yy[i], rad[i], 0, Math.PI * 2, false);
      c.stroke();
      c.fillStyle = 'rgb(0, 0, 0)';
      ++i;
      c.beginPath();
    }

    c.arc(xx[i], yy[i], rad[i], 0, Math.PI * 2, false);
    c.fill();
  }
  timeFrom = new Date().getTime();
}


//円を作るfunction
function drawCircle(pointX, pointY, rad){
  return function(){
    for(var i = 0; i < kosu; ++i){

      c.beginPath();
      c.arc(pointX[i], pointY[i], rad[i], 0, Math.PI * 2, false);
      c.fill();

    }
  }
}

//リスタート用function
function restart() {
  check = 0;
  touchcheck = 2;
  bureeki = 0.03;
  bureekicount = 0;
  timecount = 0;
  //難易度に関わる設定
  score = 10000;
  timeout = 20;
  kosu += level;
  maxrad = 60;
  minrad = 30 + level * 10;
  losscore = 1.5;
  maxmp = 1 + level /2;
  //ここまで
  move = [0];
  mp = [0];
  for(var i = 0; i < kosu; ++i){
    move[i] = 0;
    mp[i] = 0;
  }
  rad = [0];
  rad[0] = 20;
  rad[1] = 30;
  rad[2] = 40
  for(var i = 3; i < kosu; ++i){
    rad[i] = Math.floor(Math.random() * maxrad) + minrad;
    console.log(rad[i]);
  }
  console.log(rad);
  cofe = 200.0;
  bounce = 1.8;
  xx = [0];
  yy = [0];
  vx = [0];
  vy = [0];

    //玉の座標
    xx[0] = 20;
    yy[0] = 20;
    xx[1] = SCWIDTH - 30;
    yy[1] = SCHEIGHT - 30;
    xx[2] = Math.floor((Math.random() * (SCWIDTH / 5) * 2));
    yy[2] = Math.floor((Math.random() * (SCHEIGHT / 5) * 2));

    for(var i = 3; i < kosu; ++i){
        xx[i] = Math.floor((Math.random() * SCWIDTH));
        yy[i] = Math.floor((Math.random() * SCHEIGHT));
        if(xx[i] <= 200 && yy[i] <= 200){
          i--;
        }else if(xx[i] >= SCWIDTH - 100 && yy[i] >= SCHEIGHT - 100){
          i--;
        }
    }

}
