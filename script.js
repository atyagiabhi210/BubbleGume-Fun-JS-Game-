function makeBubble() {
  var clutter = "";
  for (var i = 1; i < 150; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pannel_bottom").innerHTML = clutter;
}
function runTimer() {
  var timerInterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerValue").textContent = timer;
    } else {
      clearInterval(timerInterval);
      document.querySelector("#pannel_bottom").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}
var timer = 60;
function getNewHit() {
  var rn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = rn;
}
var score = 0;
function increaseScore() {
  score += 10;
  document.querySelector("#scoreValue").textContent = score;
}
//increaseScore();
document
  .querySelector("#pannel_bottom")
  .addEventListener("click", function (details) {
    if (
      details.target.textContent ==
      document.querySelector("#hitVal").textContent
    ) {
      increaseScore();
      getNewHit();
      makeBubble();
    }
    console.log(details.target.textContent);
  });
getNewHit();
makeBubble();
runTimer();
