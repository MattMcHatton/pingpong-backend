import express from "express";
import { Request, Response } from "express";
import { matchController } from "../controller/matches.js";

const match = express.Router();
const controller = new matchController();

match.get("/", async (req: Request, res: Response) => {
  let response = await controller.getAllMatches(req, res);
  res.status(200);
  res.send(response);
});

match.get("/:id", async (req: Request, res: Response) => {
  let response = await controller.getMatch(req, res);
  res.status(200);
  res.send(response);
});

match.post("/", async (req: Request, res: Response) => {
  let response = await controller.createMatch(req, res);
  res.status(201);
  res.send(response);
});

export default match;
