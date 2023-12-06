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

let pesoMin = bici[0];
/* const [peso] = bici; */
for (i = 1; i < bici.length; i++){
    if (bici[i].peso < pesoMin.peso){
        pesoMin = bici[i]
    }
    
}
const {peso} = pesoMin
console.log(peso)