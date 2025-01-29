const stoneEL = document.getElementById("stone");
const paperEL = document.getElementById("paper");
const cutterEL = document.getElementById("cutter");
const choicesEL = document.getElementById("choices");
const statusEL = document.getElementById("status");
const youEL = document.getElementById("you");
const computerEl = document.getElementById("computer");
const randomChoice1EL = document.getElementById("randomChoice1");
const randomChoice2EL = document.getElementById("randomChoice2");
let compterScor = 0 ;
let myScore = 0 ; 

 

// function that return stone
function returnStone() {
    randomChoice1EL.innerText = "👊";
    let computer=  computerPlay();
    (computer==="👊")? statusEL.innerHTML = "you win":statusEL.innerText = "you Loose";
    (computer === "👊")? youEL.innerText = myScore++ : computerEl.innerText = ++compterScor ;
}
// function that return papper
function returnPaper() {
    randomChoice1EL.innerText = "🤚";
    let computer=  computerPlay();
    (computer==="🤚")? statusEL.innerHTML = "you win":statusEL.innerText = "you Loose";
    (computer === "🤚")? youEL.innerText = myScore++ : computerEl.innerText = ++compterScor ;

}
// function that return cutter
function returnCutter() {
    randomChoice1EL.innerText = "✌️";
  let computer=  computerPlay();
   (computer==="✌️")? statusEL.innerHTML = "you win":statusEL.innerText = "you Loose";
   (computer === "✌️")? youEL.innerText = myScore++ : computerEl.innerText = compterScor++ ;

   
}

//computer play
function computerPlay(){
    const randomChoice = Math.floor((Math.random()*3));
    let computerChoice =      getHand(randomChoice);
    randomChoice2EL.innerText = computerChoice;
    return computerChoice;
}


function getHand(param){
        switch (param) {
            case 0:
                return "👊";
                
            case 1:
                return "🤚";
                
            case 2:
                return "✌️";
              
            default:
                break;
        }
    }

stoneEL.addEventListener("click",returnStone);
paperEL.addEventListener("click",returnPaper);
cutterEL.addEventListener("click",returnCutter);