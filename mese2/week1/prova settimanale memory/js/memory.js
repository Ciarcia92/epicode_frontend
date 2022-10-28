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
var timer = document.getElementsByClassName('timer');


var min = 0;
var sec = 0;
var stopwatch = setInterval(startTimer, 1000);



document.body.onload = startGame();

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
// una funzione che rimuove la classe active e chiama la funzione startGame()


// la funzione startGame che pulisce il timer, dichiara un array vuoto, mescola casualmente l'array degli animali
// (var arrayShuffle = shuffle(arrayAnimali);), aggancia il contenitore con id griglia,
// pulisce tutti gli elementi che eventualmente contiene
// poi fa ciclo per creare i 24 div child -> aggiunge la class e l'elemento dell'array in base all'indice progressivo
// chiama la funzione timer e associa a tutti gli elementi (div) di classe icon l'evento click e le due funzioni definit sotto

var arrayComparison = [];
function startGame() {
    min=0;
    sec=-1;
  var arrayShuffle = shuffle(arrayAnimali);
  let grid = document.getElementById('griglia');
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }

//COMMENTO PER IL PROF: PROF INIZIALMENTE AVEVO PROVATO A FARE UN FOREACH(quello sottostante) PER CREARMI I DIV CON GLI ANIMALI ANZICHE USARE IL CICLO FOR,
// E MI FUNZIONAVA TUTTO TRANNE IL FATTO CHE NON LEGGEVA LE EMOJI DEGLI ANIMALI, OSSIA CREAVA TUTTI I DIV CON LE ICONE DEGLI ANIMALI DENTRO MA
//MI DAVA UNDEFINED A TUTTE TRANNE DUE(che comunque non mostrava, faceva vedere solo un simbolo) QUINDI HO RIPIEGATO SUL FOR.. C'è UN MOTIVO PER IL QUALE 
//IL FOREACH DAVA QUESTO COMPORTAMENTO?

  // arrayAnimali.forEach(function(animal, i){
  //     const animalDiv = document.createElement('div');
  //     const iconeDiv = document.createElement('div');
  //     animalDiv.appendChild(iconeDiv);
  //     iconeDiv.classList.add('icon');
  //     iconeDiv.innerHTML = animal[i];
  //     iconeDiv.addEventListener('click', displayIcon);
  //     griglia.insertAdjacentElement('afterbegin', animalDiv);
  // })

  for (var i = 0; i < arrayAnimali.length; i++) {
    let cards = document.createElement('div');
    let icone = document.createElement('div');
    icone.innerHTML = arrayAnimali[i];
    grid.appendChild(cards);
    cards.appendChild(icone);
    icone.classList.add('icon');
    icone.addEventListener('click', displayIcon);
  }
}
startTimer()

function displayIcon() {
  var icon = document.getElementsByClassName('icon');
  var icons = [...icon];

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
  //aggiunge l'oggetto su cui ha cliccato all'array del confronto
  arrayComparison.push(this);

  var len = arrayComparison.length;
  //se nel confronto ci sono due elementi
  if (len === 2) {
    //se sono uguali aggiunge la classe find
    if (arrayComparison[0].innerHTML === arrayComparison[1].innerHTML) {
      arrayComparison[0].classList.add('find', 'disabled');
      arrayComparison[1].classList.add('find', 'disabled');
      arrayComparison = [];
    } else {
      //altrimenti (ha sbagliato) aggiunge solo la classe disabled
      icons.forEach(function (item) {
        item.classList.remove('disabled');
      });
      // con il timeout rimuove  la classe show per nasconderli
      setTimeout(function () {
        arrayComparison[0].classList.remove('show');
        arrayComparison[1].classList.remove('show');
        icons.forEach(function (item) {
          item.classList.remove('disabled');
          for (var i = 0; i < arrayComparison.length; i++) {
            arrayComparison[i].classList.add('disabled');
          }
          arrayComparison = [];
        });
      }, 700); 
    }
  }

  if ([...document.querySelectorAll('.find')].length === 24) {
    modal.classList.add('active');
    document.getElementById('tempoTrascorso').innerHTML= `${min} min ${sec} sec`
  }
}

//una funzione che viene mostrata alla fine quando sono tutte le risposte esatte

function playAgain() {
    modal.classList.remove('active');
    startGame();
}
// una funzione che calcola il tempo e aggiorna il contenitore sotto


function startTimer() {
    if (sec == 60) {
      sec = 0;
      min++;
    }
    sec++;
    document.querySelector('.timer').innerHTML = `Tempo: ${min} min ${sec} sec`;
}