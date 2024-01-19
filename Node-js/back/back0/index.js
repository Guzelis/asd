/*const http = require(`http`);
const server = http.createServer((req, res) => {});

console.log("3000 server");

if (req.url === "/") {
  req.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5502");
  res.write("sdfsdf");
  res.end();
}
if (req.url === "/check") {
  res.write("asdas");
  res.end();
}
server.listen(3000);
*/

//Gaunamas HTTP modulis
// const http = require("http");

// //Sukuriamas serverio kintamasis
// const server = http.createServer((req, res) => {
// 	if (req.url === "/" && req.method === "GET") {

// 		req.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5502");
// 		res.write("Tai yra mano atsakymas");
// 		res.end();
// 	}
// 	if (req.url === "/check") {
// 		res.write("Tai yra mano atsakymas");
// 		res.end();
// 	}
// });

// //Serveris paleidžiamas ant port'o 3000
// server.listen(3000);
// console.log("Server is started on port 3000");

const express = require("express");
const cors = require("cors");
const app = express();
let count = 0;

app.use(cors());

app.get("/", (req, res) => {
  res.send("get to page");
});

app.get("/count", (req, res) => {
  count++;
  res.send("count number:" + count);
});

app.listen(3000);
