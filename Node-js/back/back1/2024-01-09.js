// function kreipimasisServeris() {
//   console.log(`testas`);
//   logDate("ivyko kreipimasis i serveri");
//   logDateNo("ivyko kreipimasis be datos");
// }

// const logDate = require("./logging");
// const logDateNo = require("./logging").logNoDate;

// kreipimasisServeris();

const express = require("express");
const cors = require("cors");
const server = express();

server.use(cors());
server.use(express.json());

const users = [];
const todos = [];

console.log(users);

server.get("/", (req, res) => {
  // console.log(req.method);
  // console.log(req.originalUrl);
  // console.log(req.body);
  // console.log(req.params);
  // console.log(req.params.id);
  // console.log(JSON.stringify(req.params));
  // console.log(JSON.stringify(req.query));
  console.log("buvo kreiptasi i serveri");
  res.send("klientas mato");
});

server.post("/register", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  users.push({
    id: users.length + 1,
    username: username,
    email: email,
    password: password,
  });
});

server.get("/users", (req, res) => {
  res.send(users);
});

server.get("/users/:id", (req, res) => {
  if (isNaN(+req.params.id)) {
    res.send("ID privalo buti skaicius");
  }

  const selectedUser = users.find((user) => user.id === +req.params.id);

  if (!selectedUser) {
    res.send("tokio vartotojo nera");
  } else {
    res.send(selectedUser);
  }
});

server.post("/login", (req, res) => {
  //1. Validuojame, ar req.body turi tokius laukus username, password
  const username = req.body.username;
  const password = req.body.password;

  if (!username)
    return res.status(400).json({ message: "tokio vartotojo nera" });

  if (!password)
    return res.status(400).json({ message: "prasome ivesti slaptazodi" });

  //2. Patikrinti, ar vartotojas su tokiu username egzistuoja,
  const selectedUser = users.find((user) => user.username === username);
  if (!selectedUser)
    return res.status(400).json({ message: "tokio vartotojo nera" });
  //a. jei ne, tada siusti "Vartotojas neegzistuoja"

  //b. toliau daromas tikrinimas
  //3. Ar slaptazodis atitinka.
  if (selectedUser.password === password)
    res.status(200).json({
      url: "http://http://127.0.0.1:5500/Node-js/front/front1/todos.html",
    });

  //Jei atitinka - tada siunciame atsakyma is serverio.
  //"Sekmingai prisijungete prie sistemos"
});

server.post("/todos", (req, res) => {
  const { username, todo } = req.body;

  if (!username)
    return res.status(400).json({ message: "tokio vartotojo nera" });
  if (!todo) return res.status(400).json({ message: "blogas slaptazodis" });

  const selectedUser = users.find(
    (user) => user.username.toLowerCase() === username
  );
  if (!selectedUser)
    return res.status(404).json({ message: "vartotojas nerastas" });
  const newTodo = { id: todos.length + 1, username, todo };
  todos.push({ username, todo });

  res.status(201).json({ message: "naujas todo buvo sukurtas", newTodo });
});

server.get("/todos", (req, res) => {
  res.status(200).json(todos);
});

server.get("/todos:id", (req, res) => {});

server.put("/todos:id", (rew, res) => {
  const id = +req.params.id;
  if (isNaN(+id))
    return res.status(400).json({ message: "iveskite tinkama id" });

  const { username, todo } = req.body;
  const existingUser = user.find(
    (user) => user.username.toLowerCase() === username
  );
  if (!existingUser)
    return res.status(400).json({ message: "toks vartotojas neegzistuoja" });
  const existingTodo = todos.findIndex((currentTodo) => currentTodo.id === id);
  todos[existingTodo = {...todos[existingTodo], todo, username}]
});

server.listen(3000);
console.log("serveris pasileido adresu : http://localhost:3000");
