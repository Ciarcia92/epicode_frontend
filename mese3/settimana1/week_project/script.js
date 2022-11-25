var Cellulare = /** @class */ (function () {
    function Cellulare(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    Cellulare.prototype.ricarica = function (amount) {
        this.credito += amount;
    };
    Cellulare.prototype.chiamata = function (minuti) {
        this.credito -= (minuti * 0.2);
        this.numeroChiamate++;
    };
    Cellulare.prototype.numero404 = function () {
        return this.credito;
    };
    Cellulare.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Cellulare.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return Cellulare;
}());
var primoCell = new Cellulare(10, 5);
var secondoCell = new Cellulare(25, 9);
var terzoCell = new Cellulare(50, 9);
console.log('Primo Cellulare:');
console.log('--------------------------');
primoCell.ricarica(10);
console.log(primoCell.numero404());
primoCell.chiamata(5);
console.log(primoCell.getNumeroChiamate());
primoCell.azzeraChiamate();
console.log(primoCell.getNumeroChiamate());
console.log('Secondo cellulare:');
console.log('--------------------------');
secondoCell.ricarica(20);
console.log(secondoCell.numero404());
secondoCell.chiamata(17);
console.log(secondoCell.getNumeroChiamate());
secondoCell.azzeraChiamate();
console.log(secondoCell.getNumeroChiamate());
console.log('Terzo cellulare:');
console.log('--------------------------');
terzoCell.ricarica(50);
console.log(terzoCell.numero404());
terzoCell.chiamata(30);
console.log(terzoCell.getNumeroChiamate());
terzoCell.azzeraChiamate();
console.log(terzoCell.getNumeroChiamate());
