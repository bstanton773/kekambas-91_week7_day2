// console.log('Hello this is from array methods and you look great today!');


/*
    Array Methods
*/

// Create an array with which to work

let names = ['Frank', 'Alice', 'Michael', 'Kate', 'Johnny', 'Megan'];

// Basic Looping
for (let i = 0; i < names.length; i++){
    console.log(names[i])
}

console.log('========')

// For...of
for (let name of names){
    console.log(name)
}


// Array.prototype.forEach()
console.log('========')
function callBack(name, idx, a){
    console.log(name, idx, a)
}

names.forEach(callBack);


// With an arrow function
console.log('========')
names.forEach(n => console.log(n.toUpperCase()));

names.forEach((name, index) => console.log(index + name))

// Array.prototype.map()
function mapCallBack(element, index){
    if (index % 2 === 0){
        return element.toUpperCase();
    } else {
        return element.toLowerCase();
    };
};


let newNames = names.map(mapCallBack);
console.log(names);
console.log(newNames);


// As Arrow Function
let newerNames = names.map((e, i) => i%2===0 ? e.toUpperCase() : e.toLowerCase() );
console.log(newerNames);

// let age = 70

// let ageGroup = age > 65 ? 'Senior' : age > 18 ? 'Adult' : 'Child'

// console.log(ageGroup);


// Array.prototype.filter()
let cities = ['Chicago', 'Boston', 'Chattanooga', 'Baton Rouge', 'Champaign', 'Denver'];
console.log(cities);

function startsWithC(cityName){
    return cityName[0].toUpperCase() === 'C'
}

let cNameCitiesMap = cities.map(startsWithC);
console.log(cNameCitiesMap);
let cNameCitiesFilter = cities.filter(startsWithC);
console.log(cNameCitiesFilter);

// As Arrow Function
let bNameCities = cities.filter(city => city[0].toUpperCase() === 'B');
console.log(bNameCities);
console.log(cities);

// Array.prototype.concat()
let arrA = [1, 2, 3];
let arrB = [4, 5, 6];

let arrAB = arrA.concat(arrB);
console.log(arrAB);
console.log(typeof arrAB)

console.log(arrA);
console.log(arrB);
console.log(arrAB);


// Array.prototype.includes()
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

console.log(colors.includes('purple'));
console.log(colors.includes('green'));


// Array.prototype.indexOf()
console.log(colors.indexOf('purple'));
console.log(colors.indexOf('green'));


// Array.prototype.join()
let myArrName = ['B', 'r', 'i', 'a', 'n']

console.log(myArrName.join(''));
console.log(myArrName.join('--'));


// Array.prototype.push()
console.log(colors.push('pink'));
console.log(colors);


// Array.prototype.pop()
let lastElement = colors.pop();
console.log(lastElement);
console.log(colors);


// Array.prototype.reverse()
colors.reverse();
console.log(colors);
colors.reverse();
console.log(colors);


// Array.prototype.slice()
console.log('Array Slice:')
console.log(colors);
console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2,5));



// Array.prototype.splice()
console.log('Array Splice:')
console.log(colors);
colors.splice(2, 1, 'pink', 'purple');
console.log(colors);



// Array.prototype.sort()
console.log('Sort!')
let unsortedArr = [23, 10, -10, 3, 5, -7]


function compareFunc(a, b){
    console.log('A:', a, 'B:', b);
    if (a > b){
        return 1
    } else if (a < b){
        return -1
    } else {
        return 0
    }
}


console.log(unsortedArr);
unsortedArr.sort(compareFunc);
console.log(unsortedArr);

let newUnsort = [3, 77, 34, -23, 35, 1, 11]

console.log(newUnsort);
newUnsort.sort((a,b) => a-b)
console.log(newUnsort);