/*
Logical Operator
    || --> OR
    && --> AND
    !  --> NOT
*/
let A = true;
let B = false;
console.log(A || B);
console.log(A && B);
console.log(A && !B);
console.log(!B);

let eligible = false;
required = true;
console.log(!eligible);
console.log(!required);

/*
When you apply the ! operator to a non-Boolean value. The ! operator first converts the value to a boolean value and then negates it.
The logical ! operator works based on the following rules:
    If a is undefined, the result is true.
    If a is null, the result is true.
    If a is a number other than 0, the result is false.
    If a is NaN, the result is true.
    If a is an object, the result is false.
    If a is an empty string, the result is true. In the case a is a non-empty string, the result is false
    Example:
    console.log(!undefined); // true
    console.log(!null); // true
    console.log(!20); //false
    console.log(!0); //true
    console.log(!NaN); //true
    console.log(!{}); // false
    console.log(!''); //true
    console.log(!'OK'); //false
    console.log(!false); //true
    console.log(!true); //false

*/
