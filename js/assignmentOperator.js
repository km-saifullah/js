// Assignment Operator
let x = 10; // = is the assignment operator => (10 is assigned in x)
let y = 20;
console.log("x is:", x, "y is:", y);

y += x; // y = y + x
console.log("x is:", x, "y is:", y);

x -= y; // x = x-y
console.log("x is:", x, "y is:", y);

let a = true;
let b = false;
console.log("a is:", a, "b is:", b);
b |= a; // b = a | b => true | false => true ==> 1
console.log("a is:", a, "b is:", b);

let n1 = 5;
let n2 = 2;
console.log("n1 is:", n1, "n2 is:", n2);
n1 %= n2; // n1 = n1 % n2
console.log("n1 is:", n1, "n2 is:", n2);
