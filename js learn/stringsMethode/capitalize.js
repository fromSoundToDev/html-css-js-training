// function that capitalize the first letter 


function capitalize(texte) {
  texteToArray = texte.trim().split(' ');
 let firstElement = texteToArray.slice(0,1);
 secondElement = texteToArray.slice(1) ;
let firstPosition = firstElement[0].split('');
firstPosition[0] = firstPosition[0].toUpperCase();
return firstPosition.join('') +" "+ secondElement.join(" ")
}

// meilleur code 

function capitalize2(text2){
   text2.charAt(0).toUpperCase() + text2.slice(1)
}
console.log(capitalize('un ballon rouge'));