import Chart from 'chart.js/auto'

let line

const req = new XMLHttpRequest();
req.addEventListener("load", evt => {
    let data = JSON.parse(req.responseText)
    data = data[2].data

    let select1 = document.getElementById("g3solveurs")   // je selectionne mes deux select
    let select2 = document.getElementById("g3problemes")

    let nomsolveur = [] // j'initialise mes 2 tableau vide qui sera composé des nom de solveur pour le premier select et le deuxième select pour les nom family
    let nomfamille = []

    data.map((e) => e.name).forEach(element => {  //push dans le tableau tout les noms de solveur en 1 seul exemplaire
        nomsolveur.find((elt) => elt == element) ? undefined : nomsolveur.push(element)
    });

    console.log(nomsolveur)

    data.map((e) => e.family).forEach(element => {  //push dans le tableau tout les noms de family en 1 seul exemplaire
        nomfamille.find((elt) => elt == element) ? undefined : nomfamille.push(element)
    })

    console.log(nomfamille)

    for(let i = 0; i < nomsolveur.length; i++) {    // met dans le select1 les valeurs de chaque nom de solveur
        let info1 = document.createElement("option")
        info1.value = nomsolveur[i];
        info1.text = nomsolveur[i];
        select1.appendChild(info1)
    }


    for(let i = 0; i < nomfamille.length; i++) {  // met dans le select2 les valeurs de chaque nom de family
        let info2 = document.createElement("option")
        info2.value = nomfamille[i];
        info2.text = nomfamille[i];
        select2.appendChild(info2)
    }
    
    
    
    (async function (){
      
      selectedSolver = select1.value  // met la valeur de select1.value dans selectedSolver
      selectedProblem = select2.value // met la valeur de select2.value dans selectedSProblem
      
      select1.addEventListener('change',() =>  {    // ajoute un ecouteur sur select1 et recupère la valeur pour le mettre dans selectedSolver
        selectedSolver = select1.value
        console.log(selectedSolver)
      })
      select2.addEventListener('change', () => {    // ajoute un ecouteur sur select2 et recupère la valeur pour le mettre dans selectedProblem     
        selectedProblem = select2.value
        console.log(selectedProblem)
      })

      const filtrer = data.filter((elt) => elt.family == selectedProblem && elt.name == selectedSolver) // filtre l'element pour n'avoir au final que la family selectionne et le name du solveur selectionne
      console.log(filtrer)
      const labels = filtrer.map(elt=>elt.fullname) // donne la liste fullname de l'element pour l'utiliser dans le label en bas du graph
      console.log(labels)
      const dataline = filtrer.map(elt=>elt.time)   // donne la liste des temps de l'element pour l'utiliser dans le data

      console.log(labels)
      console.log(dataline)
      if(Chart.getChart(document.getElementById('graph3'))!=undefined){ // si un chart existe déjà on le supprime sinon on le recharge en dessous du if
        Chart.getChart(document.getElementById('graph3')).destroy();
      }
      line = new Chart(
            document.getElementById('graph3'),
            {
              type: 'line',
              data: {
                labels: labels,
                datasets: [{
                  label: selectedSolver,
                  data: dataline,
                }]
              }
            }
          )
          
    })()
})

req.open("GET", "https://www.cril.univ-artois.fr/~lecoutre/teaching/jssae/code5/results.json");
req.send()