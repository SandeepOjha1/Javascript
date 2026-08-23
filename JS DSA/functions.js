//Basic of function
function hello() {
    console.log("hello");
}
hello();

//function for loop
function loop() {
    for (let i = 1; i <= 5; i++) {
        console.log("Loop from 1 to 5: ", i);
    }
}
loop();

// function for if-else statements
function statements() {
    let age = 19;
    if (age >= 18) {
        console.log("Adult");
    } else {
        console.log("Not adult");
    }
}

statements();

// create a function to print a poem
function poem() {
    console.log("Twinkle Twinkle little star...");
    console.log("Jhonny Jhonny");
}

poem();

//Create a function to roll a dice and always displays the value of the dice(0 to 6).

function roll() {
    let math = Math.floor(Math.random() * 6) + 1;
    console.log("Roll dice: ", math);
}

roll();

// Functions with arguments

function Mname(name, age) {
    console.log(`${name}'s age is ${age}`);
}

Mname("Sandeep", 21);
Mname(23);

// Create a function that gives the average of 3 numbers
function average(a, b, c) {
    let averagenumb = (a + b + c) / 3;
    console.log("Average of 3 numbers: ", averagenumb);
}
average(1, 5, 9);


// Create a function to print the table

function table(n) {
    for (let i = n; i <= n * 10; i += n) {
        console.log(`Table of ${n}`, i);
    }
}

table(5);

// Using Return 
function sum(a, b, c) {
    let s = a + b + c;
    console.log("Sum: ", s);
    return a + b + c;

}

sum(10, 20, 30);


// this function 

const stu = {
    name: "Sandeep",
    age: 21,
    eng: 70,
    city: "Gwalior",
    degree: 8,
    science: 90,
    getAvg() {
        let avg = (this.eng + this.science + this.degree) / 3; // this is use to access any key and its value.
        console.log(avg);

    }
}

stu.getAvg();


// Try and Catch Statements

let a = 10;
try {
    if (a <= 10) {
        console.log("meow");
    }
} catch (e) {
    console.log(e);
}


// Arrow Function 

const rol = (a, b) => {
    console.log(a + b);
};


// Set Timeout

console.log("Hello");

setTimeout(() => {
    console.log("What the hell");
}, 4000);

console.log("Hell Naw")