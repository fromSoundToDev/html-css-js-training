const monTableau = [
    voiture1 = {
        marque:"toyota",
        model:"M56",
        immatriculation:"BLTG22",
        prix:12000000
    },
    voiture2 = {
        marque:"mercedez",
        model:"G500",
        immatriculation:"george TG",
        prix:150000000
    },
    voiture3 = {
        marque:"RAM",
        model:"TRX",
        immatriculation:"BLTG70",
        prix: function(){
            return "la voiture "+this.marque+ " est trop cher pour vous"
        }
    }
]

console.log(monTableau[2].prix());