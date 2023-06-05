//creo l'arrey di oggetti con nome e peso delle biciclette
const biciDaCorsa = [
    { nome: 'Adriatica', peso: 1.75},
    { nome: 'Bad Bike', peso: 1.97},
    { nome: 'Bellelli', peso: 2.05},
    { nome: 'FM-Bike', peso: 1.55},
    { nome: '3T', peso: 1.60}
];

console.log(biciDaCorsa);

//inizializzo la bici con il peso minore
let biciPesoMinore = biciDaCorsa[0];

//creo una funzione forEach 
biciDaCorsa.forEach((bici) => {

    if (bici.peso < biciPesoMinore.peso) {

        biciPesoMinore = bici

    }

});

const { nome, peso } = biciPesoMinore;

//stampo in console 
console.log(`La bici meno pesante è ${nome}`)