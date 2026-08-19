const max = prompt("Enter the maximum number: ");
const random = Math.floor(Math.random() * max + 1);
let guess = prompt("Guess the number: ");

while(true){
    if(guess=="quit"){
        console.log("User Quit");
        break;
    }
    if(guess==random){
        console.log("Congrats! You got the correct the answer.");
        break;
    }else if(guess < random){
        guess = prompt("Your number is soo small. Enter the number again...");
    }else{
        guess = prompt("Your number is soo large. Enter the number again...");
    }

}