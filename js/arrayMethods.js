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


