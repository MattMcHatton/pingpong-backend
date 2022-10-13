import express from "express";
import { matchController } from "../controller/match.js";

const match = express.Router();
const controller = new matchController();

match.get("/", async (req, res) => {
  let response = await controller.getAllMatches(req, res);
  res.status(200);
  res.send(response);
});

export default match;
