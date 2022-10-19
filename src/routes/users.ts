import express from "express";
import { userController } from "../controller/users.js";

const user = express.Router();
const controller = new userController();

user.get("/", async (req, res) => {
  let response = await controller.getAllUsers(req, res);
  res.status(200);
  res.send(response);
});

user.get("/:id", async (req, res) => {
  let response = await controller.getUser(req, res);
  res.status(200);
  res.send(response);
});

user.get("/:id/matches", async (req, res) => {
  let response = await controller.getUserMatches(req, res);
  res.status(200);
  res.send(response);
});

user.get("/:id/matches/:match_id", async (req, res) => {
  let response = await controller.getUserMatch(req, res);
  res.status(200);
  res.send(response);
});

export default user;
