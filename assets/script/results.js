//grep delle query strings
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
let domandeTotali = params.domandetotali
let risposteGiuste = params.giuste
let risposteSbagliate = params.sbagliate
let nonRisposte = params.nonrisposte
let CenterTextPlugin;
console.log(domandeTotali, risposteGiuste, risposteSbagliate, nonRisposte)

function creazioneMessaggio() {
  if ((+risposteGiuste / +domandeTotali) * 100 >= 60) {
     CenterTextPlugin = {
      afterDraw: (chart) => {
        let ctx = chart.ctx;
        ctx.save();
    
        // Proprietà del testo
        const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
        const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
        ctx.font = 'bold 20px Inter';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'white';
    
        // Testi da visualizzare
        ctx.fillText('Congratulations!', centerX, centerY - 80);
        ctx.font = 'bold 20px Inter';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#00FFFF';
        ctx.fillText('You passed the exam.', centerX, centerY -50);
        ctx.font = '200 18px Inter';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'white';
        ctx.fillText("We will send you the certificate", centerX, centerY +10);
        ctx.fillText("in few minutes.", centerX, centerY + 30);
        ctx.fillText('Check your email!', centerX, centerY + 70);
    
        ctx.restore();
      }
    };  
  } else {
      CenterTextPlugin = {
      afterDraw: (chart) => {
        let ctx = chart.ctx;
        ctx.save();
    
        // Proprietà del testo
        const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
        const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
        ctx.font = 'bold 20px Inter';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'white';
    
        // Testi da visualizzare
        ctx.fillText('Failed!', centerX, centerY - 80);
        ctx.font = 'bold 20px Inter';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'red';
        ctx.fillText("You didn't pass the exam", centerX, centerY -50);
        ctx.font = '200 18px Inter';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'white';
        ctx.fillText("Umberto awaits you", centerX, centerY +10);
        ctx.fillText("in his room.", centerX, centerY + 30);
        ctx.fillText('Good Luck!', centerX, centerY + 70);
    
        ctx.restore();
      }
    };
  }
}


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

creazioneMessaggio()




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
    plugins: [ShadowPlugin, CenterTextPlugin]
  });

//Creazione messaggio centrale Torta


