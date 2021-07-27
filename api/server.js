const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
// const db = require('./data/db-config')
const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

const authRouter = require("./auth/auth-router");
const userRouter = require("./users/users-router");
const plantRouter = require("./plants/plants-router");
const authMiddle = require("./middleware/restricted-middleware");

server.get("/", (req, res) => {
  res.status(200).json({
    api: "Running Successfully!",
  });
});

server.get("/api", (req, res) => {
  res.status(200).json({
    api: "Welcome to my API",
  });
});

server.use("/api/auth", authRouter);
server.use("/api/users", authMiddle, userRouter);
server.use("/api/plants", authMiddle, plantRouter);

//error middleware
server.use((err, req, res) => {
  console.log({ err });
  res.status(500).json({
    message: `There was an error retrieving this data: ${err.message}`,
  });
});

module.exports = server;
