//For Loop
for (let i = 1; i <= 10; i++) {
    console.log("Loop from 1 to 10: ", i);
} 

for (let i = 5; i >= 1; i--) {
    console.log("Loop from 5 to 1: ",i);
} 

// Print all odd numbers from 1 to 15

for (let i = 1; i <= 15; i = i+2){
    console.log("Odd Numbers: ", i );
}


// Print all even number from 2 to 20

for(let i = 2; i <= 20; i = i+2){
    console.log("Even Numbers: ", i);
}

// Print table of 5

// for(let i = 5 ; i <= 50; i = i+5){
//     console.log("Table of 5: ", i);
// }

// console.log("Another Form to write table");

// let n = parseInt(prompt("Write a number to see the table of the number: "));
// for(let i = n; i <= n*10; i = i + n){
//     console.log("Table: ", i);
// }


// Nested Loop
for(let i = 1;  i <= 15; i = i+i){
    console.log("Nested Loop I: ", i);
    for (j = 2; j <= 10; j = i+j){
        console.log("Nested Loop J: ",j);
    }
}


//While Loop
let i = 1;
while(i <=5){
    console.log("While Loop: ", i);
    i++;
}


// Favourite Movie

// const favourite = "Endgame";
// let guess = prompt("Guess the favourite movie: ");
// while((guess != favourite) && (guess != "quit")){
//     guess = prompt("Wrong guess. Please try again. ");
// }
// if (guess == favourite){
//     console.log("Congrats");
// }else{
//     console.log("You Quit");
// }


// Break
let im = 2;
while(im <= 10){
    if (im == 5){
        break;
    }
    console.log(im);
    im++;
}