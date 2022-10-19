import prisma from "../prisma/client.js";
import { Request, Response } from "express";

export class matchController {
  async getAllMatches(req: Request, res: Response) {
    const matches = await prisma.matches.findMany();
    return matches;
  }

  async getMatch(req: Request, res: Response) {
    const matches = await prisma.matches.findUnique({
      where: {
        id: req.params.id,
      },
    });
    return matches;
  }
}
