const texts = {
  moveElementText: {
    todo: "Done",
    done: "Move Back",
  },
};

const todoMoveButtons = document.querySelectorAll(".todo-move");
const doneListElement = document.querySelector(".done-list");
const todoListElement = document.querySelector(".all-todos");
const todoDeleteButtons = document.querySelectorAll(".todo-delete");
const todoUpdateButtons = document.querySelectorAll(".todo-update");
const inputElement = document.querySelector(".form-control");

function moveFromTodoToDone(event) {
  const targetId = event.target.attributes.todomove.value;
  const moveTarget = document.querySelector(`[todo-id="${targetId}"]`);
  doneListElement.appendChild(moveTarget);
  event.target.innerText = texts.moveElementText.done;
  event.target.onclick = moveFromDoneToTodo;
}

function moveFromDoneToTodo(event) {
  const targetId = event.target.attributes.todomove.value;
  const moveTarget = document.querySelector(`[todo-id="${targetId}"]`);
  todoListElement.appendChild(moveTarget);
  event.target.innerText = texts.moveElementText.todo;
  event.target.onclick = moveFromTodoToDone;
}

for (const todoMoveButton of todoMoveButtons) {
  todoMoveButton.onclick = moveFromTodoToDone;
}

for (const todoDeleteButton of todoDeleteButtons) {
  todoDeleteButton.onclick = (event) => {
    const targetId = event.target.attributes.tododelete.value;
    const deleteTarget = document.querySelector(`[todo-id="${targetId}"]`);
    deleteTarget.remove();
  };
}

function updateTodo(event) {
  const targetId = event.target.attributes.todoupdate.value;
  const updateTarget = document.querySelector(
    `[todo-id="${targetId}"] .todo-text`
  );
  updateTarget.innerText = prompt(
    "Iveskite nauja reiksme",
    updateTarget.innerText
  );
}

for (const todoUpdateButton of todoUpdateButtons) {
  todoUpdateButton.onclick = updateTodo;
}

// function updateTodo(event) {
// 	const targetId = event.target.attributes.todoupdate.value;
// 	const updateTarget = document.querySelector(
// 		`[todo-id="${targetId}"] .todo-text`
// 	);
// 	updateTarget.innerText = prompt(
// 		"Iveskite nauja todo reiksme:",
// 		updateTarget.innerText
// 	);
// 	//Siusti uzklausa i serveri
// }
