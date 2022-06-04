import { Notify } from 'notiflix/build/notiflix-notify-aio';
const refs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  start: document.querySelector('[data-start]'),};

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

refs.start.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

const dateNow = Date.now();
  if(selectedDates[0].getTime() <= dateNow){
      refs.start.disabled = true;
      return Notify.failure("Please choose a date in the future")}

  else { refs.start.disabled = false;
      localStorage.setItem('selectDate', selectedDates[0].getTime() )}
      refs.start.addEventListener('click', timer);
  }
};




flatpickr('#datetime-picker', options);


function timer(){
  const userDATE = localStorage.getItem('selectDate');
  
  
  let result = 1;
  const intervalId = setInterval(()=>{
  const currentTime = Date.now();
  let result = userDATE  - currentTime;
  if(result < 0){
    clearInterval(intervalId)
    return
  }
  const convertResult = convertMs(result);
 
  refs.days.textContent = convertResult.days;
  refs.hours.textContent = convertResult.hours;
  refs.minutes.textContent = convertResult.minutes;
  refs.seconds.textContent = convertResult.seconds;}, 1000)
  
localStorage.removeItem('selectDate')
  
}
function pad(value){
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}