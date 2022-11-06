
var start = document.getElementById("startButton");
var stop = document.getElementById("stopButton");
var reset = document.getElementById("resetButton");

var wm = document.getElementById("wMin");
var ws = document.getElementById("wSec");

var bm = document.getElementById("bMin");
var bs = document.getElementById("bSec");


var startTimer;

start.addEventListener('click',function() {
       if (startTimer ===undefined) {
              startTimer = setInterval(timer,1000)
       }
       else {
              alert("Timer is already running")
       }
})

function timer(){
       if (ws.innerText != 0 ) {
              ws.innerText--; 
       }
       else if (wm.innerText != 0 && ws.innerText == 0 ) {
              ws.innerText = 59;
              wm.innerText--;
       }

       if (wm.innerText == 0 && ws.innerText == 0) {
              if (bs.innerText != 0){
                     bs.innerText--;
              }
              else if (bm.innerText != 0 && bs.innerText == 0 ) {
                     bs.innerText = 59;
                     bm.innerText--;
       }

       if (wm.innerText ==0 && ws.innerText ==0 && bm.innerText ==0 && bs.innerText ==0 ) {
              wm.innerText =25;
              ws.innerText =00;
              bm.innerText=5;
              bs.innerText=00;
               document.getElementById("demo").innerText++;      
       }
       }}


       reset.addEventListener('click', function() {
              wm.innerText =25;
              ws.innerText ="00";
              bm.innerText=5;
              bs.innerText="00";

              stopInterval();
              startTimer =undefined
       })


       stop.addEventListener('click', function() {
              stopInterval();
              startTimer =undefined
       }
       )

       function stopInterval () {
              clearInterval(startTimer);
       }









       
 /*document.getElementById("incTime").addEventListener("click", setText);
 
 function setText () {
       document.getElementById("bMin").innerHTML = incNumber();
       
       }

function incNumber () {
       
              return  parseFloat( document.getElementById("bMin").innerHTML) +1 ;
       }


document.getElementById("minTime").addEventListener("click", setSec);
 
function setSec () {
       
document.getElementById("bMin").innerHTML = minNumber();
       
}

function minNumber () {
       
       return  parseFloat( document.getElementById("bMin").innerHTML) -1 ;
}


document.getElementById("incTime-1").addEventListener("click", setWorkMin);
 
 function setWorkMin () {
       document.getElementById("wMin").innerHTML = incNumber();
       
       }
       function incNumber () {
       

              return  parseFloat( document.getElementById("wMin").innerHTML) +1 ;
       }

document.getElementById("minTime-1").addEventListener("click", setWork);
 
 function setWork () {
       
document.getElementById("wMin").innerHTML = minWorkSec();
     
}

function minWorkSec () {
       
       return  parseFloat( document.getElementById("wMin").innerHTML) -1 ;
       
}

document.getElementById("startButton").addEventListener("click", startTime);

var min=24;
var sec=59;
function startTime () {
      
       function updateTime () {
       if (sec>0) {
              sec--;
       
       }
       else  if (min>0){
                     min--;
                     sec=59;
              }
       

              document.getElementById("demo").innerHTML = min + ":" +sec;
};

updateTime();

setInterval(updateTime,1000);


}

document.getElementById("pauseButton").addEventListener("click", pauseTime);

function pauseTime (){
       clearInterval( updateTime);
}
*/