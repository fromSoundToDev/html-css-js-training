const person ={
    age:39,
    prenom:"honore",
    nom:"AGALA",
    metier:'informaticien',
    identite : function(){
        return "je suis" + " "+ this.prenom +" "+ this.nom + "  j'ai  " + this.age + " et je suis "+ this.metier;    }
};

//console.log(person.identite());

// display an object wih for in loop
let valeur=""
for (let x  in person) {
    valeur +=  person[x]+" "
}

//console.log(valeur);

// 2nd manner to display an object with Object.values

const personValues=Object.values(person);
//console.log(personValues);

//display an object content by using Object.entries 

let content = "";

for (const [persons,valeur] of Object.entries(person)) {
    content += persons + " : " + valeur ;
}
//console.log(content);

// parcourir un array

const myArray=["lundi","mardi","mercredi"];

let arrayElement="";

for (let index = 0; index < myArray.length; index++) {
    arrayElement = myArray[index];
   console.log(arrayElement);
};
let arrayContent = "";
myArray.forEach(element => {

    console.log(element);
    
});
// parcourir un objet et un array conjoint

 const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }

  for (let i in myObj.cars) {
    console.log(myObj.cars[i].name);

    for (let j in myObj.cars[i].models) {
        console.log(myObj.cars[i].models[j]);
        }
    }
 var monNom = 'honore';

 monNom
    
  


