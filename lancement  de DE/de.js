const btnEl = document.getElementById('dice-lunch')
const diceEl = document.getElementById('dice')

function handleClick() {
    diceEl.classList.add("roll-animation");
    setTimeout(
        ()=> diceEl.classList.remove("roll-animation"),
        1000
    )
    
}





btnEl.addEventListener('click',handleClick)