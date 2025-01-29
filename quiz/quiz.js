//5 questionnqire 
//si la personnne trouve 3 li passe ausniveu superieur 
// sil trouve 2 il reste au memme niveau 
// la personne  a 2 essai 
// apres ses deux essai sil reussi tjr pas son scor revien a zero 
//on au total 3 niveau de quesionnnaire
//math, culture ,sport 
//sil sort avec >=9 poit in a la medeail de bronze , sil sort avec>= 12 il a largent et
//et sil sort avec =15 il a la medaille dor 
import {q1,q2,q3} from './liste.js'

// declaration des variable pour le dom
try {
    
    console.log(q1.get("l1").length);
    
    const questionEl = document.getElementById("Qestion")
    const reponseEl = document.querySelectorAll("reponse")
} catch (error) {
    
}

//manipulation et affichage des question


