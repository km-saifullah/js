/* Array in JavaScript
    Array is like a variable that can hold more than one value.
    Basically It is a collection of data. We can store different types of data like string, number, object in one variable using array. 
    Note: Array element always starts from 0. 
 */
let countries = ["Bangladesh", "Norway", "Japan", "Zambia", "Uganda"];
console.log(countries);
console.log(countries[3]);
console.log(countries.length);
console.log(typeof countries); // object

/* 
    We can declare an array with multiple data types. Here is an example of that:
*/
let person = [
  {
    firstName: "Khaled",
    lastName: "Saifullah",
    isLoggedIn: false,
    marks: [90, 87, 45, 99, 100],
  },
  1,
  "Bangladeshi",
];
console.log(person);
console.log(person[0].lastName);
console.log(person[0].marks[3]);

/* 
    We can update an element from an array very easily. We just need to access the element by index number and then assign new value. Example is like this:
*/
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Before update:", numbers);
numbers[4] = 20;
console.log("After update:", numbers);
/*
Note: from the above example we can see that when we change an element from an array it changes the original array. So, that is why we can say that the array is mutable. After make an update the original array will be changed.  
*/

// Changing an Array into String
const fruits = ["apple", "banana", "Pine Apple", "Orange", "Watermelon"];
console.log(fruits.toString());
console.log(typeof fruits.toString());
