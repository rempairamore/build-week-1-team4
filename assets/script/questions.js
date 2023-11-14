// Variabili globali
let questionNumber = 1;
let giuste = 0;
let sbagliate = 0;
let divDomanda = document.querySelector('#domanda')
let divRisposte = document.querySelector('#risposte')

//Richiamo funzioni
bottonePartenza()


//Array domande
let domande = [
    {
        id: 1,
        type: 'crocetta',
        title: 'Quanti anni ci vogliono per imparare il CSS?',
        correctAnswers: 'Nessuna delle precedenti',
        other1: 'millemila anni',
        other2: 'pochi mesi',
        other3: 'svariati anni',
    },
    {
        id: 2,
        type: 'booleano',
        title: 'Epicode è la migliore Accademia Europea?',
        correctAnswers: 'SI',
        other1: 'NO',
    },
    {
        id: 3,
        type: 'crocetta',
        title: 'Quanti elementi posso assegnare ad una Classe CSS?',
        correctAnswers: 'infiniti',
        other1: '5',
        other2: '1',
        other3: '33',
    },
    {
        id: 4,
        type: 'booleano',
        title: 'HTML è un linguaggio di programmazione?',
        correctAnswers: 'NO',
        other1: 'SI',
    },
    {
        id: 5,
        type: 'crocetta',
        title: 'Per imparare a programmare, principalmente occorre:',
        correctAnswers: 'ChatGPT+',
        other1: 'Studio matto e disperatissimo',
        other2: 'Saper usare Google',
        other3: 'Libri comprati a caro prezzo',
    }
]



// Funzioni
function bottonePartenza () {
    let bottone = document.createElement('button')
    bottone.innerText = 'Clicca per Iniziare'
    bottonePartenza.classList = 'bottoneInizio'
    divDomanda.appendChild(bottone)
    bottone.addEventListener('click', () => {
        divDomanda.removeChild(bottone)
        prontiPartenza()
    })
}

function prontiPartenza () {
    let titoloIniziale = document.createElement('h1')
    titoloIniziale.classList = 'titoliDomande'
    titoloIniziale.innerText = 'Attendi...'
    let titoloIniziale2 = document.createElement('h1')
    titoloIniziale2.classList = 'titoliDomande'
    titoloIniziale2.innerText = ' Le domande stanno per iniziare...'
    divDomanda.appendChild(titoloIniziale)
    setTimeout(() => {
        divDomanda.removeChild(titoloIniziale);
    }, 2000);
    setTimeout(function() { 
        divDomanda.appendChild(titoloIniziale2)
    }, 2300);
    setTimeout(() => {
        divDomanda.removeChild(titoloIniziale2);
        selettoreDomande()
    }, 4500);

}


function selettoreDomande() {
    let counter = 0;
    let tempoDisposizione = 15000;
    function eseguiProssimaDomanda() {
        if (counter < domande.length) {
            if(domande[counter].type == 'crocetta') {
                tempoDisposizione = 30000;
            } else if(domande[counter].type == 'booleano') {
                tempoDisposizione = 15000;
            }
            chiamaDomanda(counter, tempoDisposizione);

            setTimeout(() => {
                counter++;
                eseguiProssimaDomanda();
            }, (tempoDisposizione+ 1000));
        }
    }

    eseguiProssimaDomanda(); 
}


function chiamaDomanda(index, tempo) {
    let titoloDomanda = document.createElement('h1');
   
    titoloDomanda.innerText = domande[index].title
    divDomanda.appendChild(titoloDomanda) 
     if(domande[index].type == 'crocetta') {
        let risposta1 = document.createElement('button')
        risposta1.classList = 'risposta'
        risposta1.innerText = domande[index].correctAnswers
        let risposta2 = document.createElement('button')
        risposta2.classList = 'risposta'
        risposta2.innerText = domande[index].other1
        let risposta3 = document.createElement('button')
        risposta3.classList = 'risposta'
        risposta3.innerText = domande[index].other2
        let risposta4 = document.createElement('button')
        risposta4.classList = 'risposta'
        risposta4.innerText = domande[index].other3
        // let arrayCasuale = generaArrayCasuale4num();
        divRisposte.appendChild(risposta1)
        divRisposte.appendChild(risposta2)
        divRisposte.appendChild(risposta3)
        divRisposte.appendChild(risposta4)
    } else if(domande[index].type == 'booleano') {
        let risposta1 = document.createElement('button')
        risposta1.classList = 'risposta'
        risposta1.innerText = domande[index].correctAnswers
        let risposta2 = document.createElement('button')
        risposta2.classList = 'risposta'
        risposta2.innerText = domande[index].other1 
        divRisposte.appendChild(risposta1)
        divRisposte.appendChild(risposta2)
    }
    setTimeout(() => {
        divDomanda.removeChild(titoloDomanda)
        while (divRisposte.firstChild) {
            divRisposte.removeChild(divRisposte.firstChild);
        }        
    }, tempo);  
}

function generaArrayCasuale4num() {
    let numeri = [];
    let risposte = [];
    while (numeri.length < 4) {
        let numeroCasuale = Math.floor(Math.random() * 4) + 1;
        if (!numeri.includes(numeroCasuale)) {
            numeri.push(numeroCasuale);
            risposte.push('risposta'+numeroCasuale)
        }
    }
    return risposte;
}