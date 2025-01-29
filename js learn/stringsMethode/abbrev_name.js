//function that abbrev names

function abbrev_name(names){
let abbreviation = names.trim().split(" ");
console.log(abbreviation);
abbreviation = abbreviation[0] + " " + abbreviation[1].substr(0,1).toUpperCase()+".";
return console.log(abbreviation);
}


abbrev_name(" honore agala ");