
const voiture={
    couleur:"rouge",
    marque :"toyota",
    plaque:"TG-34567"
}

let textFormat="";

for (let propriete in voiture) {
    
   textFormat = textFormat + voiture[propriete] + " ";
    
}

console.log(textFormat);
