import flatpickr from "flatpickr";

import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.getElementById('datetime-picker');
const btnStart = document.querySelector('[data-start]');
const timer = document.querySelector('.timer');

timer.style.marginTop = '30px';
timer.style.display = 'flex';
timer.style.justifyContent = 'center'
timer.style.gap = '30px';
timer.style.width = '400px';

btnStart.disabled = true;
let initialMs = null;
const onesecond = 1000;

function updateCounter(ms) {
    const timeProperties = convertMs(initialMs);
    document.querySelector('[data-days]').textContent = timeProperties.days;
    document.querySelector('[data-hours]').textContent = timeProperties.hours;
    document.querySelector('[data-minutes]').textContent = timeProperties.minutes;
    document.querySelector('[data-seconds]').textContent = timeProperties.seconds;
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
}

btnStart.addEventListener("click", (event) => {
    btnStart.disabled = true;
    const timerId = setInterval(() => {
        initialMs = initialMs - onesecond;
        if (initialMs > onesecond) {
            updateCounter(initialMs);
        } else {
            updateCounter(onesecond);
            clearInterval(timerId);
        }
    }, 1000);
});

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const selectedDate = selectedDates[0];
      const currentDate = new Date();
      if (selectedDate > currentDate) {
        btnStart.disabled = false;
        initialMs = selectedDate - currentDate;
      } else {
        window.alert("Please choose a date in the future");
      }
    },
  };

flatpickr(inputEl, options);




