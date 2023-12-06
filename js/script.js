/* DICHIARAZIONE ARRAY BICI CON NOME E PESO */
let bici = [
    {
        nome : "pino",
        peso : 100
    },
    {
        nome: "piero",
        peso: 120
    },
    {
        nome: "carlo",
        peso: 80
    },
    {
        nome: "enrico",
        peso: 150
    },
    {
        nome: "ciro",
        peso: 60
    }
]

/* DICHIARAZIONE VARIABILE PESO MINIMO */
let pesoMin = bici[0];

/* CICLO FOR PER CONFRONTARE I PESI DELLE BICI */
for (i = 1; i < bici.length; i++){
    if (bici[i].peso < pesoMin.peso){
        pesoMin = bici[i]
    }
    
}
/* DECONSTRUCTURING DELL'ARRAY PESO */
const {peso} = pesoMin
console.log(peso)