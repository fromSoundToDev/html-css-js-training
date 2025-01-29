const inputEl = document.getElementById("entrer")
const btnEl = document.querySelectorAll("button")

for (let index = 0; index < btnEl.length; index++) {
    btnEl[index].addEventListener("click",handlClick )
    
}

function handlClick(){
    const btnContent =btnEl[index].textContent;
    if (btnContent==="C") {
         effacer() 
    } else if(btnContent==="=") {
        calcul() 
    }else{
        associeCalcule(btnContent)
    }

}

function effacer() {
    inputEl.value=""
}

function calcul() {
    inputEl.value= eval(inputEl.value)
}

function associeCalcule(btnContent) {
    inputEl.value = inputEl.value + btnContent
}
