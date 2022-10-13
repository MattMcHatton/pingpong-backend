import express from "express";

const match = express.Router();

match.get("/", (req, res) => {
  res.status(200);
  res.send("Match endpoint");
});

export default match;
