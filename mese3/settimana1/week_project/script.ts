interface User {
    credito: number;
    numeroChiamate: number;
    ricarica(amount:number): void;
    chiamata(minuti:number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate():void
}

class Utente implements User {
    credito: number;
    numeroChiamate: number;

    constructor(_credito: number, _numeroChiamate:number) {
    this.credito = _credito;
    this.numeroChiamate = _numeroChiamate;
    }
    ricarica(amount:number):void {
        this.credito += amount;
    }
    chiamata(minuti:number):void {
        this.credito -= (minuti * 0.2);
        this.numeroChiamate ++;          
    }
    numero404():number {
        return this.credito;
    }
    getNumeroChiamate():number {
        return this.numeroChiamate;
    }
    azzeraChiamate():void {
        this.numeroChiamate = 0
    }
}

let firstUtente = new Utente(10, 5);
let secondUtente = new Utente(20, 7);
let thirdUtente = new Utente(30, 10);

console.log('Primo utente:');
console.log('--------------------------');
firstUtente.ricarica(10);
console.log(firstUtente.numero404()); 
firstUtente.chiamata(5)
console.log(firstUtente.getNumeroChiamate()); 
firstUtente.azzeraChiamate();
console.log(firstUtente.getNumeroChiamate()); 

console.log('Secondo utente:');
console.log('--------------------------');
secondUtente.ricarica(20);
console.log(secondUtente.numero404()); 
secondUtente.chiamata(17)
console.log(secondUtente.getNumeroChiamate()); 
secondUtente.azzeraChiamate();
console.log(secondUtente.getNumeroChiamate()); 

console.log('Terzo utente:');
console.log('--------------------------');
thirdUtente.ricarica(50);
console.log(thirdUtente.numero404()); 
thirdUtente.chiamata(30)
console.log(thirdUtente.getNumeroChiamate()); 
thirdUtente.azzeraChiamate();
console.log(thirdUtente.getNumeroChiamate()); 
