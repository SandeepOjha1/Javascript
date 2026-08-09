//Strings
let str1 = "Hello";
let str2 ="World";
let meow = "Cat is a pet";
console.log(str2[3]);

console.log(`We are trying to use string literals ${meow} in a string`);

let obj = {
    item: "Pen",
    price: 100
};
console.log("This " + obj.item + " costs " + obj.price + " Ruppees");

console.log("Below expression is using template literals");
console.log(`This ${obj.item} costs ${obj.price} Ruppees`);

