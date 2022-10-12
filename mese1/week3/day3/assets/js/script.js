/* punto uno */

function stampa (apples, oranges) {
    let succo = `Succo con ${apples} mele e ${oranges} arance`;
    return succo
 }
 document.getElementById('corretta').innerHTML= stampa(4, 5);
 document.getElementById('sbagliata').innerHTML= stampa(6);


/* punto 2 */

/*
function eta (anni) {
    document.getElementById('eta').innerHTML+= `${anni} anni`;
}
eta (55);
*/

function calcolaEta(birthyear)  {
    return 2022 - birthyear
}

let eta = calcolaEta(1992);
document.getElementById('eta').innerHTML+= `${eta} anni`;


/* punto 3 */

const calcolaAnno = (nome, eta2, persona) => {
    let birthyear = 2022 - eta2;
    document.getElementById(`persona${persona}`).innerHTML += `L'anno di nascita di ${nome} è il ${birthyear}`;
}

calcolaAnno('Anna', 30, 1);
calcolaAnno('Maria', 24, 2);

/* punto 4 */


function cake(mele , arance){
    function slices(){
        document.getElementById('torta').innerHTML = `Torta con ${mele} fette di mele e ${arance} fette di arancia.`;
    }
    slices();
}
cake(9,15);

/* punto 5 */

const calcola = document.getElementById('calcola');

calcola.addEventListener('click', function(){
    const cibo = Number(document.getElementById('cibo').value);
    const detersivo = Number(document.getElementById('detersivi').value);
    const abito = Number(document.getElementById('abiti').value);
    const spesa = cibo + detersivo + abito;
    document.getElementById('totale').innerText = `Il totale spesa è ${spesa} &euro;`;
    return spesa;
})

