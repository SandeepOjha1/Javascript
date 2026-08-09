//Create an array of animals and print it to the console
let animals = ["Cat", "Dog", "Elephant", "Fox"];
console.log(animals);
let mixed = ["Cat", 2, "Elephant", 4, "Fox"]; // mixed array can have different data types
console.log(mixed);
let empty = []; // empty array
console.log(empty); // prints empty array

// Printing element using index 
let number = [2, 4, 6, 8, 10];
console.log("At index 0:", number[0]); // prints 2
console.log("At index 2:", number[2]); // prints 6
console.log("At index 4:", number[4]); // prints 10
console.log("At index 5:", number[5]); // prints undefined cuz there is no element at index 5 and indexing starts from 0 
console.log("Length of the array:", number.length); // prints 5
console.log("Typeof the array:", typeof number); // prints object

//Replacing an element in the array
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log("Before replacing:", fruits);
fruits[1] = "Grapes"; // replacing Banana with Grapes
console.log("After replacing:", fruits); // prints ["Apple", "Grapes", "Mango", "Orange"]

//Adding an element to the array
let colors = ["Red", "Green", "Blue"];
console.log("Before adding:", colors);
colors[5] = "Yellow"; // adding Yellow at index 5 
console.log("After adding:", colors); // prints ["Red", "Green", "Blue", undefined, undefined, "Yellow"] because we skipped index 3 and 4

