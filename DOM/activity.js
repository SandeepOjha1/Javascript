// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     let h2 = document.querySelector("h2");
//     let randomColor = getrandomcolor();

//     h2.innerHTML = randomColor;
//     console.log("Color Updated");

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;
// });

// function getrandomcolor() {
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);

//     let colors = `rgb(${red}, ${green}, ${blue})`;
//     return colors;
// }



let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
})

let user = document.querySelector("#user");
user.addEventListener("change", function(){
    console.log("Changed");
    console.log("Final Value: ", this.value);
    
});

user.addEventListener("change", function(){
    console.log("Changed");
    console.log("Final Value: ", this.value);
    
});