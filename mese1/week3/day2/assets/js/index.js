/* punto uno */

var nome = 'Aldo';
let stato ='cliente';
const numero = 3.14


document.getElementById('concatena').innerHTML = `${nome}, ${stato}, ${numero}`;

/* punto due */

var concatena = nome + ", " + stato + ", " + numero;

document.getElementById('concatena2').innerHTML= concatena;

/*punto tre.1 */

var nome = 'Mario';

document.getElementById('var').innerHTML= nome;

{
let nome = 'Carla';

document.getElementById('let').innerHTML= nome;
}

document.getElementById('final').innerHTML= nome;

/* punto tre.2 */
{
let altroNome = 'Mario';

document.getElementById('let2').innerHTML= altroNome;
}
{
let altroNome = 'Carla';

document.getElementById('let3').innerHTML= altroNome;
}

var altroNome = 'Carla';
document.getElementById('final2').innerHTML=altroNome;


/* punto quattro */

var value1 = 15;

document.getElementById('iniziale').innerHTML += value1;

var value2 = (value1+15);
var value3 = value2++;

document.getElementById('valore1').innerHTML += value3 + ', ' + value2;

var value4 = (value1-10);
var value5 = value4--

document.getElementById('valore2').innerHTML += value5 + ', ' + value4;

document.getElementById('valore3').innerHTML += value1*3;

document.getElementById('valore4').innerHTML += value1/3;

document.getElementById('valore5').innerHTML= `Concatenzaione: ${value1} ${(value1 > 1) ? "è un numero" : "non è un numero"}`;