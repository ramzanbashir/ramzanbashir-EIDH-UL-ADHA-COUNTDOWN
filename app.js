// Set the target date for Eid ul Adha
const TARGET_DATE = new Date('2024-06-28T00:00:00.000Z');

// Get the current date and time
const currentDate = new Date();

// Calculate the difference between the target date and the current date
const difference = TARGET_DATE.getTime() - currentDate.getTime();

// Calculate the remaining months, days, hours, minutes, seconds, and nanoseconds
const remainingMonths = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
const remainingDays = Math.floor(difference / (1000 * 60 * 60 * 24)) % 30;
const remainingHours = Math.floor(difference / (1000 * 60 * 60)) % 24;
const remainingMinutes = Math.floor(difference / (1000 * 60)) % 60;
const remainingSeconds = Math.floor(difference / 1000) % 60;
const remainingNanoseconds = difference % 1000;

// Update the countdown timer
updateCountdownTimer(remainingMonths, remainingDays, remainingHours, remainingMinutes, remainingSeconds, remainingNanoseconds);

// Update the countdown timer every second
setInterval(() => {
  const currentDate = new Date();
  const difference = TARGET_DATE.getTime() - currentDate.getTime();
  const remainingMonths = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
  const remainingDays = Math.floor(difference / (1000 * 60 * 60 * 24)) % 30;
  const remainingHours = Math.floor(difference / (1000 * 60 * 60)) % 24;
  const remainingMinutes = Math.floor(difference / (1000 * 60)) % 60;
  const remainingSeconds = Math.floor(difference / 1000) % 60;
  const remainingNanoseconds = difference % 1000;
  updateCountdownTimer(remainingMonths, remainingDays, remainingHours, remainingMinutes, remainingSeconds, remainingNanoseconds);
}, 1000);

// Update the countdown timer
function updateCountdownTimer(months, days, hours, minutes, seconds, nanoseconds) {
  document.getElementById('months').innerHTML = months;
  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;
  document.getElementById('nanoseconds').innerHTML = nanoseconds;
}