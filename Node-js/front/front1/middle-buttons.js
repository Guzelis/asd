const moveToDoneButton = document.querySelector("#to-done");
const moveToTodoButton = document.querySelector("#to-todo");
const deleteTodoButton = document.querySelector("#delete");

const moveTodoToDone = () => {
  const allTodosCheckedInputs = document.querySelectorAll(
    ".all-todos .todo input:checked"
  );
  for (const inputElement of allTodosCheckedInputs) {
    const parent = inputElement.parentElement;
    const parentId = parent.attributes["todo-id"].value;
    document.querySelector(`[todomove="${parentId}"]`).innerText = "Move back`";
    inputElement.checked = false;
    doneListElement.append(inputElement.parentElement);
  }
};

const moveDoneToTodo = () => {
  const allTodosCheckedInputs = document.querySelectorAll(
    ".done-list .todo input:checked"
  );
  for (const inputElement of allTodosCheckedInputs) {
    const parent = inputElement.parentElement;
    const parentId = parent.attributes["todo-id"].value;
    document.querySelector(`[todomove="${parentId}"]`).innerText = "Done";
    inputElement.checked = false;
    todoListElement.append(inputElement.parentElement);
  }
};

const deleteTodoElement = () => {
  const allTodosCheckedInputs = document.querySelectorAll(
    ".todo input:checked"
  );

  for (const inputElement of allTodosCheckedInputs) {
    inputElement.parentElement.remove();
  }
};

moveToDoneButton.onclick = moveTodoToDone;
moveToTodoButton.onclick = moveDoneToTodo;
deleteTodoButton.onclick = deleteTodoElement;
