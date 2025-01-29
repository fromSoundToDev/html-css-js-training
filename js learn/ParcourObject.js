//utilisation de for in

const person={
    nom:"honore",
    prenom:"AGALA",
    age:26,
    etude:"informatique"
}
//pour parcour un object avec le boucle
//for in il faut utilser la forme
//p[x]

let text='';
for(let i in person){
    text+=person[i]+ " ";
    
}
//console.log(text);

/*parcour en utilisant le Object.values
ca particularite est quil retourne un array
a la fin */

const monTableau = Object.values(person);
//console.log(monTableau);

/* Object.entries nous permet aussi de parcourir
les objets .ils retourne les propriete en
 couple de array 
 NB:on lutilise avec la boucle for 
 */

 let couple ="";
 for(let [element,valeur] of Object.entries(person) ){
    couple += element + " : "+ valeur + " , "
 }

 console.log(couple);
