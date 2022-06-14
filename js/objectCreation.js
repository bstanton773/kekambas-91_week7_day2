// console.log('Hello from object creation!');

/*
    JavaScript Objects and Prototypes
*/

let person = {
    name: 'Tom',
    age: 23,
    favColor: 'green'
};

console.log(person);
// bracket notation
console.log(person['name']);
// Dot notation 
console.log(person.favColor);

let person2 = {
    name: 'Samantha',
    age: 24,
    languages: ['JavaScript', 'Python'],
    teams: {
        mlb: 'Nationals',
        nfl: 'Commanders'
    }
}

console.log(person2);

console.log(person2.languages)
person2.languages.forEach(l => console.log(l.toLowerCase()))


let person3 = {
    name: 'Jeeves',
    sayHello: function(){console.log(`Hello my name is ${this.name}!`)}
}

console.log(person3);
console.log(person3.sayHello);

person3.sayHello();

console.clear()
// JavaScript Object Instantiation -> classes

// let animal = {};
// animal.name = 'Buddy';
// animal.energy = 10;

// animal.eat = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is eating and energy is now ${this.energy}`)
// }

// animal.sleep = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is sleeping and energy is now ${this.energy}`)
// }

// animal.play = function(amount){
//     this.energy -= amount;
//     console.log(`${this.name} is playing and energy is now ${this.energy}`)
// }
// console.log(animal);

// animal.eat(10);
// animal.play(15);
// animal.sleep(20);
// console.log(animal);


////////////////////////////
// Function Instantiation //
////////////////////////////

// function Animal(name, energy=10){
//     let animal = {};
//     animal.name = name;
//     animal.energy = energy;

//     animal.eat = function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is eating and energy is now ${this.energy}`)
//     }

//     animal.sleep = function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is sleeping and energy is now ${this.energy}`)
//     }

//     animal.play = function(amount){
//         this.energy -= amount;
//         console.log(`${this.name} is playing and energy is now ${this.energy}`)
//     }

//     return animal
// }

// let buddy = Animal('Buddy', 10);
// buddy.eat(10);
// buddy.play(5);

// let leo = Animal('Leo', 20);
// leo.eat(5);
// leo.play(15);

// console.log(leo.eat === buddy.eat);



////////////////////////////////////////////////
// Function Instantiation with Shared Methods //
////////////////////////////////////////////////

const animalMethods = {
    eat: function(amount){
        this.energy += amount;
        console.log(`${this.name} is eating and energy is now ${this.energy}`)
    },
    sleep: function(amount){
        this.energy += amount;
        console.log(`${this.name} is sleeping and energy is now ${this.energy}`)
    },
    play: function(amount){
        this.energy -= amount;
        console.log(`${this.name} is playing and energy is now ${this.energy}`)
    }
}

function Animal(name, energy=10){
    let animal = {};
    animal.name = name;
    animal.energy = energy;

    animal.eat = animalMethods.eat
    animal.sleep = animalMethods.sleep
    animal.play = animalMethods.play

    return animal
}

let buddy = Animal('Buddy', 10);
buddy.eat(10);
buddy.play(5);

let leo = Animal('Leo', 20);
leo.eat(5);
leo.play(15);

console.log(leo.eat === buddy.eat);


console.log('================================')
// Object.create

let parent = {
    firstName: 'Margaret',
    lastName: "O'Riley",
    heritage: 'Irish'
}

console.log(parent);
console.log(parent.firstName);
console.log(parent.lastName);
console.log(parent.heritage);

let child = Object.create(parent);
child.firstName = 'Seamus';
console.log(child);
console.log(child.firstName);
console.log(child.lastName);
console.log(child.heritage);


let parentObj = {
    name: 'Hubert',
    getInfo: function(){console.log(`Hello ${this.name}`)}
}

let childObj = Object.create(parentObj);

childObj.name = 'William';

console.log(childObj);
childObj.getInfo();