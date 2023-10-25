// String Methods

// Check String Length
let text = "A quick brown fox jumps over the lazy dogs!";
console.log(text.length); // o/p ==> 43(Space also be counted)

// Escape Character
let msg = 'Hello universe, we are launching "Apollo" to the moon';
msg = 'Hello universe, we are launching "Apollo" to the moon';
msg = "The character \\ is called backslash.";
console.log(msg);

// slice() method
let str1 = "Bangladesh, USA, France, Australia";
let str2 = str1.slice(12); // slice out the rest of the string from the position of 12
str2 = str1.slice(12, 24);
str2 = str1.slice(-34);
str2 = str1.slice(-34, -12);
console.log(str1);
console.log(str2);
console.log(str1.length, str2.length);

// substring() method
let team = "England, Australia, India, Pakistan, Bangladesh, Afganistan";
let team2 = team.substring(20);
team2 = team.substring(-20);
console.log(team2);

// replace() method
let para = "A quick brown fox jumps over the lazy dogs.";
let para2 = para.replace("dogs", "cows");
console.log(para2);
console.log(para);

// replaceAll() method
let para3 =
  "Hello world. I would love to visit the whole world. World is changing day by day.";
let para4 = para3.replaceAll("world", "universe");
console.log(para4);
console.log(para3);

// toUpperCase() method
let text1 = "hello world";
let text2 = text1.toUpperCase();
console.log(text2, text1);

// toLowerCase() method
let text3 = "HEllO UniVerse";
let text4 = text3.toLowerCase();
console.log(text4, text3);

// trim() method
let text5 = "  Hello Earth!   ";
let text6 = text5.trim();
console.log(text6);

// trimStart() method
let txt = "  Hello Mars    !";
console.log(txt.trimStart());

// trimEnd() method
let txt2 = "  Hello Mars       ";
console.log(txt2.trimEnd());

// split() method
let myText =
  "Spiderman is the best superhero. Spiderweb is the powerful things in the Avangers. Every enemy has the fear of Spiderman.";
let myText2 = myText.split(".");
myText2 = myText.split("");
console.log(myText2);
console.log(myText);
