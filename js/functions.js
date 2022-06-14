// console.log('Hello this is the functions.js file!');


/*
    JavaScript Functions
*/

// Regularly Named Functions
// function <funcName>(){ code to execute when called }

function addNums(){
    let num1 = 10;
    let num2 = 20;
    return num1 + num2;
}

// Execute a function: <funcName>();
console.log(addNums);
console.log(addNums());


// Regularly Named Function with Parameters
// function <funcName>(param1,...){ code to execute }
function addNums2(num1, num2){return num1 + num2}

console.log(addNums2);
console.log(addNums2(15, 30));


// Put Exercise 1 from last night and put it in a Function

let arr = [1, 2, 3, 5, 6, 7]

for (let i = 0; i < arr.length - 1; i++){
    if (arr[i] + 1 != arr[i+1]){
        console.log(i+1)
    }
}


function firstNonConsecutive(anArr){
    // loop through the array via index (i)
    for (let i = 0; i < anArr.length - 1; i++){
        // look at each number and compare it to the number to its right
        let number = anArr[i]
        let numberToRight = anArr[i+1]
        // If the number to its right is not the next num consecutively, return that index
        if (number + 1 != numberToRight){
            return i+1
        }
    }
    // If we loop through the entire array and all are consecutive, return -1
    return -1
}



console.log(firstNonConsecutive([1, 2, 3, 5, 6, 7])) // 3
console.log(firstNonConsecutive([12, 13, 15, 16, 17])) // 2
console.log(firstNonConsecutive([101, 102, 103, 104, 105])) // -1


// Default Parameters
function addNums3(num1, num2=100){
    return num1 + num2
}

console.log(addNums3(10));
console.log(addNums3(10, 15));



// Function variable declaration
// var (let, const) nameOfVariable = function(){ code to call when executed }
var addSomeNums = function(){
    let num1 = 100;
    let num2 = 200;
    return num1 + num2
}

console.log(addSomeNums);
console.log(addSomeNums());


let addMoreNums = function(num1, num2){
    return num1 + num2
}

console.log(addMoreNums);
console.log(addMoreNums(10,20));


const anotherFunc = function someCoolNameFunc(a, b){
    return b - a
}

console.log(anotherFunc);
console.log(anotherFunc(20,50));

