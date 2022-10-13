import express from "express";

const user = express.Router();

user.get("/", (req, res) => {
  res.status(200);
  res.send("User endpoint");
});

export default user;
