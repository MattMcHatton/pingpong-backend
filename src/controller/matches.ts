import prisma from "../prisma/client.js";
import moment from "moment";
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

  async createMatch(req: Request, res: Response) {
    const match = await prisma.matches
      .create({
        data: {
          home_user: {
            connect: {
              id: req.body.home_user_id,
            },
          },
          away_user: {
            connect: {
              id: req.body.away_user_id,
            },
          },
          home_score: req.body.home_score,
          away_score: req.body.away_score,
          date: moment(req.body.date, "M/D/YYYY").format("M/D/YYYY").toString(),
        },
      })
      .catch((err) => {
        return err.meta.cause;
      });
    return match;
  }
}
