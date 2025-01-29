let vewTimerEl = document.getElementById("vewTimer");
const startEl = document.getElementById("btn-bleu");
const resetEl = document.getElementById("btn-white");
const stopEl = document.getElementById("btn-red");
let minutes = 25;
let seconde = 0;
let intervalId = 0;

// function that trigger start


function start() {
intervalId =setInterval(() => { 
vewTimerEl.innerText = (minutes===0)?"00:00":solveSecond();
}, 1000);
}


// function that trigger reset

function reset() {
    minutes=25;
    seconde=0;
    vewTimerEl.innerText = "00 : 00";
    clearInterval(intervalId);
}

// fuction that trigger stop

function stop() {
    vewTimerEl.innerText = solveSecond();
    clearInterval(intervalId)
}

// fuction that create time

function solveSecond() {
    if (seconde === 0) {
        minutes--;
        seconde = 59;
    } else {
        seconde--;
    }
    return `${minutes} : ${seconde}`
}

startEl.addEventListener("click",start);
resetEl.addEventListener("click",reset);
stopEl.addEventListener("click",stop)
