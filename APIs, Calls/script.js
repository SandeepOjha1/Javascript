function hello(){
    console.log("inside hello func");
    console.log("Hello");
}

function demo() {
    console.log("calling hellp func");
    console.log("demo");
}

console.log("calling demo func");
demo();
console.log("Bye");


function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}