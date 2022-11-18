function generazione() {
let giocatore1: number = Math.floor((Math.random() * 100) + 1);
let giocatore2: number = Math.floor((Math.random() * 100) + 1);
let estratto: number = Math.floor((Math.random() * 100) + 1);

console.log(`giocatore 1: ${giocatore1}`);
console.log(`giocatore 2: ${giocatore2}`);
console.log(`estratto: ${estratto}`);

confronto(giocatore1,giocatore2,estratto);
}

function confronto(giocatore1:number, giocatore2: number, estratto: number) {
    if (giocatore1 == estratto) {
        console.log('Il giocatore 1 ha indovinato!'); 
    } else if (giocatore2 == estratto) {
        console.log('Il giocatore 2 ha indovinato!'); 
    } else if ((Math.abs(estratto - giocatore1)) < (Math.abs(estratto - giocatore2))) {
        console.log(`Nessuno ha indovinato, ma il giocatore 1 si è avvicinato di più`);
    } else {
        console.log(`Nessuno ha indovinato, ma il giocatore 1 si è avvicinato di più`);
    }
}DataTransfer

generazione()