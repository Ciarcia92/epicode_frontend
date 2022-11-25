var Utente = /** @class */ (function () {
    function Utente(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    Utente.prototype.ricarica = function (amount) {
        this.credito += amount;
    };
    Utente.prototype.chiamata = function (minuti) {
        this.credito -= (minuti * 0.2);
        this.numeroChiamate++;
    };
    Utente.prototype.numero404 = function () {
        return this.credito;
    };
    Utente.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Utente.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return Utente;
}());
var firstUtente = new Utente(10, 5);
var secondUtente = new Utente(20, 7);
var thirdUtente = new Utente(30, 10);
console.log('Primo utente:');
console.log('--------------------------');
firstUtente.ricarica(10);
console.log(firstUtente.numero404());
firstUtente.chiamata(5);
console.log(firstUtente.getNumeroChiamate());
firstUtente.azzeraChiamate();
console.log(firstUtente.getNumeroChiamate());
console.log('Secondo utente:');
console.log('--------------------------');
secondUtente.ricarica(20);
console.log(secondUtente.numero404());
secondUtente.chiamata(17);
console.log(secondUtente.getNumeroChiamate());
secondUtente.azzeraChiamate();
console.log(secondUtente.getNumeroChiamate());
console.log('Terzo utente:');
console.log('--------------------------');
thirdUtente.ricarica(50);
console.log(thirdUtente.numero404());
thirdUtente.chiamata(30);
console.log(thirdUtente.getNumeroChiamate());
thirdUtente.azzeraChiamate();
console.log(thirdUtente.getNumeroChiamate());
