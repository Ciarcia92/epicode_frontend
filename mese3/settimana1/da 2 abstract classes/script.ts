abstract class Lavoratori {
    coderedd: number;
    redditoAnnualeLordo: number;
    tasseInps: number;
    tasseIrpef: number;
    constructor(_codredd:number, _redditoAnnualeLordo: number, _tasseInps: number, _tasseIrpef: number) {
        this.coderedd = _codredd;
        this.redditoAnnualeLordo = _redditoAnnualeLordo;
        this.tasseInps = _tasseInps;
        this.tasseIrpef = _tasseIrpef;        
    }
    abstract getUtileTasse(): number;
    abstract getTasseInps(): number;
    abstract getTasseIrpef(): number;
    abstract getRedditoAnnuoNetto(): number;
}

class Person extends Lavoratori {
    constructor(_codredd:number, _redditoAnnualeLordo: number, _tasseInps: number, _tasseIrpef: number) {
        super(_codredd, _redditoAnnualeLordo, _tasseInps, _tasseIrpef)
    }
    getUtileTasse() {
        return this.redditoAnnualeLordo * this.coderedd/100;
    }
    getTasseInps() {
        return this.getUtileTasse() * this.tasseInps/100;
    }
    getTasseIrpef() {
        return this.getUtileTasse() * this.tasseInps/100;
    }
    getRedditoAnnuoNetto() {
        return this.redditoAnnualeLordo - (this.getTasseInps() + this.getTasseIrpef());
    }
}

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
