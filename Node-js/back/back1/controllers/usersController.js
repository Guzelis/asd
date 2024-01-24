const express = require("express");
const data = require("../data.json");
const router = express.Router();
const { writeFile } = require("../utils/fileOperatipns");
// const server = express();
// server.use(express.json());

router.post("/register", async (req, res) => {
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
    req.session.lggedIn = true;
    req.session.username = username;
    req.session.UserId = data.users[data.users.length - 1].id;
    res.send("registracija sekminga");
  } catch (error) {
    res.send("netinkami duomenys");
  }
});

router.get("/", (req, res) => {
  res.send(data.users);
});

router.get("/:id", (req, res) => {
  if (isNaN(+req.params.id)) {
    res.send("ID privalo buti skaicius");
  }

  const selectedUser = data.users.find((user) => user.id === +req.params.id);

  if (!selectedUser) {
    res.send("tokio vartotojo nera");
  } else {
    res.send(selectedUser);
  }
});

router.post("/login", (req, res) => {
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
  if (selectedUser.password === password)
    // res.status(200).json({ message: "prisijungete" });
    //res.redirect("http://127.0.0.1:5500/Node-js/front/front1/todos.html");
    res.status(200).json({
      url: "http://127.0.0.1:58923/Node-js/front/front1/todos.html",
    });

  //Jei atitinka - tada siunciame atsakyma is serverio.
  //"Sekmingai prisijungete prie sistemos"
});

module.exports = router;
