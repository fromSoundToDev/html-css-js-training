// function that capitalize the first letter of each word 

function capitalize_word(mutli_word) {
    let arrayToSentence =" ";
   sentenceToArray =  mutli_word.trim().split(' ');
   sentenceToArray.forEach(element => {
   arrayToSentence += element.charAt(0).toUpperCase()+ element.slice(1) +" ";
   });
   return arrayToSentence
}
console.log(capitalize_word("je suis honore"));