let a = 0;
let n = 5;
for (let i=1; i<= n; i++){
    a = a+i;
    console.log(a);
}


for(let count=1; count<=5; count++){
    console.log("count = ", count);
}

let a = 1;
while(a<=5){
    a++;
    console.log(a);
}


let a = 20 ;
do{
    console.log("Meow");
    a++;
} while(a<=10);

 let str = "Meow";
 for(let i of str){
    console.log(i);
 }

let str = "Meow";
let size = 0;
for (let i of str) {
   size++;
   console.log(size);
}

let student = {
   name: "Sandeep",
   class: "MCA",
   RollNo: 8974
};
for (let mas in student){
   console.log(mas);
   console.log("Key = ", mas, "Values = ", student[mas]);
}