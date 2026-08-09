let pencil = 10;
let erasor = 20;
// let output = "The price is: " + (pencil+erasor) + "Rupees.";
// let output = `The price of a pencil is: ${pencil} Rupees. `    //back tick
console.log(`The price of a pencil is: ${pencil} Rupees. `)



// Arithmetic Operators
let a = 10;
let b = 20;
console.log("Addition Operators");
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus
console.log(a ** b); // Exponentiation


// Assignment Operators
console.log("Assignment Operators");
let c = 10;
c += 5; // c = c + 5
console.log(c);
c -= 3; // c = c - 3
console.log(c);
c *= 2; // c = c * 2
console.log(c);
c /= 4; // c = c / 4
console.log(c);
c %= 3; // c = c % 3
console.log(c);


// Comparison Operators
console.log("Comparison Operators");
let x = 10;
let y = 20;

console.log(x == y);
console.log(x != y);
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);


// Logical Operators
console.log("Logical Operators");
let p = true;
let q = false;
console.log(p && q); // Logical AND
console.log(p || q); // Logical OR
console.log(!p); // Logical NOT


// Increment and Decrement Operators 
console.log("Increment and Decrement Operators");
let i = 10;
i++; // Post-increment
console.log(i); // 11
i--; // Post-decrement
console.log(i); // 10


// Ternary Operator
let age = 18;
let isAdult = (age >= 18) ? "Yes" : "No";
console.log("Ternary Operator");
console.log(isAdult); // Yes


// Typeof Operator
let num = 10;
console.log("Typeof Operator");
console.log(typeof num); // number
let str = "Hello";
console.log(typeof str); // string
let bool = true;
console.log(typeof bool); // boolean



// Equality Operators
console.log("Equality Operators");      
let m = 10;
let n = "10";
console.log(m == n);
console.log(m === n);
console.log(m != n);
console.log(m !== n);


// Bitwise Operators
console.log("Bitwise Operators");
let x1 = 5;
let y1 = 3;
console.log(x1 & y1); // Bitwise AND
console.log(x1 | y1); // Bitwise OR
console.log(x1 ^ y1); // Bitwise XOR
console.log(~x1); // Bitwise NOT


// Shift Operators
console.log("Shift Operators");
let a1 = 5; // 0000 0101
console.log(a1 << 1); // Left Shift (0000 1010) => 10
console.log(a1 >> 1); // Right Shift (0000 0010) => 2


// Unary Operators
console.log("Unary Operators");
let num1 = 10;
console.log(-num1);
let bool1 = true;
console.log(!bool1);



