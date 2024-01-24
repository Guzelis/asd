const texts = {
  moveElementText: {
    todo: "Done",
    done: "Move Back",
  },
};

const doneListElement = document.querySelector(".done-list");
const todoListElement = document.querySelector(".all-todos");

const inputElement = document.querySelector(".form-control");
const todoInput = document.querySelector("#todo-input");
const todoAddBtn = document.querySelector("#todo-add");

function moveFromTodoToDone(event) {
  const targetId = event.target.attributes.todomove.value;
  const moveTarget = document.querySelector(`[todo-id="${targetId}"]`);
  doneListElement.appendChild(moveTarget);
  event.target.innerText = texts.moveElementText.done;
  event.target.onclick = moveFromDoneToTodo;
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

function moveFromDoneToTodo(event) {
  const targetId = event.target.attributes.todomove.value;
  const moveTarget = document.querySelector(`[todo-id="${targetId}"]`);
  todoListElement.appendChild(moveTarget);
  event.target.innerText = texts.moveElementText.todo;
  event.target.onclick = moveFromTodoToDone;
}

function addClickListenersToTodoThreeDotsAction() {
  const todoMoveButtons = document.querySelectorAll(".todo-move");
  const todoDeleteButtons = document.querySelectorAll(".todo-delete");
  const todoUpdateButtons = document.querySelectorAll(".todo-update");

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

  for (const todoUpdateButton of todoUpdateButtons) {
    todoUpdateButton.onclick = updateTodo;
  }
}

addClickListenersToTodoThreeDotsAction();

async function addNewTodo() {
  const todoInputValue = todoInput.value;
  todoInput.value = "";
  const response = await postNewTodo({
    todo: todoInputValue,
  });
  const newTodoObject = response.newTodo;
  const dynamicHTML = `<div
  class="todo d-flex justify-content-between draggable"
  todo-id="${newTodoObject.id}"
  draggable="true"
>
  <input type="checkbox" name="todo" />
  <span class="todo-text">${newTodoObject.todo}</span>
  <div class="dropdown">
    <i
      class="bi bi-three-dots data-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    ></i>
    <ul class="dropdown-menu">
      <li>
        <a class="dropdown-item todo-move" todomove="${newTodoObject.id}" href="#"
          >Done</a
        >
      </li>
      <li>
        <a class="dropdown-item todo-delete" tododelete="${newTodoObject.id}" href="#"
          >Delete</a
        >
      </li>
      <li>
        <a class="dropdown-item todo-update" todoupdate="${newTodoObject.id}" href="#"
          >Update</a
        >
      </li>
    </ul>
  </div>
</div>`;
  todoListElement.innerHTML += dynamicHTML;
  addDragFunctionalityToAllElements();
  addClickListenersToTodoThreeDotsAction();
}

function showAllTodos(todos) {
  let dynamicHTML = ``;

  for (const todo of todos) {
    dynamicHTML += `<div
    class="todo d-flex justify-content-between draggable"
    todo-id="${todo.id}"
    draggable="true"
  >
    <input type="checkbox" name="todo" />
    <span class="todo-text">${todo.todo}</span>
    <div class="dropdown">
      <i
        class="bi bi-three-dots data-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      ></i>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item todo-move" todomove="${todo.id}" href="#"
            >Done</a
          >
        </li>
        <li>
          <a class="dropdown-item todo-delete" tododelete="${todo.id}" href="#"
            >Delete</a
          >
        </li>
        <li>
          <a class="dropdown-item todo-update" todoupdate="${todo.id}" href="#"
            >Update</a
          >
        </li>
      </ul>
    </div>
  </div>`;
  }
  todoListElement.innerHTML = dynamicHTML;
  addDragFunctionalityToAllElements();
  addClickListenersToTodoThreeDotsAction();
}

function showAllDones(todos) {
  let dynamicHTML = ``;

  for (const todo of todos) {
    dynamicHTML += `<div
    class="todo d-flex justify-content-between draggable"
    todo-id="${todo.id}"
    draggable="true"
  >
    <input type="checkbox" name="todo" />
    <span class="todo-text">${todo.todo}</span>
    <div class="dropdown">
      <i
        class="bi bi-three-dots data-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      ></i>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item todo-move" todomove="${todo.id}" href="#"
            >Move back</a
          >
        </li>
        <li>
          <a class="dropdown-item todo-delete" tododelete="${todo.id}" href="#"
            >Delete</a
          >
        </li>
        <li>
          <a class="dropdown-item todo-update" todoupdate="${todo.id}" href="#"
            >Update</a
          >
        </li>
      </ul>
    </div>
  </div>`;
  }
  doneListElement.innerHTML = dynamicHTML;
  addDragFunctionalityToAllElements();
  addClickListenersToTodoThreeDotsAction();
}

getAllTodos();
todoAddBtn.onclick = addNewTodo;

todoInput.onkeydown = (event) => {
  if (event.key === "Enter") addNewTodo();
};
