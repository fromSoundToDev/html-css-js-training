//function that protect mail

function protect_email(texte){
    let part1,part2,splited;
   
    splited = texte.split("@");
    console.log(splited);
    part1=splited[0];
    part2=splited[1];
    let avg =part1.substring(0,(part1.length/2)-1);
    let new_mail= avg+"...@"+part2
    return console.log(new_mail);
}

protect_email('agalahonore27@gmail.com');