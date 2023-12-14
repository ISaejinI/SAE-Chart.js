import Chart from 'chart.js/auto'

//Insertion des données
const req = new XMLHttpRequest();
let data = null;
req.addEventListener("load", evt => {
    data = JSON.parse(req.responseText);
    data = data[2].data
    console.log(data);

    //Données fictives
    let tab1 = [50, 42, 8];

    //Pour rechercher le nom d'un truc
    // const total = data.filter((test)=> test.solver_id == 17);
    // console.log(total);

    //Définition des noms des solveurs
    let nmsolv = ['ACE', 'Choco', 'Picat', 'BTD', 'CoSoCo', 'Fun-sCOP-cad', 'Fun-sCOP-glue', 'Mistral', 'Sat4j-cp', 'Sat4j-rs'];

    //Mettre dans un tableau toutes les valeurs où le status est SAT ou UNSAT
    let total = [];
    total = data.filter((test)=> test.status == "SAT" | "UNSAT");
    console.log(total);
    nbtot = total.length;
    console.log(nbtot);


    //Tableau de données à utiliser
    let tabDonut = [];

    //Inserer les lignes du solveur dans le tableau du solveur
    //Pour le solveur ACE
    let ACE = [];
    ACE = total.filter((res)=> res.name == "ACE");
    let ACEtot = ACE.length;
    console.log(ACE);
    console.log(ACEtot);
    tabDonut.push(ACEtot);

    //Pour le solveur Choco
    let Choco = [];
    Choco = total.filter((res)=> res.name == "Choco");
    let Chocotot = Choco.length;
    console.log(Choco);
    console.log(Chocotot);
    tabDonut.push(Chocotot);

    //Pour le solveur Picat
    let Picat = [];
    Picat = total.filter((res)=> res.name == "Picat");
    let Picattot = Picat.length;
    console.log(Picat);
    console.log(Picattot); 
    tabDonut.push(Picattot);
    
    //Pour le solveur BTD
    let BTD = [];
    BTD = total.filter((res)=> res.name == "BTD");
    let BTDtot = BTD.length;
    console.log(BTD);
    console.log(BTDtot);
    tabDonut.push(BTDtot);

    //Pour le solveur CoSoCo
    let CoSoCo = [];
    CoSoCo = total.filter((res)=> res.name == "CoSoCo");
    let CoSoCotot = CoSoCo.length;
    console.log(CoSoCo);
    console.log(CoSoCotot);
    tabDonut.push(CoSoCotot);   

    //Pour le solveur Fun_sCOP_cad
    let Fun_sCOP_cad = [];
    Fun_sCOP_cad = total.filter((res)=> res.name == "Fun-sCOP-cad");
    let Fun_sCOP_cadtot = Fun_sCOP_cad.length;
    console.log(Fun_sCOP_cad);
    console.log(Fun_sCOP_cadtot);
    tabDonut.push(Fun_sCOP_cadtot);

    //Pour le solveur Fun-sCOP-glue
    let Fun_sCOP_glue = [];
    Fun_sCOP_glue = total.filter((res)=> res.name == "Fun-sCOP-glue");
    let Fun_sCOP_gluetot = Fun_sCOP_glue.length;
    console.log(Fun_sCOP_glue);
    console.log(Fun_sCOP_gluetot);
    tabDonut.push(Fun_sCOP_gluetot);

    //Pour le solveur Mistral
    let Mistral = [];
    Mistral = total.filter((res)=> res.name == "Mistral");
    let Mistraltot = Mistral.length;
    console.log(Mistral);
    console.log(Mistraltot);
    tabDonut.push(Mistraltot);

    //Pour le solveur Sat4j_cp
    let Sat4j_cp = [];
    Sat4j_cp = total.filter((res)=> res.name == "Sat4j-cp");
    let Sat4j_cptot = Sat4j_cp.length;
    console.log(Sat4j_cp);
    console.log(Sat4j_cptot);
    tabDonut.push(Sat4j_cptot);

    //Pour le solveur Sat4j_rs
    let Sat4j_rs = [];
    Sat4j_rs = total.filter((res)=> res.name == "Sat4j-rs");
    let Sat4j_rstot = Sat4j_rs.length;
    console.log(Sat4j_rs);
    console.log(Sat4j_rstot);
    tabDonut.push(Sat4j_rstot);




    (async function () {
        new Chart(
            document.getElementById('graph1'),
            {
                type: 'doughnut',
                data: {
                    labels: nmsolv,
                    datasets: [
                        {
                            label: 'Pourcentage',
                            data: tabDonut,
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