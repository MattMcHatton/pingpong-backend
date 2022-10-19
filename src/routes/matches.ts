import express from "express";
import { matchController } from "../controller/matches.js";

const match = express.Router();
const controller = new matchController();

match.get("/", async (req, res) => {
  let response = await controller.getAllMatches(req, res);
  res.status(200);
  res.send(response);
});

match.get("/:id", async (req, res) => {
  let response = await controller.getMatch(req, res);
  res.status(200);
  res.send(response);
});

export default match;
