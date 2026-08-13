//For the given start state of an array, change it to final form using methods.
// start:  ['January','June', 'march', 'august']
// final:  ['july', 'june', 'march', 'august']

let arr = ["January", "June", "March", "August"];
console.log("Original Array: ", arr);  // prints the original array
let shifte = arr.shift();  // delete the beginning element from the array
console.log("Removed element: ", shifte);  //prints the removed element
console.log("After removing the element: ", arr);  // prints the array after removing the element


let unshifte = arr.unshift("July");  // Adds the element in the beginning of an array
console.log("After adding the new element in the array: ", arr);  // prints the new array after adding new elemt


// For the given start state of an array, change it to final form using splice.
// start:  ['January','July', 'March', 'August']
// final:  ['july', 'june', 'march', 'august']

let month = ['January','July', 'March', 'August'];
console.log("After using Splice method: ", month.splice(0,2, "July", "June"));
console.log("After completing: ", month);


// Return the index of the JavaScript from the given array, if it was reversed
// ['c','c++','html','javascript','python','java','c#','sql']

let lang = ['c','c++','html','javascript','python','java','c#','sql'];
console.log("Finding the index of reversed array: ", lang.reverse().indexOf("javascript"));