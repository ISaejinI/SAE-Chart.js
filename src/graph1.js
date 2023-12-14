import Chart from 'chart.js/auto'

//Insertion des données
const req = new XMLHttpRequest();
let data=null;
req.addEventListener("load", evt => {
    data = JSON.parse(req.responseText);
    console.log(data);


})
req.open("GET", "https://www.cril.univ-artois.fr/~lecoutre/teaching/jssae/code5/results.json");
req.send();











// (async function() {
//     const data = 
// })