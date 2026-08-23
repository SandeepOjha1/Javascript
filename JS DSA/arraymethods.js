// forEach Method

let arr = [1, 2, 3, 4, 5];

function print(el) {
  console.log(el);
}

// arr.forEach(print);

// OR

arr.forEach(function (el) {
  console.log(el);
});

// Map Method

let num = [1, 2, 3, 4];

let double = num.map((el) => {
  return el * el;
});
console.log(double);

// Filter Method

let numb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evens = numb.filter((numb) => numb % 2 == 0);
console.log(evens);

// Reduce

let a = [4, 5, 9, 52, 10, 2, 3];

let finalval = a.reduce((res, el) => res + el);
console.log(finalval);

// Spread
let arrr = [1, 2, 3, 4, 5];
let newarr = [...arrr];

let chars = [..."Helooooooooo"];

let odd = [1, 3, 5, 7, 9];
let even = [0, 2, 4, 6, 8];

let numss = [...even, ...odd]; /// ... here 3 dots are spread function
console.log(numss);


//REST Function

function sum(...args){
    for (let i = 0; i < args.length; i++){
        console.log("You gave us: ", args[i]);
    }
}

sum(1);

// Destructing
let names = ["ram","shyam","krish","trish","cram","prajh"];

let [tom,pom,com,...som] = names;

console.log(...som);   
