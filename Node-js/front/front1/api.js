async function sessionCheck() {
  try {
    const promise = await fetch("http://localhost/server/user/session-check", {
      credentials: "include",
    });
    const answer = await promise.json();
    if (!answer.sessionValid) {
      window.location.href =
        "http://localhost/Node-js/front/front1/register-login.html";
    }
  } catch (error) {
    console.log(error);
  }
}

async function postNewTodo(todo) {
  try {
    const promise = await fetch("http://localhost/server/todos", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    const result = await promise.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function getAllTodos() {
  try {
    const promise = await fetch("http://localhost/server/todos");
    const result = await promise.json();
    showAllTodos(result.filter((todo) => todo.done === false));
    showAllDones(result.filter((todo) => todo.done === true));
    return result;
  } catch (error) {
    console.log(error);
  }
}
async function updateTodo(todo) {
  const promise = await fetch(`http://localhost/server/todos/${todo.id}`, {
    method: "PUT",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  const result = await promise.json();
  if (!promise.ok) {
    console.log("kazkaip kazkas nekazka");
  } else {
    return result;
  }
}

async function deleteTodo(id) {
  const promise = await fetch(`http://localhost/server/todos/${todo.id}`, {
    method: "DELETE",
  });
  const response = await promise.json();

  if (!promise.ok) {
    console.log("kazkaip kazkas nekazka");
  } else {
    return response;
  }
}

sessionCheck();
