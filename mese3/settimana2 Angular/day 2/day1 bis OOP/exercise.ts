class SonAccount {
    saldoAttuale: number;
    constructor(_balanceInit:number = 0) {
        this.saldoAttuale = _balanceInit;
    }
    deposit(amount: number) {
        this.saldoAttuale += amount;
    }
    withdraw(amount: number) {
        this.saldoAttuale -= amount;
    }
}

class MotherAccount extends SonAccount {
        saldoAttuale: number;
        constructor(_balanceInit:number = 0) {
            super(_balanceInit);
        }
        interest(){
            this.saldoAttuale += (this.saldoAttuale*0.1);
        }
}

var newSon = new SonAccount(10);
var newMother = new MotherAccount(5);

