//function to check if it is a string

function is_string(texte) {
    checked_text= typeof texte;
    let verdict = (checked_text==="String") ?true:false;
    return console.log(verdict);
}
is_string('honore')