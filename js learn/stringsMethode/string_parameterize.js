// function that parametize string

function string_parameterize(texte){
const splited = texte.trim().split(' ');
const index = splited.length;
let result='';

for (let i = 0; i < index; i++) {
   if (i!=index-1) {
    splited[i] +='_';
   } 
   result+=splited[i];  
}
return console.log(result);
}
string_parameterize(" acacia kpodzro eli george")