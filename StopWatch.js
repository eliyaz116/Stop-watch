const minutesLabel = document.getElementById('minutes');
const secondsLabel = document.getElementById('seconds');
const milliSecondsLabel = document.getElementById('milliseconds');

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

const lapList = document.getElementById('laplist');

let minutes=0;
let seconds=0;
let milliseconds=0;
let interval;

startButton.addEventListener('click',startTimer);
stopButton.addEventListener('click',stopTimer);
pauseButton.addEventListener('click',pauseTimer);
resetButton.addEventListener('click',resetTimer);

function startTimer(){
    interval = setInterval(updateTimer,10);
    startButton.disabled=true;

}

function stopTimer(){
    clearInterval(interval);
    addToLapList();
    resetTimerData();
    startButton.disabled=false;
}

function pauseTimer(){
    clearInterval(interval);
    startButton.disabled=false;
}

function resetTimer(){
    clearInterval(interval);
    resetTimerData();
    startButton.disabled=false;

}

function updateTimer(){
    milliseconds++;
    if(milliseconds===100){
        milliseconds=0;
        seconds++;
        if(seconds===60){
            seconds=0;
            minutes++;
        }
    }
    displayTimer();
}

function displayTimer(){
    milliSecondsLabel.textContent=padTimer(milliseconds);
    secondsLabel.textContent=padTimer(seconds);
    minutesLabel.textContent=padTimer(minutes);
}

function padTimer(time){
    return time.toString().padStart(2,'0');
}


function resetTimerData(){
    minutes=0;
    seconds=0;
    milliseconds=0;
    displayTimer();

}

function addToLapList(){
    const LapTime = `${padTimer(minutes)}:${padTimer(seconds)}:${padTimer(milliseconds)}`;

    const listItem = document.createElement('li');

    listItem.innerHTML = `<span>Lap ${lapList.childElementCount +1}: </span>${LapTime}`;

    lapList.appendChild(listItem);
}