var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratori = /** @class */ (function () {
    function Lavoratori(_codredd, _redditoAnnualeLordo, _tasseInps, _tasseIrpef) {
        this.coderedd = _codredd;
        this.redditoAnnualeLordo = _redditoAnnualeLordo;
        this.tasseInps = _tasseInps;
        this.tasseIrpef = _tasseIrpef;
    }
    return Lavoratori;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(_codredd, _redditoAnnualeLordo, _tasseInps, _tasseIrpef) {
        return _super.call(this, _codredd, _redditoAnnualeLordo, _tasseInps, _tasseIrpef) || this;
    }
    Person.prototype.getUtileTasse = function () {
        return this.redditoAnnualeLordo * this.coderedd / 100;
    };
    Person.prototype.getTasseInps = function () {
        return this.getUtileTasse() * this.tasseInps / 100;
    };
    Person.prototype.getTasseIrpef = function () {
        return this.getUtileTasse() * this.tasseInps / 100;
    };
    Person.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnualeLordo - (this.getTasseInps() + this.getTasseIrpef());
    };
    return Person;
}(Lavoratori));
var professionista = new Person(78, 32000, 23, 35);
var artigiano = new Person(67, 42000, 23, 35);
var commerciante = new Person(40, 32000, 23, 35);
console.log('Utile tasse professionista: ' + professionista.getUtileTasse());
console.log('Tasse Inps professionista: ' + professionista.getTasseInps());
console.log('Tasse Irpef professionista: ' + professionista.getTasseIrpef());
console.log('Reddito annuo netto professionista: ' + professionista.getRedditoAnnuoNetto());
console.log('-------------------------------------------------------');
console.log('Utile tasse artigiano: ' + artigiano.getUtileTasse());
console.log('Tasse Inps artigiano: ' + artigiano.getTasseInps());
console.log('Tasse Irpef artigiano: ' + artigiano.getTasseIrpef());
console.log('Reddito annuo netto artigiano: ' + artigiano.getRedditoAnnuoNetto());
console.log('-------------------------------------------------------');
console.log('Utile tasse commerciante: ' + commerciante.getUtileTasse());
console.log('Tasse Inps commerciante: ' + commerciante.getTasseInps());
console.log('Tasse Irpef commerciante: ' + commerciante.getTasseIrpef());
console.log('Reddito annuo netto commerciante: ' + commerciante.getRedditoAnnuoNetto());
