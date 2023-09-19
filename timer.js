const timer = document.querySelector(".timer_time");
const start = document.querySelector(".timer_button_start");
const reset = document.querySelector(".timer_button_reset");
const item = document.createElement("div");
item.classList.add("timer_time_box");

let sec = "00";
let min = "0";
let hours = "0";

const itemTemplate = `
                <div>
                <p>HRS</p>
                <div class="timer_time_display hours">${"0" + hours}</div>
                </div>
            <img src="./img/dot.png">
                <div>
                <p>MIN</p>
                <div class="timer_time_display min">${"0" + min}</div>
                </div>
            <img src="./img/dot.png">
                <div>
                <p>SEC</p>
                <div class="timer_time_display sec">${sec}</div>
                </div>`;
function startTimer() {
  setInterval(function () {
    sec++;

    if (sec === 60) {
      min++;
      sec = 0;
    }
    if (min === 60) {
      hours++;
      min = 0;
    }

    const secDisplay = document.querySelector(".sec");
    const minDisplay = document.querySelector(".min");
    const hoursDisplay = document.querySelector(".hours");
    if (secDisplay) {
      secDisplay.innerText = "0" + sec;
    }
    if (sec >= 10) {
      secDisplay.innerText = sec;
    }
    if (minDisplay) {
      minDisplay.innerText = "0" + min;
    }
    if (min >= 10) {
      minDisplay.innerText = min;
    }
    if (hoursDisplay) {
      hoursDisplay.innerText = "0" + hours;
    }
    if (hours >= 10) {
      hoursDisplay.innerText = hours;
    }
  }, 1000);
}

start.addEventListener("click", () => {
  startTimer();

  start.classList.add("active");
  reset.classList.add("active");
});
item.innerHTML = itemTemplate;
timer.append(item);
