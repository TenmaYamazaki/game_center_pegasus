/**
 * 
 */
//ウィンドウが広くなると縦がはみ出て画面外になる
//パグを叩いた後の画像を見る間もなくhiddenになる

var pagura;
var showPoint;
// var random;
var point = 0;
var gameover = false;
var addCount = 0;
var addcheck = 0;
var timelimit = 60000;
var gagecount = timelimit;


getWindowSize();

onload = function(){
  start();
  start2();

};

function start(){
  pagura = document.getElementsByClassName("pag");
  showPoint = document.getElementById("point");
  pagura = Array.from(pagura);


  console.log(pagura.length);
}

function start2(){
  setTimeout(visible(), (Math.random() * 500) + 2500);
  // setTimeout(stop, timelimit);
  // setInterval("timeCount()", 1000);
  setInterval("timegagemove()", 10);
}

function getWindowSize(){
  console.log("ウィンドウの高さ");
  console.log(window.innerHeight);
  windowHeight = window.innerHeight;
}

function changePhoto(){
  var random = Math.floor(Math.random() * pagura.length);
  var photorand = Math.floor(Math.random()*6);
  var addscore = 1;
  if(photorand <= 3){
    pagura[random].src = "/photo/furenti.png";
  }else{
    pagura[random].src = "/photo/mogura.png";
  }
  // console.log("photorand = " + photorand);
  // console.log("photo addscore" + random + " = " + addscore);

  setTimeout(visible(), (Math.random() * 500) + 750)
}

function visible(){

  return function(){
    // console.log("addCount = " + addCount);
    // console.log("visible addscore" + random + " = " + addscore);
    if(gameover == false){

      var check = 0;
      var random = Math.floor(Math.random() * pagura.length);

      if(pagura[random].src == "/photo/furenti.png" || pagura[random].src == "/photo/furenti.png"){
        var addscore = -1;
      }else{
        var addscore = 1;
      }
      console.log(pagura[random].src);
      console.log(addscore);
      // console.log(random);
      pagura[random].style.visibility = "visible";
      pagura[random].ontouchstart = function(){
        if(check == 0){
          pagura[random].src = "/photo/goma.JPG";
          point = point + addscore;
          showPoint.innerHTML = point;
          check = check + 1;
        }
        console.log("point = " + point);
      }
      pagura[random].onclick = function(){
        if(check == 0){
          pagura[random].src = "/photo/goma.JPG";
          point = point + addscore;
          showPoint.innerHTML = point;
          check = check + 1;
        }
        console.log("point = " + point);
      }
      setTimeout(hidden(random), (Math.random() * 500) + 750);
      if(addcheck == 1){
        setTimeout(hidden(random), (Math.random() * 500) + 750);
        addcheck = 0;
      }
    }
  }
}

function hidden(random){
  return function(){
    pagura[random].style.visibility = "hidden";
    pagura[random].src = "/photo/mogura.png";
    if(point >= ((addCount + 1) ** 2) ){

        addPag();
        start();
        addcheck = 1;
    }
    setTimeout(changePhoto(random),1);
  }
}

function stop(){
  gameover = true;
  var name = prompt("ゲームオーバー！！\n点数は" + point + "点です\n" +
                      "プレーヤー名を入力してください。");
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/addrank", true);
  xhr.setRequestHeader("Content-Type", 'application/json');
//  xhr.send("name=aaa");
  const j = { name: name, score: point, gamecode: "pug" };
  xhr.send(JSON.stringify(j));
 }

  if(window.confirm("リトライしますか")) {
    location.href = "/pug/play";
  } else {
    location.href = "/";
    
  }
}

function addPag(){
  addCount += 1;
  add = document.getElementById("add");
    var inPag = "<table id='table' border='2'><div id='narabupag'>";
    var addPag = "<td><div><img class='pag' src='/photo/mogura.png'></div></td>";

    for(var i = 1; i <= ((addCount + 1) ** 2); i += 1){
      if(i % (addCount + 1) == 1){
              inPag += "<tr>";
      }
      inPag += addPag;


      if(i % (addCount + 1) == 0){
        inPag += "</tr>";
      }
    }
    add.innerHTML = inPag + "</div></table>"
}

function timegagemove(){
  if(gameover == false){
    var timegage = document.getElementById("timegage");
    gagecount -= 10;
    // console.log((((60000 - gagecount) / 60000) * 100));
    var rightmargin = ((60000 - gagecount ) / 60000) * 100;
    var rightmarginpars = rightmargin + "%";
    // console.log(rightmarginpars);

    timegage.style.marginRight = rightmarginpars;

    timegage.innerHTML = "　";
    var showtime = document.getElementById("time");
    showtime.innerHTML = "制限時間 : " + Math.floor(gagecount / 1000) + " 秒";
    if(gagecount <= 0){
      stop();
    }
    // console.log(timegage.margin-right);
  }
}