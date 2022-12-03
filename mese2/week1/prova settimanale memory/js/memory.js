let arrayAnimali = [
  '🐱',
  '🦉',
  '🐾',
  '🦁',
  '🦋',
  '🐛',
  '🐝',
  '🐬',
  '🦊',
  '🐨',
  '🐰',
  '🐯',
  '🐱',
  '🦉',
  '🐾',
  '🦁',
  '🦋',
  '🐛',
  '🐝',
  '🐬',
  '🦊',
  '🐨',
  '🐯',
  '🐰',
];
//libreria per icone
//https://html-css-js.com/html/character-codes/

var find = document.getElementsByClassName('find');
var modal = document.getElementById('modal');



var stopwatch = setInterval(startTimer, 1000);
//setinterval, metodo che fa funzionare la funz timer ogni secondo, altrimenti non funzionerebbe


document.body.onload = startGame();
//caricamento del gioco al caricamento della pagina


// mi serviranno alcune variabili 1. interval 2. una agganciata alla classe find
// 3. una agganciata al'id modal 4. una agganciata alla classe timer

//una funzione che serve a mescolare in modo random gli elementi dell'array che viene passato
// (l'array contiene le icone degli animali)
function shuffle(arrayAnimali) {
  var currentIndex = arrayAnimali.length;
  var temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = arrayAnimali[currentIndex];
    arrayAnimali[currentIndex] = arrayAnimali[randomIndex];
    arrayAnimali[randomIndex] = temporaryValue;
  }
  return arrayAnimali;
}
//funzione che rimescola ad ogni nuova partita l'array degli animali

// una funzione che rimuove la classe active e chiama la funzione startGame()


// la funzione startGame che pulisce il timer, dichiara un array vuoto, mescola casualmente l'array degli animali
// (var arrayShuffle = shuffle(arrayAnimali);), aggancia il contenitore con id griglia,
// pulisce tutti gli elementi che eventualmente contiene
// poi fa ciclo per creare i 24 div child -> aggiunge la class e l'elemento dell'array in base all'indice progressivo
// chiama la funzione timer e associa a tutti gli elementi (div) di classe icon l'evento click e le due funzioni definit sotto

var arrayComparison = [];
//array vuoto in cui anrdranno i due animali selezionati, che verra svuotato ogni volta quando i due animali selezionati sono diversi, oppure quando sono gli stessi.


function startGame() {
    min=0;
    sec=-1;
  shuffle(arrayAnimali);
  let grid = document.getElementById('griglia');
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
//quado comincia il gioco: 1 il tempo viene settato a 0, 2 parte lo shuffle degli animali, 3: dal container griglia vengono rimossi tutti i div figli contenenti le icone degli animali

  for (var i = 0; i < arrayAnimali.length; i++) {
    let cards = document.createElement('div');
    let icone = document.createElement('div');
    grid.appendChild(cards);
    cards.appendChild(icone);
    icone.innerHTML = arrayAnimali[i];
    icone.classList.add('icon');
    icone.addEventListener('click', displayIcon);
  }
  //ciclo che si ripete 24 volte, ed ogni volta crea un div 'cards' che sara figlio di grid e un div 'icone'che sara figlio di card e che conterra l'animale.
//linea 91 carica nell'html di ogni div icona un animale  (ogni volta saranno quindi ridisposti casualmente).
//aggiunge ad ogni div icona la classe 'icon' che da il css alle carte(width height...)
//aggiunge evento ad ogni div icon, facendogli richiame ad ogni clic la funz displayicon
}
startTimer()
//timer  invocato

function displayIcon() {
  var icon = document.getElementsByClassName('icon');
  //prende tutti i div con classe icon creati di sopra
  var icons = [...icon];
//ci fa un array utilizzando lo spread operator

  /*
    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];
    è uguale a 
    var icons = document.getElementsByClassName("icon");
    //var icons = [...icon];
    è un operatore che serve per passare un array come argomento:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax 
    https://www.tutorialspoint.com/es6/es6_operators.htm (cerca spread nella pagina)
    */

  //mette/toglie la classe show
  this.classList.toggle('show');
//this si riferisce all'elemento che riceve l'evento, ossia licona, quindi ad ogni click sull'icona vera aggiunta e levata la classe show che gli da l'animazione di rotateY

  //aggiunge l'oggetto su cui ha cliccato all'array del confronto
  arrayComparison.push(this);
//aggiunge l'icona nell'array vuoto utilizzato per la cmparazione

  var len = arrayComparison.length;
  //se nel confronto ci sono due elementi
  //nell'if ci entra quando le carte selezionate sono due. se l'html della prima è uguale all'html della seconda gli da la classe
  //find (che fa partire l'animazione di rotazione quando indovini) e la classe disabled che non permette di ricliccarci sopra
  //svuota l'array comparison
  if (len === 2) {
    //se sono uguali aggiunge la classe find
    if (arrayComparison[0].innerHTML === arrayComparison[1].innerHTML) {
      arrayComparison[0].classList.add('find', 'disabled');
      arrayComparison[1].classList.add('find', 'disabled');
      arrayComparison = [];
    } else {
      //altrimenti (ha sbagliato) aggiunge solo la classe disabled
      icons.forEach(function(item) {
        item.classList.add('disabled');
    });
      // con il timeout rimuove  la classe show per nasconderli
      //se non sono uguale parte la funzione con timeout a .7 secondi che rimuove la classe show, quindi vengono nascoste
      //e rimuove la classe disable cosi da poterle ricliccare e svuota l'array comparison
      setTimeout(function () {
        arrayComparison[0].classList.remove('show');
        arrayComparison[1].classList.remove('show');
        icons.forEach(function (item) {
          item.classList.remove('disabled');

          arrayComparison = [];
        });
      }, 700); 
    }
  }

  const iconsFind = [...document.querySelectorAll('.find')];
//variabile che stora in un array tutti gli elementi con classe find

//se la lunghezza di iconsfind = a 24, ossia se tutte le carte sono state accoppiate
//aggiunge la classe active a modal e fa partire la visualizzazione della vincita che non fa ricliccare sulle icone

  if (iconsFind.length === 24) {
    modal.classList.add('active');
    document.getElementById('tempoTrascorso').innerHTML= `${min} min ${sec} sec`
  }
}

//una funzione che viene mostrata alla fine quando sono tutte le risposte esatte

function playAgain() {
    modal.classList.remove('active');
    startGame();
}
//playagain che viene chiamata dal bottone, rimuove la classe active e ricomincia il gioco
// una funzione che calcola il tempo e aggiorna il contenitore sotto


function startTimer() {
    if (sec == 60) {
      sec = 0;
      min++;
    }
    sec++;
    document.querySelector('.timer').innerHTML = `Tempo: ${min} min ${sec} sec`;
}