import express from "express";
import { Response, Request } from "express";
import { userController } from "../controller/users.js";

const user = express.Router();
const controller = new userController();

//GET User Information
user.get("/", async (req: Request, res: Response) => {
  let response = await controller.getAllUsers(req, res);
  res.status(200);
  res.send(response);
});

user.get("/:id", async (req: Request, res: Response) => {
  let response = await controller.getUser(req, res);
  res.status(200);
  res.send(response);
});

user.get("/:id/matches", async (req: Request, res: Response) => {
  let response = await controller.getUserMatches(req, res);
  res.status(200);
  res.send(response);
});

user.get("/:id/matches/:match_id", async (req: Request, res: Response) => {
  let response = await controller.getUserMatch(req, res);
  res.status(200);
  res.send(response);
});

//Create User
user.post("/", async (req: Request, res: Response) => {
  let response = await controller.createUser(req, res);
  res.status(201);
  res.send(response);
});

//Update User

//Delete User
user.delete("/", async (req: Request, res: Response) => {
  let response = await controller.deleteUser(req, res);
  res.status(200);
  res.send(response);
});

export default user;
