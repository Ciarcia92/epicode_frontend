interface Smartphone {
    credito: number;
    numeroChiamate: number;
    ricarica(amount:number): void;
    chiamata(minuti:number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate():void
}

class Cellulare implements Smartphone {
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

let primoCell = new Cellulare(10, 5);
let secondoCell = new Cellulare(25, 9);
let terzoCell = new Cellulare(50, 9);

console.log('Primo Cellulare:');
console.log('--------------------------');
primoCell.ricarica(10);
console.log(primoCell.numero404()); 
primoCell.chiamata(20)
console.log(primoCell.getNumeroChiamate()); 
primoCell.azzeraChiamate();
console.log(primoCell.getNumeroChiamate()); 

console.log('Secondo cellulare:');
console.log('--------------------------');
secondoCell.ricarica(20);
console.log(secondoCell.numero404()); 
secondoCell.chiamata(17)
console.log(secondoCell.getNumeroChiamate()); 
secondoCell.azzeraChiamate();
console.log(secondoCell.getNumeroChiamate()); 

console.log('Terzo cellulare:');
console.log('--------------------------');
terzoCell.ricarica(50);
console.log(terzoCell.numero404()); 
terzoCell.chiamata(30)
console.log(terzoCell.getNumeroChiamate()); 
terzoCell.azzeraChiamate();
console.log(terzoCell.getNumeroChiamate()); 
