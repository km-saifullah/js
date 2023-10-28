/*
    JavaScript Array Methods
    There are lot of array methods in JS. These method will help us to power the JS in many ways. Some of the array methods are:
        01. Array length
        02. Array toString()
        03. Array pop()
        04. Array push()
        05. Array shift()
        06. Array unshift()
        07. Array splice()
        08. Array slice()
*/

// Array length
// Length property return the actual size of an array. Array index starts form 0. But the length starts from 1.
const fruits = ["Banana", "apple", "Mango", "Orange"];
console.log(fruits.length);

// Array toString()
// We can convert an array to string using toString() method

let numbers = [10, 20, 30, 40];
console.log(numbers.toString());

// Array push() method
/*
    Array push() method
    If we need to append an element of an array we can use push() method. Always remember it will add an element at the end of an array. 
*/
let ages = [20, 18, 45];
console.log("Before push:", ages);
ages.push(31);
console.log("After push:", ages);

// Append multiple elements using push() method
// We can add multiple elements into an array using push() method. Example is here:
let newAges = [10, 20, 30];
newAges.push(40, 50);
console.log(newAges);

/*
    pop() method in JS
    In JS if we want to remove an element from an array we can use pop() method. The pop() method will change the length of the array. If the array is empty the pop() method will return undefined. Always pop() method will discard the last element of an array Example:
*/
let ages2 = [20, 40, 60, 80];
console.log("Before pop:", ages2, "Before pop length:", ages2.length);
ages2.pop();
console.log("After pop:", ages2, "After pop length:", ages2.length);

let ages3 = [];
let newAges3 = ages3.pop();
console.log(newAges3, ages3.length);
// Note: For an empty array pop method will return undefined. So, the length of the original array will be 0.

// Problem
// let digits = [0, 11, 110, 101];
// console.log(digits);
// digits[3] = digits.pop();
// digits[2] = digits.pop();
// console.log(digits);

// digits[3] = digits.push(10);
// console.log(digits);

/*
    Array shift() method
    In pop method we can remove an element at the end of an array. But if we need to remove the first element of an array, here comes the idea of shift. shift() method will discard the first element of an array and returns the value. 
*/

let teams = ["Bangladesh", "Australia", "New Zealand", "England", "Afganistan"];
console.log(teams.shift(), teams);

// Note: shift() method will reassign the index of whole array. That is why it is slower than the pop() method. Also this method will reduce the length of the array by one.

/*
    Array unshift() method
    unshift() method adds one or multiple elements to the beginning pf an array and return the new array's length. 
*/

let numbers2 = [30, 50];
console.log(numbers2);
let newNumbers = numbers2.unshift(2);
newNumbers = numbers2.unshift(2, 20, 90);
console.log(newNumbers);
console.log(numbers2);

// Note: unshift() method is also reassign the index of an array, that is why it is also slower than the push method.

/*
    Array splice() method
    The splice() method allows us to add new elements to an array in the middle. However we can use this method to delete and replace existing elements as well.  
*/

// Delete elements
let scores = [1, 2, 3, 4, 5];
let deletedScores = scores.splice(0, 3);
console.log(scores);
console.log(deletedScores);

// Insert Elements
// We can insert one or more elements using splice() method

let colors = ["blue", "white", "red", "cyan"];
// colors.splice(2, 0, "purple", "brown");
colors.splice(2, 1, "purple", "brown");
console.log(colors);

// Replacing elements using splice() method
let language = ["C", "C++", "Python", "Bash", "Java"];
language.splice(4, 1, "JavaScript");
console.log(language);

/*
    Array slice() method
    slice() method allow us to extract subset elements and add them into a new array. The slice() method accepts 2 optional parameters like... slice(start,stop)
    both start and stop parameters are optional. If the start parameter is missing the slice() method will start from the beginning of an array. If you omit the stop parameter this method will use the length of any array for the stop parameter. 

    The slice() method will return new array containing the elements of the original array. This method will perform shallow copy of element to the new array only. It does not change the original array. 
*/

let marks = [80, 50, 30, 66, 90];
let newMarks = marks.slice(3);
console.log(marks, newMarks);

// Copy Portion
let shop = ["Pen", "Pencil", "Notebook", "Book"];
let newShop = shop.slice(1, 3);
console.log(shop, newShop);

