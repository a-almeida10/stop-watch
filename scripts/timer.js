//Add event lsiteners to each button
const start = document.getElementById("btn-start");
start.addEventListener("click", startTimer);

const pause = document.getElementById("btn-pause");
pause.addEventListener("click", stopTimer);

const reset = document.getElementById("btn-reset");
reset.addEventListener("click", resetTimer);

//gets the time string
const timeElement = document.querySelector("#time");

//receives the seconds
let counter = 0;
let interval = null;

//Updates the timer
function timer() {
  counter++;

  //Format our time
  let hours = Math.floor(counter / 3600);
  let minutes = Math.floor((counter - hours * 3600) / 60);
  let seconds = counter % 60;

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  timeElement.innerText = `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
  if (interval) {
    return;
  }
  interval = setInterval(timer, 1000);
}
function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  stopTimer();
  counter = 0;
  timeElement.innerText = "00:00:00";
}
