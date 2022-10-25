/*  STRINGHE */

var imparo = 'Sto imparando JavaScript';
var maiusc = imparo.toUpperCase()
document.getElementById('maiuscola').innerHTML= maiusc;

var minusc = imparo.toLowerCase();
document.getElementById('minuscola').innerHTML= minusc;

var splitted = imparo.split('');
document.getElementById('strArray').innerHTML= splitted;

var char = imparo.charAt(2);
var char1 = imparo.charAt(1);
var char2 = imparo.charAt(14);
var char3 = imparo.charAt(18);
var conc = char.concat(char1, char2, char3);
document.getElementById('estraiCaratteri').innerHTML= conc;

var slice = imparo.slice(13, 15);

var conc2 = imparo.concat(slice, char3);
document.getElementById('concatena').innerHTML= conc2;

var slice5 = imparo.slice(5,9);
document.getElementById('estraiStringa').innerHTML= slice5;

/* ARRAY */

const persone = ['Giovanni', 'Carla', 'Pietro', 'Mirtilla'];

document.getElementById('array').innerHTML= persone.toString();
 
document.getElementById('lunghezza').innerHTML= persone.length;

document.getElementById('elemento').innerHTML= persone.slice(2,3);

document.getElementById('ultimo').innerHTML= persone[persone.length-1];

persone.splice(2,1, 'massimo');

document.getElementById('modificato').innerHTML= persone.toString();

/* ARRAY FUNZIONE */

const newArray = [];

// function calcAge (birthYear) {
//     const today = 2022;
//     const age = today - birthYear;
//     const sentence = `${age} anni`;
//     newArray.push(age);
//     return sentence;
// } 
// document.getElementById('eta1').innerHTML+= calcAge(2001);
// document.getElementById('eta2').innerHTML+= calcAge(1990);
// document.getElementById('eta3').innerHTML+= calcAge(1987);
// document.getElementById('eta4').innerHTML+= calcAge(2018);
// document.getElementById('eta5').innerHTML+= calcAge(2010);
// document.getElementById('arrayEta').innerHTML+= newArray;

/* ARRAY FUNZIONE CON LOOP */

const ages = [2001, 1990, 1987, 2018, 2010];
for(let i = 0; i < ages.length; i++){
    const today = 2022;
    const age = today - ages[i];
    const sentence = `${age} anni`;
    newArray.push(age);
    document.getElementById(`eta${i+1}`).innerHTML+= sentence;
    document.getElementById('arrayEta').innerHTML="Array: " + newArray;
}

/* ARRAY ANIMALI */

const animali = ['coniglio', 'cane', 'gatto', 'criceto'];


document.getElementById('intero').innerHTML= animali;

animali.push('leone');

document.getElementById('aggiunto').innerHTML= animali.toString();

animali.pop();

document.getElementById('estratto').innerHTML= animali.toString();


document.getElementById('verifica1').innerHTML= animali.includes('gatto');


document.getElementById('verifica2').innerHTML= animali.includes('ornitorinco');

