// function kreipimasisServeris() {
//   console.log(`testas`);
//   logDate("ivyko kreipimasis i serveri");
//   logDateNo("ivyko kreipimasis be datos");
// }

// const logDate = require("./logging");
// const logDateNo = require("./logging").logNoDate;

const express = require("express");
const sessions = require("express-session");
const cors = require("cors");
const server = express();
const data = require("./data.json");
const fs = require("fs");
const FileStore = require("session-file-store")(sessions);

// const todosController = require("./controllers/todosController");
// const usersController = require("./controllers/usersController");
// const initialize = require("./middlewares/init");

// initialize(server);
async function writeFile(obj) {
  await fs.writeFile("./data.json", JSON.stringify(obj), (error) => {
    if (error) console.log(error);
  });
}

server.use(
  sessions({
    store: new FileStore({
      path: "./sessions",
      retries: 3,
      ttl: 3600,
    }),
    secret: "lopas",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, expires: 3600000 },
  })
);

server.use(
  cors({
    origin: "http://127.0.0.1:5500",
    credentials: true,
  })
);

server.use(express.json());

// const users = [];
// const todos = [];

// server.get("/", (req, res) => {
//   // console.log(req.method);
//   // console.log(req.originalUrl);
//   // console.log(req.body);
//   // console.log(req.params);
//   // console.log(req.params.id);
//   // console.log(JSON.stringify(req.params));
//   // console.log(JSON.stringify(req.query));
//   console.log("buvo kreiptasi i serveri");
//   return res.send("klientas mato");
// });

server.post("/users/register", async (req, res) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    data.users.push({
      id: data.userId,
      username: username,
      email: email,
      password: password,
    });
    data.userId++;
    await writeFile(data);
    req.session.loggedIn = true;
    req.session.username = username;
    req.session.UserId = data.users[data.users.length - 1].id;
    res.send("registracija sekminga");
  } catch (error) {
    res.send("netinkami duomenys");
  }
});

server.get("/users", (req, res) => {
  return res.send(data.users);
});

server.get("/users/:id", (req, res) => {
  if (isNaN(+req.params.id)) {
    return res.send("ID privalo buti skaicius");
  }

  const selectedUser = data.users.find((user) => user.id === +req.params.id);

  if (!selectedUser) {
    return res.send("tokio vartotojo nera");
  } else {
    return res.send(selectedUser);
  }
});

server.post("/users/login", (req, res) => {
  //1. Validuojame, ar req.body turi tokius laukus username, password
  const username = req.body.username;
  const password = req.body.password;

  if (!username)
    return res.status(400).json({ message: "tokio vartotojo nera" });
  //return res.status(400).json({ message: "tokio vartotojo nera" });

  if (!password)
    return res.status(400).json({ message: "iveskite slaptazodi" });
  //return res.status(400).json({ message: "prasome ivesti slaptazodi" });

  //2. Patikrinti, ar vartotojas su tokiu username egzistuoja,
  const selectedUser = data.users.find(
    (user) => user.username.toLowerCase() === username.toLowerCase()
  );
  if (!selectedUser)
    return res.status(404).json({ message: "tokio vartotojo nera" });
  //return res.status(400).json({ message: "tokio vartotojo nera" });
  //a. jei ne, tada siusti "Vartotojas neegzistuoja"

  //b. toliau daromas tikrinimas
  //3. Ar slaptazodis atitinka.
  if (selectedUser.password === password) {
    req.session.loggedIn = true;
    req.session.username = selectedUser.username;
    req.session.UserId = selectedUser.id;
    // res.status(200).json({ message: "prisijungete" });
    //res.redirect("http://127.0.0.1:5500/Node-js/front/front1/todos.html");
    res.status(200).json({
      url: "http://localhost/Node-js/front/front1/todos.html",
    });
  }

  //Jei atitinka - tada siunciame atsakyma is serverio.
  //"Sekmingai prisijungete prie sistemos"
});

// server.use("./users", usersController);

// /crudas todos

server.get("/user/session-check", (req, res) => {
  if (req.session.loggedIn) {
    return res
      .status(200)
      .json({ message: "valid session", sessionValid: true });
  } else {
    return res
      .status(400)
      .json({ message: "session invalid", sessionValid: false });
  }
});

server.post("/todos", (req, res) => {
  const { todo, done } = req.body;
  const username = req.session.username;
  if (!username) return res.status(400).json({ message: "esate neprisijunge" });
  if (!todo) return res.status(400).json({ message: "blogas todo" });

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

server.get("/todos", (req, res) => {
  res.status(200).json(data.todos);
});

server.get("/todos/:id", (req, res) => {
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

server.put("/todos/:id", (req, res) => {
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

server.delete("/todos/:id", (req, res) => {
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

// server.use("./todos", todosController);

server.listen(3000, () => {
  console.log("Aplikacija pasileido, jos adresas: http://localhost:3000/");
});
