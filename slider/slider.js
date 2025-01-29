//getting image and descriptions

const descriptionEL = document.getElementById("desc");
const imageEl = document.getElementById("profile");
const nameEl = document.getElementById("leNom");


//description and image liste
const list = [
    {
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit Consectetur dicta nisi ea delectus quam soluta placeat maiores  consequatur id eveniet Saepe aliquam ad unde temporibus ut expeditaquia nemo asperiores", 
        pic:"./images/profile1.jpg",
        nom: "lina"
    },
    {
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit Consectetur dicta nisi ea delectus quam soluta placeat maiores  consequatur id eveniet Saepe aliquam ad unde temporibus ut expeditaquia nemo asperiores", 
        pic:"./images/profile2.jpg",
        nom: "brenda"
    },
    {
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit Consectetur dicta nisi ea delectus quam soluta placeat maiores  consequatur id eveniet Saepe aliquam ad unde temporibus ut expeditaquia nemo asperiores", 
        pic:"./images/profile3.jpg",
        nom: "jule"
    }
] 

let index = 0 ;
slide();

function slide() {
    const {description,pic,nom } = list[index];

    descriptionEL.innerText = description;
    imageEl.src = pic;
    nameEl.innerText = nom;
    index++;

    if (index===list.length) {
        index=0
    }
    setTimeout(slide,3000)
   

}




