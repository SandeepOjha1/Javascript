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
