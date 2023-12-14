import Chart from 'chart.js/auto'

const req = new XMLHttpRequest();
req.addEventListener("load", evt => {
    let data = JSON.parse(req.responseText)
    data = data[2].data

    let select1 = document.getElementById("g3solveurs")
    let select2 = document.getElementById("g3problemes")

    let nomsolveur = []
    let nomfamille = []

    data.map((e) => e.name).forEach(element => {
        nomsolveur.find((elt) => elt == element) ? undefined : nomsolveur.push(element)
    });

    console.log(nomsolveur)

    data.map((e) => e.family).forEach(element => {
        nomfamille.find((elt) => elt == element) ? undefined : nomfamille.push(element)
    })

    console.log(nomfamille)

    for(let i = 0; i < nomsolveur.length; i++) {
        let info1 = document.createElement("option")
        info1.value = nomsolveur[i];
        info1.text = nomsolveur[i];
        select1.appendChild(info1)
    }

    // nomsolveur.forEach(elt =>{
    //     let info1 = document.createElement("option")
    //     info1.value = elt
    //     info1.text = elt
    //     select1.appendChild(info1)
    // })


    for(let i = 0; i < nomfamille.length; i++) {
        let info2 = document.createElement("option")
        info2.value = nomfamille[i];
        info2.text = nomfamille[i];
        select2.appendChild(info2)
    }

    // nomfamille.forEach(elt =>{
    //     let info2 = document.createElement("option")
    //     info2.value = elt
    //     info2.text = elt
    //     select2.appendChild(info2)
    // })
    
    




    // const labels = nomfamille;


    // let p = data.map(row => row.fullname)
    // console.log(filtrer)

    (async function (){
      const filtrer = data.filter((elt) => elt.family == select2.value && elt.name == select1.value)
      const labels = filtrer.map(elt=>elt.fullname)
      const dataline = filtrer.map(elt=>elt.time)

      console.log(labels)
      console.log(dataline)

        new Chart(
            document.getElementById('graph3'),
            {
              type: 'line',
              data: {
                labels: labels,
                datasets: [{
                  label: 'Vitesse de résolution du solveur choisi pour le problème choisi',
                  data: dataline,
                }]
              }
            }
          )
          
    })()
})

req.open("GET", "https://www.cril.univ-artois.fr/~lecoutre/teaching/jssae/code5/results.json");
req.send()