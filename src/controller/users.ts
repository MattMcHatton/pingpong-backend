import prisma from "../prisma/client.js";
import moment from "moment";
import { Request, Response } from "express";

export class userController {
  async getAllUsers(req: Request, res: Response) {
    const users = await prisma.user.findMany();
    return users;
  }

  async getUser(req: Request, res: Response) {
    const user = await prisma.user.findUnique({
      where: {
        id: req.params.id,
      },
    });
    return user;
  }

  async getUserMatches(req: Request, res: Response) {
    const matches = await prisma.user.findUnique({
      where: {
        id: req.params.id,
      },
      include: {
        home_matches: true,
        away_matches: true,
      },
    });
    return matches;
  }

  async getUserMatch(req: Request, res: Response) {
    const match = await prisma.user.findUnique({
      where: {
        id: req.params.id,
      },
      include: {
        home_matches: {
          where: {
            id: req.params.match_id,
          },
        },
        away_matches: {
          where: {
            id: req.params.match_id,
          },
        },
      },
    });
    return match;
  }

  async createUser(req: Request, res: Response) {
    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        created_at: moment().format("M/D/YYYY HH:mm:ss").toString(),
        updated_at: moment().format("M/D/YYYY HH:mm:ss").toString(),
      },
    });
    return user;
  }

  async deleteUser(req: Request, res: Response) {
    const user = await prisma.user.delete({
      where: {
        id: req.body.id,
      },
    });
    return user;
  }
}
