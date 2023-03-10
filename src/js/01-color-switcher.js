function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  } 

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;

startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    if (timerId !== true) {
        startBtn.disabled = true;
        stopBtn.disabled = false;
      }
  });
  
  
  stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
  if (timerId !== true) {
    startBtn.disabled = false;
    stopBtn.disabled = true;
  }
  });