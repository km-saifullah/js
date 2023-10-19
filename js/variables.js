// Variables
/* 
var
    => var is used to declare the variable
    => We can reassign the variable name with var
*/
var number = 10; // type -> Number
var myName = "Saifullah"; // -> String
var myName = "Khaled"; // update the value of the variable
console.log(number, myName);

/*
let
    => let is also used for declaring variable
    => let does not allow us to redeclare the variable name
    => let help us not to overwrite the variable name
*/
let course = "MERN";
let id = "2305";
// let course = "Science"; // this will throw error. We cannot do this.
// course = "Online MERN"; // This is valid
console.log(course, id);

/*
const 
    => const will not be modified or cannot reassign the variable again
    => we cannot reassign the variable while using const
*/
const PI = 3.1416;
console.log(PI);
