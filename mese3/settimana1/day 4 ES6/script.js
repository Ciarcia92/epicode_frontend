var Abbiglimento = /** @class */ (function () {
    function Abbiglimento(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
        this.id = _id;
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.saldo = _saldo;
    }
    Abbiglimento.prototype.getSaldoCapo = function () {
        return this.prezzoivainclusa * this.saldo / 100;
    };
    Abbiglimento.prototype.getAquistoCapo = function () {
        return this.prezzoivainclusa - this.getSaldoCapo();
    };
    return Abbiglimento;
}());
function mostra() {
    fetch('http://localhost:3000/capi').then(function (res) {
        return res.json();
    }).then(function (res) {
        res.forEach(function (e) {
            var capo = new Abbiglimento(e.id, e.codprod, e.collezione, e.capo, e.modello, e.quantita, e.colore, e.prezzoivaesclusa, e.prezzoivainclusa, e.disponibile, e.saldo);
            console.log(capo, capo.getAquistoCapo());
        });
    });
}
mostra();
