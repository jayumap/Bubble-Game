// function to create bubble
function makeBubble() {
  let clutter = "";

  for (let i = 1; i < 177; i++) {
    let nm = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble" onclick="bubbleClick(${nm})">${nm}</div>`;
  }

  document.querySelector(".pbtm").innerHTML = clutter;
}

function startPlaying() {
  document.getElementById("gameInstructions").style.display = "none";
  makeBubble();

  // timer function
  let timer = 60;
  function runTimer() {
    let timerInt = setInterval(function () {
      if (timer > 0) {
        timer--;
        document.querySelector("#timerValue").textContent = timer;
      } else {
        clearInterval(timerInt);
        document.querySelector(".pbtm").innerHTML = `<h1>Game Over 🏁</h1>`;
        document.querySelector(".pbtm").innerHTML += `<button id="reloadButton" onclick="reloadPage()">Play again</button>`;
      }
    }, 1000);
  }
  runTimer();
}

function bubbleClick(clickedNumber) {
  let hitRn = document.querySelector("#hitVal").textContent;
  if (Number(clickedNumber) === Number(hitRn)) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
}

function reloadPage() {
  location.reload();
}

function getNewHit() {
  let hitRn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitRn;
}

let score = 0
function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}
