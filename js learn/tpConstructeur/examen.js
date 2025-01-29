class Examen{
    constructor (nomExam, dateExam, centreExam, nombreCandidat) {
        this.nomExam = nomExam,
        this.dateExam = dateExam,
        this.centreExam = centreExam,
        this.nombreCandidat = nombreCandidat
    }
}
const BEPC = new Examen (
    "BEPC", 
    "15 Juin - 18 Juin", 
[

{ nom:"Lycee Agoe",
directeur_centre: "Gogobi",
nombreTotaleCandidat: "5000"
},
{ nom:"Lycee be-kpota",
    directeur_centre: "boss",
    nombreTotaleCandidat: "7050"
    }
]

)
console.log(BEPC.surveillant=78);

BEPC.prototype.dit_bonjour = function (){

}