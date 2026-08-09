// Write a promgram to print all even numbers from 0 to 100

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log("Even Numbers: ", i);
    }
}

// Write a promgram to print all odd numbers from 0 to 100

for (let i = 0; i <= 10; i++) {
    if (i % 2 != 0) {
        console.log("Odd Numbers: ", i);
    }
}

// Create a game where you start with a random game number. Ask the user to keep guessing the game number the users enters correct value

let gamenum = 45;
let usernum = prompt("Guess the game number between 1 to 100: ");

while (usernum != gamenum) {         // while loop to check if the user number is not equal to game number
    if (usernum < gamenum) {
        prompt("It's not correct, please try again: ");
    }
}
console.log("Congratulations you guessed the correct number: ", usernum);


//For the given string:
// let msg = "help!";
// Trim it and convert it to uppercase and print the result.

let msg = "help!";
console.log("Original Message: ", msg);
console.log("Trimmed Message: ", msg.trim());
console.log("Uppercase Message: ", msg.toUpperCase());



// For the String -> let name = "Apna College", predict the output for the following:
// name.slice(4, 9);
// name.indexOf("na");
// name.replace("Apna", "Our");

let name = "ApnaCollege";
console.log("Slice Output: ", name.slice(4, 9));
console.log("IndexOf Output: ", name.indexOf("na"));
console.log("Replace Output: ", name.replace("Apna", "Our"));

// Seperate the "College" from the string  and replace 'I' with 't' in it.

let newname = name.slice(4).replace("l", "t");
console.log("New Name: ", newname);



