







 document.getElementById("incTime").addEventListener("click", setText);
 
 
     


function setText () {
       document.getElementById("bSec").innerHTML = incNumber();
       
       }
       function incNumber () {
       

              return  parseFloat( document.getElementById("bSec").innerHTML) +1 ;
       }


document.getElementById("minTime").addEventListener("click", setSec);
 
 function setSec () {
       
document.getElementById("bSec").innerHTML = minNumber();
     
     
}

function minNumber () {
       
       return  parseFloat( document.getElementById("bSec").innerHTML) -1 ;

     
}



document.getElementById("incTime-1").addEventListener("click", setWorkMin);
 
 function setWorkMin () {
       document.getElementById("wSec").innerHTML = incNumber();
       
       }
       function incNumber () {
       

              return  parseFloat( document.getElementById("wSec").innerHTML) +1 ;
       }




document.getElementById("minTime-1").addEventListener("click", setWork);
 
 function setWork () {
       
document.getElementById("wSec").innerHTML = minWorkSec();
     
     
}

function minWorkSec () {
       
       return  parseFloat( document.getElementById("wSec").innerHTML) -1 ;
       
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