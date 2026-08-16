let todo = [];

let request = prompt("Enter your request: ");

console.log(request);

while(true){
    if(request == "quit"){
        console.log("Quitting app");
        break;
    }

    if(request == "list"){
        console.log("-----------------");
        for(let i = 0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("-----------------");
    }else if(request == "add"){
        let task = prompt("Enter the task");
        todo.push(task);
        console.log("task added.");
    }else if(request == "delete"){
        let index = prompt("Enter a task which you want to delete.");
        todo.splice(index, 1);
        console.log("Task deleted.")
    } else {
        console.log("Wrong request.");
    }
    request = prompt("Enter your request: ");
}