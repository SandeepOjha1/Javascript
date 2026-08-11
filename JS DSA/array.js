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

// Array Methods
//Push Method

let numbers = [10,20,30,40,50];
console.log("Original Array:", numbers);
let pushe = numbers.push(100); // adds 100 at the end of the array 
console.log("After push the number in an array: ", numbers); // prints [10, 20, 30, 40, 50, 100]
console.log("The length of the array after push:", pushe); // prints 6

let pope = numbers.pop();
console.log("After pop the number in an array: ", numbers); // prints [10, 20, 30, 40, 50]

let shifte = numbers.shift(); // removes the first element of the array
console.log("After shift the number in an array: ", numbers); // prints [20, 30, 40, 50]

let unshifte = numbers.unshift(5); // adds 5 at the beginning of the array
console.log("After unshift the number in an array: ", numbers); // prints [5, 20, 30, 40, 50]



//IndexOf Method & Include Method
let cars = ["BMW","Mercedes","Audi","RR","Thar"];
console.log("Original Array: ", cars);

console.log("After using IndexOf Method: ", cars.indexOf("audi"));
console.log("After using IndexOf Method: ", cars.indexOf("RR"));
console.log("After using Include Method: ", cars.includes("SUV"));

// Concat and Reverse of an array
let numb = [1,2,3,4,5];
let numb1 = [6,7,8,9,10];
console.log("Original arrays: ", numb, numb1);
let conca = numb.concat(numb1); // joins both the array numb and numb1
console.log("After joining the arrays: ", conca);
let rev = numb.reverse();  // reverse the joined array
console.log("After reversing an array: ", rev);


