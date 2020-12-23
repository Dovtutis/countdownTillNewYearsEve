
const newYears = '1 Jan 2021';
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function countdown() {
    const NewYearsDate = new Date(newYears);
    const currentDate = new Date();
    const wholeSeconds = (NewYearsDate - currentDate) / 1000;

    const days = Math.floor(wholeSeconds / (3600 * 24));
    // const hours = Math.floor((wholeSeconds % (3600 * 24))/3600);
    const hours = Math.floor(wholeSeconds / 3600) % 24;
    // const minutes = Math.floor((wholeSeconds % (3600 * 24))/60)-(hours*60);
    const minutes = Math.floor(wholeSeconds / 60) % 60;
    const seconds = Math.floor(wholeSeconds % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);

countdown();

