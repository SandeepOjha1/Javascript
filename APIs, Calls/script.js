// // function hello(){
// //     console.log("inside hello func");
// //     console.log("Hello");
// // }

// // function demo() {
// //     console.log("calling hellp func");
// //     console.log("demo");
// // }

// // console.log("calling demo func");
// // demo();
// // console.log("Bye");


// // function one(){
// //     return 1;
// // }

// // function two(){
// //     return one() + one();
// // }

// // function three(){
// //     let ans = two() + one();
// //     console.log(ans);
// // }

// // two();
// // one();
// // three();

// // // JS Single Threaded
// // let a = 25;
// // console.log(a);
// // let b = 48;
// // console.log(b);
// // console.log(a+b);

// // setTimeout(() => {
// //     console.log("Meow");
// // }, 2000);

// // setTimeout(() => {
// //     console.log("BIW");
// // }, 2000);

// // console.log("Hey Kitty");


// //Callback Hell

// const h1 = document.querySelector("h1");

// function changecolor(color, delay, nextcolor){
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextcolor) nextcolor();
//     }, delay);
// }

// changecolor("red", 1000, () => {
//     changecolor("yellow", 2000, () => {
//         changecolor("green", 4000);
//     });
// });

// function savetoDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success(data);
//     } else {
//         failure();
//     }
// }

// savetoDb("Sandeep Ojha", (data) => {
//     console.log("Your saved the data...", data);
// }, () => {
//     console.log("Weak internet connection...");
// });


// async function greet(){
//     return "hello";
// }

// greet()
// .then(()=> {
//     console.log("promise resolved");
// })
// .catch(()=> {
//     console.log("promise rejected");
// }) 


// Await 

// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10 ) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demos(){
//     getNum();
// }


// API Fetching

// let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((res) => {
//         console.log(res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// let url = "https://catfact.ninja/fact";
// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);
//     } catch (e) {
//         console.log("error - ", e);
//     }

//     console.log("bye");
// }



