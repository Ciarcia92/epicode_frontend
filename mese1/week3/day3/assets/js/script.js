/* punto uno */

function stampa (apples, oranges) {
    let succo = `Succo con ${apples} mele e ${oranges} arance`;
    return succo;
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

const tortaSlice = (frutto) => {
    const fette = frutto * 3;
    return fette;
}

function cake(mele , arance){
    const fetteMela = tortaSlice(mele);
    const fetteArancia = tortaSlice(arance);
    document.getElementById("torta").innerHTML = `Torta con ${fetteMela} fette di mela e ${fetteArancia} fette di arancia.`;
    return true;
}
cake(3,5);

/* punto 5 */

const calcola = document.getElementById('calcola');

calcola.addEventListener('click', function(){
    let cibo = Number(document.getElementById('cibo').value);
    let detersivo = Number(document.getElementById('detersivi').value);
    let abito = Number(document.getElementById('abiti').value);
    let spesa = cibo + detersivo + abito;

    document.getElementById('totale').innerHTML = `Il totale spesa è ${spesa} &euro;`;
    
    document.getElementById('cibo').value=''
    document.getElementById('detersivi').value=''
    document.getElementById('abiti').value=''
   return spesa;
})

