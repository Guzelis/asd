//file System

// failo perskaitymas asinchroniniu budu

const fileSystem = require("fs");
const data = require("./data.json");
const express = require("express");
const session = require("express-session");

const app = express();
app.use(
  session({
    secret: "lopas",
    saveUninitialized: true,
    resave: false,
    cookie: { httpOnly: true },
  })
);

async function readFile() {
  //sinchroninis budas
  //const fileData = fileSystem.readFileSync("./data.json", "utf-8");

  //asinchroninis budas
  const fileData = await fileSystem.promises.readFile(
    "./data.json",
    (error) => {
      if (error) console.log(error);
    }
  );
  console.log(JSON.parse(fileData));
}

readFile();

//failo irasymas

async function writeFile(obj) {
  //sinchronine funkcija
  //fileSystem.writeFileSync("./data.json", JSON.stringify(obj)); // vengti sinchroninesfunkcijos

  // asinchronine funkcija

  await fileSystem.writeFile(
    "./data.json",
    JSON.stringify(obj),
    "utf-8",
    (error) => {
      if (error) console.log(error);
    }
  );
}

//writeFile(data);

app.get("/", async (req, res) => {
  data.countOfVisitors++;
  await writeFile(data);
  req.session.userId = 1;
  return res
    .status(200)
    .json({ mesage: `lankytojas nr:${data.countOfVisitors}` });
});

app.get("/id", (req, res) => {
  if (req.session.userId) {
    return res.status(200).json({ userId: req.session.userId });
  } else {
    req.session.userId = 1;

    return res.status(200).json({ userId: req.session.userId });
  }
});

app.get("/users", (req, res) => {
  console.log(req.session.userId);
  res.status(200).json({ message: "garbe viespaciui" });
});

app.listen(3000, () => {
  console.log("pasileido OK http://localhost:3000");
});
