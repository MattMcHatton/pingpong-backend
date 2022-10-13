import express from "express";
import { userController } from "../controller/user.js";

const user = express.Router();
const controller = new userController();

user.get("/", async (req, res) => {
  let response = await controller.getAllUsers(req, res);
  res.status(200);
  res.send(response);
});

export default user;
