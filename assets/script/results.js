//grep delle query strings
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
let domandeTotali = params.domandetotali
let risposteGiuste = params.giuste
let risposteSbagliate = params.sbagliate
let nonRisposte = params.nonrisposte
console.log(domandeTotali, risposteGiuste, risposteSbagliate, nonRisposte)

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
  let totGiu = parseFloat((+risposteGiuste / +domandeTotali) * 100).toFixed(1);
  let totSba = parseFloat(((+risposteSbagliate + +nonRisposte) / +domandeTotali) * 100).toFixed(1);

  // passaggio variabili su html

  let percGiuste = document.getElementById("Correct%");
  percGiuste.innerText = parseFloat((+risposteGiuste / +domandeTotali) * 100).toFixed(1) + '%';

  let percSbagliate = document.getElementById("Wrong%");
  percSbagliate.innerText = parseFloat(((+risposteSbagliate + +nonRisposte) / +domandeTotali) * 100).toFixed(1) + '%';

  let nGiuste = document.getElementById("nCorrette");
  nGiuste.textContent = risposteGiuste +'/'+ domandeTotali + ' questions';
  let nSbagliate = document.getElementById("nSbagliate");
  nSbagliate.textContent = (+risposteSbagliate + +nonRisposte) +'/'+ domandeTotali + ' questions';
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


