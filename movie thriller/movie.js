const videoEl = document.querySelector("#videoContainer");
const btnEL = document.getElementById("btn");
const imageEl = document.querySelector("#willChange");
const iconEl = document.getElementById("iconImage");


 imageEl.style.visibility = 'visible'
 videoEl.style.visibility = 'hidden'

function displayContent() {
    if ( imageEl.style.visibility ) {
         imageEl.style.visibility ='hidden';
         videoEl.style.visibility = 'visible'

    }else{
          iconEl.style.visibility ='visible';
        imageEl.style.visibility = 'hidden'
    }      
}

function displayIcon() {
    if ( videoEl.style.visibility ) {
        videoEl.style.visibility ='hidden';
        imageEl.style.visibility = 'visible'

   }else{
       imageEl.style.visibility ='hidden';
         videoEl.style.visibility = 'visible'
   } 
}








btnEL.addEventListener('click', displayContent)
iconEl.addEventListener('click', displayIcon)

