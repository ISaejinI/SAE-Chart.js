import Chart from 'chart.js/auto'

//Insertion des données
const req = new XMLHttpRequest();
let data = null;
req.addEventListener("load", evt => {
    data = JSON.parse(req.responseText);
    data = data[2].data
    console.log(data);


    let tab1 = [50, 42, 8];
    //Pour rechercher le nom d'un truc
    // const total = data.filter((test)=> test.solver_id == 17);
    // console.log(total);


    (async function () {
        new Chart(
            document.getElementById('graph1'),
            {
                type: 'doughnut',
                data: {
                    labels: ['ACE', 'Choco', 'Picat', 'BTD', 'CoSoCo', 'Fun-sCOP-cad', 'Fun-sCOP-glue', 'Mistral', 'Sat4j-cp', 'Sat4j-rs'],
                    datasets: [
                        {
                            label: 'Pourcentage',
                            data: tab1,
                        }
                    ]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'right',
                        },
                        title: {
                            display: false,
                        }
                    }
                },
            }

        )
    })()




})
req.open("GET", "https://www.cril.univ-artois.fr/~lecoutre/teaching/jssae/code5/results.json");
req.send();