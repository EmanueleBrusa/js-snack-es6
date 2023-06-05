//creo un array con le squadre di calcio, punti e falli devono avere "0"
const squadre = [

    {nome: "Torino", puntiFatti: 0, falliSubiti: 0 },

    {nome: "Genoa", puntiFatti: 0, falliSubiti: 0 },

    {nome: "Milan", puntiFatti: 0, falliSubiti: 0 },

    {nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },

    {nome: "Inter", puntiFatti: 0, falliSubiti: 0 },

];


//console.log(squadre);

//creo un forEach per generare i punti fatti e i falli subiti per ogni squadra
squadre.forEach((squadra) => {

    squadra.puntiFatti = Math.floor(Math.random() * 10);

    squadra.falliSubiti = Math.floor(Math.random() * 10);

});

//creo un nuovo array utilizzando la destrutturazione
const squadreNomiFalli = squadre.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));

//stampo a console il risultato finale
console.log(squadreNomiFalli);
