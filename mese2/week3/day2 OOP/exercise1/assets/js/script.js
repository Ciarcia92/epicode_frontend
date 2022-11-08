class Person {
    constructor(firstName, age) {
    this.firstName = firstName,
    this.age = age;
    }
    confrontAge(person1) {
        if(this.age > person1.age) {
            console.log(`${this.firstName} è piu vecchio di ${person1.firstName}`);
        } else {
            console.log(`${this.firstName} è piu giovane di ${person1.firstName}`);
        }
    }
}

var ciro = new Person('ciro', 35);
var carmine = new Person('carmine', 27);
var peppe = new Person('peppe', 30);

ciro.confrontAge(carmine);

