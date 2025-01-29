// la methode lenght des strings

let maSalutation = 'bonjour eli ';
let longueur = maSalutation.length;
let addition = longueur + 3;
console.log(addition);

let position = maSalutation.at(-2);
console.log(position);

console.log(maSalutation.slice(1,4)); 

let parLettre = maSalutation.trim().split('');
let parMot = maSalutation.trim().split(' ');

console.log(parLettre);
console.log(parMot);