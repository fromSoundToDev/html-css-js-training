const inputEl = document.getElementById("input-el");
const kgEl = document.getElementById("toKg");

let pound;

// function to convert element


function convert(e) {
    const weight = e.target.value;
     pound = weight * 2.205;
     pound = pound.toFixed(2);
     kgEl.innerText = pound;
     resetInput()
     
}

// function that that reset after 5s

function resetInput() {
    setTimeout(()=>{
        kgEl.innerText = null;
        inputEl.value=null;
    },5000)
    
}

// adding event
inputEl.addEventListener('input',convert);
