//creer un objet livre avec les propiete , titre,auteur , isbn,categorie

const monLivre = {

    titre: "Qui est tu?",
    Auteur:"rev Ock SOO",
    ISBN: "TG34567h",
    categorie:["roman","nouvelle","essaie","poesie"]

}

//affichage avc la boucle for

for(let element in monLivre){
    console.log(monLivre[element]);
}

//afficher lauteur 

console.log(monLivre.Auteur);

//afficher la categorie nouvelle

console.log(monLivre.categorie[1]);

// ajoute a lobjet monLivre la propriete bestSeller qui sera de type boolean

console.log(monLivre.bestSeller=[true,false]);
//ajouter la propriete prix a au lobjet monLivre 

console.log(monLivre.prix=4000);

// supprimer la propriete auteur

delete monLivre.Auteur;