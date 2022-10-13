import express from "express";

const root = express.Router();

root.get("/", (req, res) => {
  res.status(200);
  res.send("Hello World!!");
});

root.get("/health", (req, res) => {
  res.sendStatus(200);
});

export default root;
