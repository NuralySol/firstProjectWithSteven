//! Object oriented programming:

class Animals {
    // every class has a constructor by default / every class is akin to mini factory by itself:
    constructor(name, sound, height, weight) {
        this.name = name;
        this.sound = sound;
        this.height = height;
        this.weight = weight;
    }
    log() {
        console.log(`${this.name} makes a ${this.sound} sound.`);
    }
}

const bear = new Animals("Bear", "Roar", "6", "200");
console.log("bear object: ", bear);
console.log(typeof (bear)) // object:

// instantiate a new object and attach values and arguments that are given: and encapsulating those values!
const nikki = new Animals("Nikki", "Bing", "5'2", "104");
console.log(nikki);

// get the props of the object:
console.log(nikki.weight);
console.log(bear.sound);

console.log("Creating a method: ", bear.log(), bear);

console.log("Nikki's weight:", nikki.weight);
console.log("Bear's sound:", bear.sound);

//? Calling a method correctly call template literal and the log method:
bear.log();
nikki.log();

// this class extends from a parent class, 
class Bird extends Animals {

    constructor(name, sound, height, weight, feathers, beak) {
        super(name, sound, height, weight,);
        this.feathers = feathers;
        this.beak = beak;
    }
}

const nuraly = new Bird("Nuraly", "Kwaar!", "6'2", "180", "soft", "crooked");
console.log(nuraly);

//! Abstraction of the variables:
class Bank {
    checking;
    #savings;
    //* ^ the #savings is a private variable:

    constructor(initialBalance) {
        this.checking = initialBalance;
        this.#savings = 2000;
    }
    deposit(amount) {
        this.checking += amount;
    }
    getSavings() {
        return this.#savings;
    }
}

// inital balance is takes in 1 param:
const myAccount = new Bank(0);
console.log(myAccount);
console.log(myAccount.getSavings());

/* 
Problem 1: Person Class
Create a Person class with the following:

A constructor that takes a name and age.
A method called introduce() that logs a string like:
console.log(`Hello, my name is ${this.name}, and I'm ${this.age} years old.`);
Instantiate at least two instances of the Person class and call their introduce() methods.

Problem 2: Inheritance with Teacher
Create a Teacher class that extends Person.
Add a new property subject to the Teacher class that is set through the constructor.
Create a method teach() that logs a sentence about the teacher teaching their subject.

Problem 3: Overriding Methods
Extend the Teacher class further to create a SubstituteTeacher class.
Override the teach() method so that it logs a different message, for example:
console.log(`${this.name} (a substitute) is temporarily teaching ${this.subject}.`);
Create an instance of SubstituteTeacher and call its methods.

Problem 4: Manage a Collection of Objects
Create an empty array called people.
Add several Person and Teacher objects to this array.
Loop through the array and:
For any Person, call introduce().
For any Teacher, call teach().
(Optional) Use instanceof to check if an element is a Teacher or not.
 */

//! an emtpy array to hold the peope:
const people = [];

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hello, my name is ${this.name}, and I'm ${this.age} years old.`);
    }
}

//* instantiate the on the Object Person:
const adam = new Person("Adam", 18);
console.log("adam object: ", adam);
adam.introduce()

const shelly = new Person("Shelly", 25);
console.log("shelly object: ", shelly);
shelly.introduce();

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    teach() {
        console.log(`Hi, my name is Ms.${this.name} and I teach ${this.subject}`);
    }
}

const msJohnson = new Teacher("Johnson", 55, "Math");
console.log("msJohnson Object: ", msJohnson);
msJohnson.teach();

class SubstituteTeacher extends Teacher {
    constructor(name, age, subject) {
        super(name, age, subject);
    }
    teach() {
        console.log(`${this.name} (a substitute) is temporarily teaching ${this.subject}.`)
    }
}

const mrPerry = new SubstituteTeacher("Perry", 52, "Gym");
console.log("mrPerry: ", mrPerry);
mrPerry.teach();

const pushPersons = () => {
    people.push(mrPerry, msJohnson, adam, shelly);
}
// call the function:
pushPersons()
console.log("people array of Objects: ", people);

// Loop through the array and check instances
for (let person of people) {
    if (person instanceof Person) {
        person.introduce();
    } 
    if (person instanceof Teacher) {
        person.teach();
    } 
    if (!(person instanceof Person || person instanceof Teacher || person instanceof SubstituteTeacher)) {
        console.log("The object does not exist in the expected classes!");
    }
}

