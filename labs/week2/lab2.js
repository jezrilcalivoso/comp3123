// COMP 3123 – Full Stack Development – Lab 2
// Name: Jezril Calivoso | Student ID: 101488712
// Date: September 12, 2025


// Exercise 1: Rewrite the following code block using ES6 syntax, ie. const, let, arrow function, template literals
// and for..of

const greeter = arr => {
    let greetText = 'Hello ';

    for (let name of arr) {
        console.log(`${greetText}${name}`);
    }
}

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan']);

// Exercise 2: Using destructuring assignment syntax and the spread operator, write a function will capitalize the
// first letter of a string.

const capitalize = word => {
    let letters = [...word];
    for (let index in letters) {
        letters[index] = letters[index].toLowerCase();
    }
    letters[0] = letters[0].toUpperCase();

    return letters.join('');
}

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'))

// Exercise 3: Using array.proto.map create function to use the capitalize method in Exercise 2 to upper case
// the first character of each Color in the following array.

const colors = ['red', 'green', 'blue'];
console.log(colors.map(color => capitalize(color)));

// Exercise 4: Using array.proto.filter create a function that will filter out all the values of the array that are less
// than twenty.

var values = [1, 60, 34, 30, 20, 5];
console.log(values.filter(value => value < 20));

// Exercise 5: Using array.proto.reduce create calculate the sum and product of a given array.

var array = [1, 2, 3, 4];
console.log(array.reduce((accum, num) => accum + num, 0));
console.log(array.reduce((accum, num) => accum * num, 1));

// Exercise 6: Using ES6 syntax for class and subclass using extends to create a Sedan subclass which derives
// from Car Class. The parameters for the Car class is the model and year. The parameters for the
// subclass is the model, year and balance.
// Use the super key word in the Sedan subclass to set the model and name in base Car
// constructor.

class Car {
    model;
    year;
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `Model: ${this.model} Engine ${this.year}`;
    }
}

class Sedan extends Car {
    balance;
    constructor(model, year, balance) {
        super(model, year)
        this.balance = balance;
    }

    info()  {
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
}

const car = new Car('Pontiac Firebird', 1976);
console.log(car.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());