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
  res.send("atsakymas is serverio");
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

server.listen(3000);
console.log("serveris pasileido adresu : http://localhost:3000");
