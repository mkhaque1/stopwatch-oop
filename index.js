function Stopwatch() {
  let startTime = null;
  let running = false;
  let duration = 0;

  this.start = function () {
    if (running) return;
    running = true;
    startTime = Date.now();
  };

  this.stop = function () {
    if (!running) return;
    running = false;
    duration += (Date.now() - startTime) / 1000;
  };

  this.reset = function () {
    startTime = null;
    running = false;
    duration = 0;
  };

  this.getTime = function () {
    if (!running) return duration;
    return duration + (Date.now() - startTime) / 1000;
  };
}

// ✅ create stopwatch object
const sw = new Stopwatch();

let intervalId = null;

// ✅ UI functions
function btnStart() {
  sw.start();

  if (!intervalId) {
    intervalId = setInterval(() => {
      document.querySelector("#time").innerText =
        "Time: " + sw.getTime().toFixed(2) + " s";
    }, 100);
  }
}

function btnStop() {
  sw.stop();
  clearInterval(intervalId);
  intervalId = null;
}

function btnReset() {
  sw.reset();
  clearInterval(intervalId);
  intervalId = null;
  document.querySelector("#time").innerText = "Time: 0.00 s";
}
