const pictureEl = document.getElementById("picture");
const descriptionEl = document.getElementById("mytext");
const nameEl = document.getElementById("theName");

index = 0;

const listeEL = [
    {
        pic:"./image/profile1.jpg",
        desc:"orem ipsum dolor sit amet consectetur adipisicing elit. Nisi fuga officiis, omnis possimus a pariatur soluta illo vero. Reprehenderit alias ex iure, soluta velit vel non ut mollitia architecto quam.",
        nom:"mira bambina"
    },
    {
        pic:"./image/profile2.jpg",
        desc:"orem ipsum dolor sit amet consectetur adipisicing elit. Nisi fuga officiis, omnis ",
        nom:"niky minaj"
    },
    {
        pic:"./image/profile3.jpg",
        desc:"orem ipsum dolor sit amet consectetur adipisicing elit. Nisi fuga officiis, omnis possimus a pariatur soluta illo vero. Reprehenderit ",
        nom:"lord carlos"
    }
] 

//function that execute the slide
slide();

function slide() {

   const {pic,desc,nom} = listeEL[index]
   pictureEl.src = pic;
   descriptionEl.innerText = desc;
   nameEl.innerText = nom;
   index++;

   if (index === listeEL.length) {
    index = 0;
   }

   setTimeout( ()=>{slide()},3000)

}