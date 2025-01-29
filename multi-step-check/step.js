// DOM perfoeming

const stepBarEL = document.querySelector(".step-bar");
const stepIconEl = document.querySelectorAll(".step-icon");
const btnEl = document.querySelectorAll(".step-btn")


// creating changeStep functon

const changeStep = ()=>{
    progress()

}

const progress = ()=>{
    stepBarEL.style.backgroundColor = "rgb(54, 54, 248)";
    stepIconEl.add

}

// Adding event lister


btnEl.forEach(btn => {btn.addEventListener('click',changeStep)
    
});

// adding event listner to the step icons

stepIconEl.forEach(icon=>{
    icon.addEventListener("click",changeStep)
});