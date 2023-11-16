// LOGICA FEEDBACK PAGE 
let div = document.querySelector('#stars');
console.log(div);

// JS WELCOME PAGE
const abilita = function(e) {
    let btn = document.getElementById("bottone");
   
    console.log(e.checked);

    if(e.checked == true)
        btn.disabled =  "";
    else 
        btn.disabled = "disabled";
};

//result
let ctx = document.getElementById('donutChart').getContext('2d');
//ombra
const ShadowPlugin = {
  beforeDraw: (chart) => {
    const { ctx } = chart;
    ctx.shadowColor = "black";
    ctx.shadowBlur = 6;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 0;
  },
};
  // variabili da prendere poi dalla question
  let totGiu = 70;
  let totSba = 30;

  // colori per le sezioni del grafico
  let colors = [ '#D20094','#00FFFF'];
  
  // Crea i dati per il grafico
  let data = {
    datasets: [{
    data: [totSba, totGiu],
    backgroundColor: colors,
    borderWidth:0
    }]
  };

  // Crea le opzioni del grafico
  let options = {
    cutout: '70%', // Spessore del grafico
    responsive: true,
    maintainAspectRatio: false
    
  };
  // Crea il grafico a ciambella con l'ausilio dello script chart.js
  let myDonutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options,
    plugins: [ShadowPlugin]
  });

