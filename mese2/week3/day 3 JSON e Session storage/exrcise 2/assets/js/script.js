window.addEventListener('DOMContentLoaded', startTimer);

var min = 0;
var sec = 0;
var lastSec = sessionStorage.getItem("sec");
var lastMin = sessionStorage.getItem("min");


if(lastSec || lastMin) {
  sec = Number(lastSec)
  min = Number(lastMin)
}

stopwatch = setInterval(startTimer, 1000);

function startTimer() {
  if (sec == 60) {
    sec = 0;
    min++;
  }
  sec++;

  sessionStorage.setItem("sec", sec);
  sessionStorage.setItem("min", min);

  document.getElementById('tempo').innerHTML = `Tempo: ${min} min ${sec} sec`;
}


