import Chart from 'chart.js/auto'

//Insertion des données
const req = new XMLHttpRequest();
let data = null;
req.addEventListener("load", evt => {
    data = JSON.parse(req.responseText);
    data = data[2].data;

    let nmsolv = ['ACE', 'Choco', 'Picat', 'BTD', 'CoSoCo', 'Fun-sCOP-cad', 'Fun-sCOP-glue', 'Mistral', 'Sat4j-cp', 'Sat4j-rs'];

    let total = [];
    total = data.filter((test) => test.status == "SAT" | test.status == "UNSAT");
    nbtot = total.length;


    (async function () {
        //Trouver la valeur moyenne du tableau
        function moyenneTab(tablo) {
            let vcumul = 0;
            tablo.forEach(e => {
                vcumul += parseInt(e.time);
            });
            console.log(vcumul)
            let h = tablo.length;
            return vcumul / h;
        }


        let allmoy = [];
        let allmax = [];
        let allmin = [];

        let ACE = [];
        ACE = total.filter((res) => res.name == "ACE");
        let ACEtot = ACE.length;
        //Récupération du temps le plus court, moyen et le plus long
        let ACEmoy = moyenneTab(ACE);
        allmoy.push(ACEmoy);
        let tabACEmin = ACE.map(e => parseInt(e.time));
        let ACEmin = Math.min(...tabACEmin);
        allmin.push(ACEmin);
        let tabACEmax = ACE.map(e => parseInt(e.time));
        let ACEmax = Math.max(...tabACEmax);
        allmax.push(ACEmax);
        console.log(ACEmax);

        let Choco = [];
        Choco = total.filter((res) => res.name == "Choco");
        let Chocotot = Choco.length;
        //Récupération du temps le plus court, moyen et le plus long
        let Chocomoy = moyenneTab(Choco);
        allmoy.push(Chocomoy);
        let tabChocomin = Choco.map(e => parseInt(e.time));
        let Chocomin = Math.min(...tabChocomin);
        allmin.push(Chocomin);
        let tabChocomax = Choco.map(e => parseInt(e.time));
        let Chocomax = Math.max(...tabChocomax);
        allmax.push(Chocomax);
        console.log(Chocomax);

        let Picat = [];
        Picat = total.filter((res) => res.name == "Picat");
        let Picattot = Picat.length;
        //Récupération du temps le plus court, moyen et le plus long
        let Picatmoy = moyenneTab(Picat);
        allmoy.push(Picatmoy);
        let tabPicatmin = Picat.map(e => parseInt(e.time));
        let Picatmin = Math.min(...tabPicatmin);
        allmin.push(Picatmin);
        let tabPicatmax = Picat.map(e => parseInt(e.time));
        let Picatmax = Math.max(...tabPicatmax);
        allmax.push(Picatmax);
        console.log(Picatmax);

        let BTD = [];
        BTD = total.filter((res) => res.name == "BTD");
        let BTDtot = BTD.length;
        //Récupération du temps le plus court, moyen et le plus long
        let BTDmoy = moyenneTab(BTD);
        allmoy.push(BTDmoy);
        let tabBTDmin = BTD.map(e => parseInt(e.time));
        let BTDmin = Math.min(...tabBTDmin);
        allmin.push(BTDmin);
        let tabBTDmax = BTD.map(e => parseInt(e.time));
        let BTDmax = Math.max(...tabBTDmax);
        allmax.push(BTDmax);
        console.log(BTDmax);

        let CoSoCo = [];
        CoSoCo = total.filter((res) => res.name == "CoSoCo");
        let CoSoCotot = CoSoCo.length;
        //Récupération du temps le plus court, moyen et le plus long
        let CoSoComoy = moyenneTab(CoSoCo);
        allmoy.push(CoSoComoy);
        let tabCoSoComin = CoSoCo.map(e => parseInt(e.time));
        let CoSoComin = Math.min(...tabCoSoComin);
        allmin.push(CoSoComin);
        let tabCoSoComax = CoSoCo.map(e => parseInt(e.time));
        let CoSoComax = Math.max(...tabCoSoComax);
        allmax.push(CoSoComax);
        console.log(CoSoComax);

        let Fun_sCOP_cad = [];
        Fun_sCOP_cad = total.filter((res) => res.name == "Fun-sCOP-cad");
        let Fun_sCOP_cadtot = Fun_sCOP_cad.length;
        //Récupération du temps le plus court, moyen et le plus long
        let Fun_sCOP_cadmoy = moyenneTab(Fun_sCOP_cad);
        allmoy.push(Fun_sCOP_cadmoy);
        let tabFun_sCOP_cadmin = Fun_sCOP_cad.map(e => parseInt(e.time));
        let Fun_sCOP_cadmin = Math.min(...tabFun_sCOP_cadmin);
        allmin.push(Fun_sCOP_cadmin);
        let tabFun_sCOP_cadmax = Fun_sCOP_cad.map(e => parseInt(e.time));
        let Fun_sCOP_cadmax = Math.max(...tabFun_sCOP_cadmax);
        allmax.push(Fun_sCOP_cadmax);
        console.log(Fun_sCOP_cadmax);

        let Fun_sCOP_glue = [];
        Fun_sCOP_glue = total.filter((res) => res.name == "Fun-sCOP-glue");
        let Fun_sCOP_gluetot = Fun_sCOP_glue.length;
        //Récupération du temps le plus court, moyen et le plus long
        let Fun_sCOP_gluemoy = moyenneTab(Fun_sCOP_glue);
        allmoy.push(Fun_sCOP_gluemoy);
        let tabFun_sCOP_gluemin = Fun_sCOP_glue.map(e => parseInt(e.time));
        let Fun_sCOP_gluemin = Math.min(...tabFun_sCOP_gluemin);
        allmin.push(Fun_sCOP_gluemin);
        let tabFun_sCOP_gluemax = Fun_sCOP_glue.map(e => parseInt(e.time));
        let Fun_sCOP_gluemax = Math.max(...tabFun_sCOP_gluemax);
        allmax.push(Fun_sCOP_gluemax);
        console.log(Fun_sCOP_gluemax);

        let Mistral = [];
        Mistral = total.filter((res) => res.name == "Mistral");
        let Mistraltot = Mistral.length;
        //Récupération du temps le plus court, moyen et le plus long
        let Mistralmoy = moyenneTab(Mistral);
        allmoy.push(Mistralmoy);
        let tabMistralmin = Mistral.map(e => parseInt(e.time));
        let Mistralmin = Math.min(...tabMistralmin);
        allmin.push(Mistralmin);
        let tabMistralmax = Mistral.map(e => parseInt(e.time));
        let Mistralmax = Math.max(...tabMistralmax);
        allmax.push(Mistralmax);
        console.log(Mistralmax);

        let Sat4j_cp = [];
        Sat4j_cp = total.filter((res) => res.name == "Sat4j-cp");
        let Sat4j_cptot = Sat4j_cp.length;
        //Récupération du temps le plus court, moyen et le plus long
        let Sat4j_cpmoy = moyenneTab(Sat4j_cp);
        allmoy.push(Sat4j_cpmoy);
        let tabSat4j_cpmin = Sat4j_cp.map(e => parseInt(e.time));
        let Sat4j_cpmin = Math.min(...tabSat4j_cpmin);
        allmin.push(Sat4j_cpmin);
        let tabSat4j_cpmax = Sat4j_cp.map(e => parseInt(e.time));
        let Sat4j_cpmax = Math.max(...tabSat4j_cpmax);
        allmax.push(Sat4j_cpmax);
        console.log(Sat4j_cpmax);

        let Sat4j_rs = [];
        Sat4j_rs = total.filter((res) => res.name == "Sat4j-rs");
        let Sat4j_rstot = Sat4j_rs.length;
        //Récupération du temps le plus court, moyen et le plus long
        let Sat4j_rsmoy = moyenneTab(Sat4j_rs);
        allmoy.push(Sat4j_rsmoy);
        let tabSat4j_rsmin = Sat4j_rs.map(e => parseInt(e.time));
        let Sat4j_rsmin = Math.min(...tabSat4j_rsmin);
        allmin.push(Sat4j_rsmin);
        let tabSat4j_rsmax = Sat4j_rs.map(e => parseInt(e.time));
        let Sat4j_rsmax = Math.max(...tabSat4j_rsmax);
        allmax.push(Sat4j_rsmax);
        console.log(Sat4j_rsmax);




        new Chart(
            document.getElementById('graph2'),
            {
                type: 'bar',
                data: {
                    labels: nmsolv,
                    datasets: [{
                        label: 'Temps le plus court',
                        backgroundColor: "green",
                        data: allmin,
                    }, {
                        label: 'Temps moyen',
                        backgroundColor: "orange",
                        data: allmoy,
                    }, {
                        label: 'Temps le plus long',
                        backgroundColor: "red",
                        data: allmax,
                    }],
                },
                options: {
                    plugins: {
                        title: {
                            display: false,
                        },
                    },
                    scales: {
                        x: {
                            stacked: true,
                        },
                        y: {
                            stacked: true,
                        }
                    }
                }
            }
        )

    })()


})
req.open("GET", "https://www.cril.univ-artois.fr/~lecoutre/teaching/jssae/code5/results.json");
req.send();