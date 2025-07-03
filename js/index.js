const digitClock = document.querySelector('.digit-clock');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const secHand = document.querySelector('.sec-hand');


function updateTime(){
    let now = new Date();
    let secs = now.getSeconds();
    let mins = now.getMinutes();
    let hours = now.getHours();

    // градусы для стрелок
    let hourDeg =( (hours / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    let secDeg = ((secs / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secDeg}deg)`;
    let minDeg = ((mins / 60) * 360) + ((secs / 60) * 6) + 90;
    minHand.style.transform = `rotate(${minDeg}deg)`;

    let time = `${String(hours).padStart(2,'0')}:${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
    digitClock.innerHTML = time;
}

updateTime();
let interval = setInterval(updateTime,1000);