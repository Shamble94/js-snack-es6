/* SNACK 1 */
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



/* SNACK 2 */
/* ARRAY SQUADRE */
let squadre = [
    {
        nome : "Milan",
        fallisubiti : 0,
        goalsubiti: 0
    },
    {
        nome : "Inter",
        fallisubiti : 0,
        goalsubiti: 0
    },
    {
        nome : "Juventus",
        fallisubiti : 0,
        goalsubiti: 0
    },
    {
        nome : "Napoli",
        fallisubiti : 0,
        goalsubiti: 0
    },
    {
        nome : "Lazio",
        fallisubiti : 0,
        goalsubiti: 0
    }
]
/* FOREACH PER ASSOCIARE ALLE KEY DEI VALORI RANDOMICI */
squadre.forEach((elem) =>{
    elem.fallisubiti = Math.floor(Math.random()* 10 + 1);
    elem.goalsubiti = Math.floor(Math.random()* 10 + 1);
    return elem
})

/* MAP PER STAMPARE SOLO NOME E FALLISUBITI */
const pippo = squadre.map(({ nome, fallisubiti }) => ({nome, fallisubiti}))
console.log(pippo)
