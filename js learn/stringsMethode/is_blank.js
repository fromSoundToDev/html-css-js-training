//function to check if a string is balnk

function is_blanck(text){
checked_text = text.trim()
let result = (checked_text==="")?true:false;
return console.log(result); 
}

is_blanck('boss');