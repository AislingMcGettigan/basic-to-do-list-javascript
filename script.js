var todos = ["Buy new turtle"];

var input = prompt("what would you like to do?");

while(input !== "quit"){
	if(input ==="list"){
listToDos();
} else if (input ==="new") {
	newToDo();
} else if ( input ==="delete"){
	deleteToDo();
}
var input = prompt("what would you like to do?");
}

console.log("ok you have quit");

function listToDos(){
	todos.forEach( function(todo, i) {
		console.log(i + ":" + todo);
}
}

function newToDo(){
var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
	console.log("added todo");
}

function deleteToDo(){
var index = prompt("enter index of todo to delete?");
	todos.splice(index,1);
	console.log("deleted todo");
}