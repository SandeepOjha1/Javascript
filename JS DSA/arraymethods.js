// forEach Method

let arr = [1,2,3,4,5];

function print(el){
    console.log(el);
}

// arr.forEach(print);

// OR

arr.forEach(function(el)
{
    console.log(el);
})


// Map Method

let num = [1,2,3,4];

let double = num.map((el) => {
    return el * el;
    })
    console.log(double);

// Filter Method

let numb = [1,2,3,4,5,6,7,8,9];
let even = numb.filter(( numb) => (numb % 2 == 0));
console.log(even);

// Reduce 

let a = [4,5,9,52,10,2,3];

let finalval = a.reduce((res, el) => res+el);
console.log(finalval);
