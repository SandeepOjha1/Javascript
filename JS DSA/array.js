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


// Slice method in an array
let cols = ["Red", "Yellow", "Blue", "Black", "Voilet"];
console.log("Original Array: ", colors);

console.log("Using Slice Method: ", cols.slice());
console.log("Using Slice Method: ", cols.slice(2));
console.log("Using Slice Method: ", cols.slice(1,3));
console.log("Using Slice Method: ", cols.slice(-2));

// Splice Method in an array

let ores = ["Diamond", "Iron", "Ruby", "Gold","Emerald"];
console.log("Original Array: ", ores);

console.log("Using Splice Method: ", ores.splice());
console.log("Using Splice Method: ", ores.splice(2));
console.log("Using Splice Method: ", ores.splice(2,1));
console.log("Using Splice Method: ", ores.splice(1,0,"Copper"));


// Sort in an array
let subject = ["Hindi", "English", "Maths", "Science", "Computer"];
console.log("Original List: ", subject);
console.log("After Sorting: ", subject.sort()); // Prints in the ascending order according to the A to Z 

let num = [10, 48, 35, 48, 60];
console.log("After sorting: ", num.sort());  // Prints in the ascending order accroding to the 0 to 9



//Array References 
let arr = ['a','b','c'];
let arrCopy = arr; //Now the value of arr and arrCopy are equal if any changes made in the arr or arrCopy it will automatically change in other array.

console.log(arr == arrCopy);
console.log("Pushing a value in arr: ", arr.push('x'));
console.log("New array: ", arr);
console.log("New arrCopy: ", arrCopy);

console.log("Poping a element from the array: ", arr.pop());
console.log("New array: ", arr);
console.log("New arrCopy: ", arrCopy);