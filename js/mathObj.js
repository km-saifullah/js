// Math object in JS
// Constants
console.log(Math.PI); // pi
console.log(Math.E); // Euler's number
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);

// Math Methods
/* 
    Syntax: Math.method(number)
    1. Math.round()
    2. Math.ceil()
    3. Math.floor()
    4. Math.trunc()
*/
let number1 = 4.6;
number1 = 4.5;
number1 = 4.3;
number1 = 4.9;
console.log(Math.round(number1));
console.log(Math.ceil(number1));
console.log(Math.floor(number1));
console.log(Math.trunc(number1));

// Some Mathematical Operations
/*
    1. Math.pow()
    2. Math.sqrt()
    3. Math.abs()
    4. Math.min()
    5. Math.max()
    6. Math.random()
*/
let number2 = 3;
number2 = 4;
console.log(Math.pow(number2, 3));
console.log(Math.pow(number2, 2));
console.log(Math.sqrt(number2));
console.log(Math.abs(-50));

let maxNumber = Math.max(10, 45, 2, 4, 9);
let minNumber = Math.min(10, 45, 2, 4, 9);
console.log("Maximum Number is:", maxNumber);
console.log("Minimum Number is:", minNumber);

// By default Math.random() return a number between 0 and 1
let randomNumber = Math.random();
console.log(randomNumber);
console.log(randomNumber * 10);
console.log(randomNumber * 10 + 1);
console.log(Math.floor(randomNumber * 10 + 1));
