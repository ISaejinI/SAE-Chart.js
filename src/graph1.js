import Chart from 'chart.js/auto'

//Insertion des données
const req = new XMLHttpRequest();
let data = null;
req.addEventListener("load", evt => {
    data = JSON.parse(req.responseText);
    data = data[2].data;


    //Définition des noms des solveurs
    let nmsolv = ['ACE', 'Choco', 'Picat', 'BTD', 'CoSoCo', 'Fun-sCOP-cad', 'Fun-sCOP-glue', 'Mistral', 'Sat4j-cp', 'Sat4j-rs'];

    //Mettre dans un tableau toutes les valeurs où le status est SAT ou UNSAT
    let total = [];
    total = data.filter((test)=> test.status == "SAT" | test.status == "UNSAT");
    nbtot = total.length;


    //Tableau de données à utiliser
    let tabDonut = [];

    //Inserer les lignes du solveur dans le tableau du solveur
    //Pour le solveur ACE
    let ACE = [];
    ACE = total.filter((res)=> res.name == "ACE");
    let ACEtot = ACE.length;
    tabDonut.push(ACEtot);

    //Pour le solveur Choco
    let Choco = [];
    Choco = total.filter((res)=> res.name == "Choco");
    let Chocotot = Choco.length;
    tabDonut.push(Chocotot);

    //Pour le solveur Picat
    let Picat = [];
    Picat = total.filter((res)=> res.name == "Picat");
    let Picattot = Picat.length;
    tabDonut.push(Picattot);
    
    //Pour le solveur BTD
    let BTD = [];
    BTD = total.filter((res)=> res.name == "BTD");
    let BTDtot = BTD.length;
    tabDonut.push(BTDtot);

    //Pour le solveur CoSoCo
    let CoSoCo = [];
    CoSoCo = total.filter((res)=> res.name == "CoSoCo");
    let CoSoCotot = CoSoCo.length;
    tabDonut.push(CoSoCotot);   

    //Pour le solveur Fun_sCOP_cad
    let Fun_sCOP_cad = [];
    Fun_sCOP_cad = total.filter((res)=> res.name == "Fun-sCOP-cad");
    let Fun_sCOP_cadtot = Fun_sCOP_cad.length;
    tabDonut.push(Fun_sCOP_cadtot);

    //Pour le solveur Fun-sCOP-glue
    let Fun_sCOP_glue = [];
    Fun_sCOP_glue = total.filter((res)=> res.name == "Fun-sCOP-glue");
    let Fun_sCOP_gluetot = Fun_sCOP_glue.length;
    tabDonut.push(Fun_sCOP_gluetot);

    //Pour le solveur Mistral
    let Mistral = [];
    Mistral = total.filter((res)=> res.name == "Mistral");
    let Mistraltot = Mistral.length;
    tabDonut.push(Mistraltot);

    //Pour le solveur Sat4j_cp
    let Sat4j_cp = [];
    Sat4j_cp = total.filter((res)=> res.name == "Sat4j-cp");
    let Sat4j_cptot = Sat4j_cp.length;
    tabDonut.push(Sat4j_cptot);

    //Pour le solveur Sat4j_rs
    let Sat4j_rs = [];
    Sat4j_rs = total.filter((res)=> res.name == "Sat4j-rs");
    let Sat4j_rstot = Sat4j_rs.length;
    tabDonut.push(Sat4j_rstot);



    //Construction du graphique
    (async function () {


        //Pour que ça s'affiche en pourcentage
        let tabPourcent = tabDonut.map(v => v*100/nbtot)


        new Chart(
            document.getElementById('graph1'),
            {
                type: 'doughnut',
                data: {
                    labels: nmsolv,
                    datasets: [
                        {
                            label: 'Pourcentage',
                            data: tabPourcent,
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