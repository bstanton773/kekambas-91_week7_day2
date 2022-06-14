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

let animal = {};
animal.name = 'Buddy';
animal.energy = 10;

animal.eat = function(amount){
    this.energy += amount;
    console.log(`${this.name} is eating and energy is now ${this.energy}`)
}

animal.sleep = function(amount){
    this.energy += amount;
    console.log(`${this.name} is sleeping and energy is now ${this.energy}`)
}

animal.play = function(amount){
    this.energy -= amount;
    console.log(`${this.name} is playing and energy is now ${this.energy}`)
}
console.log(animal);

animal.eat(10);
animal.play(15);
animal.sleep(20);
console.log(animal);

