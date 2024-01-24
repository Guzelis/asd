const express = require("express");
const data = require("../data.json");
const router = express.Router();
const { writeFile } = require("../utils/fileOperatipns");

router.post("/", (req, res) => {
  const { username, todo, done } = req.body;

  if (!username)
    return res.status(400).json({ message: "tokio vartotojo nera" });
  if (!todo) return res.status(400).json({ message: "blogas slaptazodis" });

  const selectedUser = data.users.find(
    (user) => user.username.toLowerCase() === username.toLowerCase()
  );
  if (!selectedUser)
    return res.status(404).json({ message: "vartotojas nerastas" });
  const newTodo = { id: data.todosID, username, todo, done: !!done };
  data.todos.push(newTodo);
  data.todosID++;
  writeFile(data);

  res.status(201).json({ message: "naujas todo buvo sukurtas", newTodo });
});

router.get("/", (req, res) => {
  res.status(200).json(data.todos);
});

router.get("/:id", (req, res) => {
  const id = +req.params.id;
  if (isNaN(id))
    return res.status(400).json({ message: "iveskite tinkama id" });

  const existingTodo = data.todos.find((todo) => todo.id === id);

  if (!existingTodo) {
    return res.status(404).json({ message: "tokio nera" });
  } else {
    res.status(200).json(existingTodo);
  }
});

router.put("/:id", (req, res) => {
  const id = +req.params.id;
  if (isNaN(id))
    return res.status(400).json({ message: "iveskite tinkama id" });

  const { username, todo, done } = req.body;
  const existingUser = data.users.find(
    (user) => user.username.toLowerCase() === username.toLowerCase()
  );
  if (!existingUser)
    return res.status(400).json({ message: "toks vartotojas neegzistuoja" });

  const existingTodo = data.todos.findIndex(
    (currentTodo) => currentTodo.id === id
  );
  data.todos[existingTodo] = {
    ...data.todos[existingTodo],
    todo: todo || data.todos[existingTodo].todo,
    username,
    done,
  };
  writeFile(data);
  if (!existingTodo) res.status(404).json({ message: "irasas nerastas" });
  else return res.status(201).json(data.todos[existingTodo]);
});

router.delete("/:id", (req, res) => {
  const id = +req.params.id;
  if (isNaN(id))
    return res.status(400).json({ message: "iveskite tinkama id" });
  const existingTodoIndex = data.todos.findIndex(
    (currentTodo) => currentTodo.id === id
  );
  if (existingTodoIndex === -1)
    return res.status(400).json({ message: "irasas nerastas" });
  else {
    data.todos.splice(existingTodoIndex, 1);
  }
  writeFile(data);
  return res.status(200).json({ message: "istrinta" });
});

module.exports = router;
