// 1. Arithmetic Operator
/*
    +  => addition
    _  => subtraction
    *  => multiplication
    /  => division
    %  => modulus/remainder
    ++ => increment
    -- => decrement
*/

let num1 = 3;
let num2 = 2;
let result1 = num1 + num2;
let result2 = num1 - num2;
let result3 = num1 * num2;
let result4 = num1 / num2;

let result5 = num1 % num2;
/*
    The syntax of remainder/modulus operator is: dividend % divisor
    Here, num1 will be dividend and num2 will be divisor. 
    Here, result5 will be 1. 
*/
console.log(result1, result2, result3, result4, result5);

// Increment
let count = 12;
let score = count++;
let score2 = ++count;
console.log(count, score, score2);

// Decrement
let vat = 15;
let productPrice = --vat;
let productPrice2 = vat--;
console.log(vat, productPrice, productPrice2);
