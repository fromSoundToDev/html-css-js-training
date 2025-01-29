const btnEl = document.getElementById('dice-lunch')
const diceEl = document.getElementById('dice')
const listEL = document.querySelectorAll('#list-of-de')



function handleClick() {
    diceEl.classList.add("roll-animation");
    setTimeout(
        ()=> diceEl.classList.remove("roll-animation"),
        1000
    );
   let  randomELement = playDice();
    if (randomELement!==""){
        diceEl.innerHTML=randomELement;
        let index = 0;
       let element =` <li class="face"><span>rol:${index}</span><span class="de">${randomDice()}</span></li>`
            document.listEL.appendChild(element)
        
    }else{
        handleClick();
    }  
}

function playDice() {
    let randomLunch = Math.floor((Math.random() * 7) )
    const selection = randomDice(randomLunch)
    return selection
}

function randomDice(randomLunch) {
    switch (randomLunch) {
        case 1:
            return"&#9856";
            break;
        case 2:
            return"&#9857";
            break;
        case 3:
            return"&#9858";
            break;
        case 4:
            return"&#9859";
            break;
        case 5:
            return"&#9860";
            break;
        case 6:
            return"&#9861";
            break;
        default:
            return"";
            break;
    }
}







btnEl.addEventListener('click',handleClick)