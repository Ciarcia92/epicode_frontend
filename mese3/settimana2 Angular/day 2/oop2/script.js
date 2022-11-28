//ES6 CLASS
//same as constructor function but with class
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  //now implement method for speed and break
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  break() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  //add a getter called speedUS which retrns the speed in mi/h (divide by 1.6);
  get speedUS() {
    return this.speed / 1.6;
  }
  //add a setter called speedUS which sets the current speed in mi/h (but converts it to km/h
  //before storing the value by multiplying the input by 1.6)
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('ford', 120);
ford.accelerate();
ford.accelerate();
ford.accelerate();
console.log(ford.speedUS);
ford.break();
console.log(ford.speedUS);
ford.speedUS = 50;
console.log(ford);

const fiat = new CarCl('panda', 100);
fiat.accelerate();
console.log(fiat);
console.log(fiat.speedUS);

//inheritance
//until now we've seen cosntructor functions, ES6 CLASSES and object.create. these technique basically
//allow objects to inherit methods from its prototype, hence delegate their behavior to their prototype

//creaate a student class and make it inherit from the Persoon class
//pERSON WILL BE THE PARENT CLASS AND STUDENT THE CHILD CLASS
//student is a sub type of person, so we can have specific methods for the student
//but the student can also use use generic methods from the person

const Person = function (firstName, birthYear) {
  //intances properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

// const Student = function(firstName, birthYear, course) {
//     //intances properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     this.course = course;
// };

// Student.prototype.introduce = function() {
//     console.log(`My name is ${this.firstName} and i study ${this.course}`);
// };

// const jhonny = new Student('jhonny', 2009, 'science');
// console.log(jhonny);
// jhonny.introduce();

//this way Student has duplicate code from person, so not good, and this way if we change something in
//Person, the change will not be inherited to student

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
//call method is used to call the person function insiede student and set the
//this keyword to be the same of person

Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

const jhonny = new Student('jhonny', 2009, 'science');
console.log(jhonny);
jhonny.introduce();

//so far we've built the student constructor function and its prototype property
//and then linked the mike object to the prototype(the link was automatically made by using the keyword new)

//so student is child of person class and it can inherit all the methods from person prototype property
//now what we want to do is to make the person.prototype the prototype of
//student.prototype and to link this two prototype objects we will use object.create
//because defining prototypes manually is exactly what object.create does


//Student.prototype = Object.create(Person.prototype)
//now student.prototype is an object that inherit from  person.prototype
//the connection has to be made before any more method is added to the prototype object of student
//as done in line 88 
jhonny.calcAge();

Student.prototype.constructor = Student; //---> used to fix the prototype of student (that is currently person) and set it to student

//use a constructor function to immplement and electric car (called EV) as a child class of Car.
// beside make and current speed, the EV also has the current charge in % ('charge' property)

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

 Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
 }
 Car.prototype.break = function(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
 }

 const EV = function(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
 };

//link the prototype
EV.prototype = Object.create(Car.prototype);

//add methods to the prototype of EV
EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
    //it set the charge to chargeTo
}
 //implement ac accelerate method that will increase the car speed by 20 and decrease
 //the charge by 1%. then log a message like this: tesla is going to 140km/h wiha charge of 22%
EV.prototype.accelerate = function() {
  this.speed += 20;
  this.charge --;
  console.log(`${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}`);

}
//Car has already a accelerate method that is inherited by tesla, but tesla has it s own 
//accelerate method that override the first one: child methods override the same methods from parent class
 const tesla = new EV('tesla', 120, 23)
 
 //ex set the charge to a certain calue:
tesla.chargeBattery(90);
console.log(tesla);
tesla.break();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
