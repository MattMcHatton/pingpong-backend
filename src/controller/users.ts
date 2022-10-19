import prisma from "../prisma/client.js";
import { ClientRequest, ServerResponse } from "http";

export class userController {
  async getAllUsers(req: ClientRequest, res: ServerResponse) {
    const users = await prisma.user.findMany();
    return users;
  }
  async getUser(req: ClientRequest, res: ServerResponse) {
    const users = await prisma.user.findMany();
    return users;
  }
  async getUserMatches(req: ClientRequest, res: ServerResponse) {
    const users = await prisma.user.findMany();
    return users;
  }
  async getUserMatch(req: ClientRequest, res: ServerResponse) {
    const users = await prisma.user.findMany();
    return users;
  }
}
