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