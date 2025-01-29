//une fonction qui retourne lage et le nom

function bienvenue(nom, prenom,annee){
    let age= 2024-annee;
   let salutation= "BIENVENUE  " + nom +" " + prenom + " vous avez " + age + " ans";
   return salutation;
}
console.log(bienvenue("AGALA","honore",2000));