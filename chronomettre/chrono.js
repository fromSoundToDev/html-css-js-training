// DOM elements
const startEl = document.getElementById("start");
const resetEl = document.getElementById("reset");
const stopEl = document.getElementById("stop");
const timeEl = document.getElementById("time");

let getMilliseconds = 0;
let getSeconds = 0;
let getMinutes = 0;
let intervalId;

// Function to start the timer
function started() {
    if (intervalId) return; // Prevent multiple intervals
    intervalId = setInterval(processing, 10); // 10 milliseconds for better accuracy
  
}

// Function to reset the timer
function resets() {
    clearInterval(intervalId);
    intervalId = null;
    getMilliseconds = 0;
    getSeconds = 0;
    getMinutes = 0;
    updateDisplay();
}

// Function to stop the timer
function stopped() {
    clearInterval(intervalId);
    intervalId = null;
}

// Function to process the time
function processing() {
    getMilliseconds += 10; // Increment by 10 milliseconds

    if (getMilliseconds >= 1000) {
        getMilliseconds = 0;
        getSeconds++;
    }
    if (getSeconds >= 60) {
        getSeconds = 0;
        getMinutes++;
    }

    updateDisplay();
}

// Function to update the display
function updateDisplay() {
    timeEl.innerText = `${String(getMinutes).padStart(2, '0')} : ${String(getSeconds).padStart(2, '0')} : ${String(getMilliseconds / 10).padStart(2, '0')}`;
}

// Event listeners
startEl.addEventListener('click', started);
resetEl.addEventListener('click', resets);
stopEl.addEventListener('click', stopped);
