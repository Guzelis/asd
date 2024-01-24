const sessions = require("express-session");
const cors = require("cors");
const FileStore = require("session-file-store")(sessions);
const express = require("express");

function initialize(server) {
  server.use(
    sessions({
      ssstore: new FileStore({
        path: "./sessions",
        retries: 3,
        ttl: 3600,
      }),
      secret: "lopas",
      resave: false,
      saveUninitialized: true,
      cookie: { httpOnly: true },
    })
  );

  server.use(
    cors({
      origin: "http://127.0.0.1:5500",
      credentials: true,
    })
  );

  server.use(express.json());
}

module.exports = initialize;
