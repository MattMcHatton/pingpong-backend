import prisma from "../prisma/client.js";
import { ClientRequest, ServerResponse } from "http";

export class matchController {
  async getAllMatches(req: ClientRequest, res: ServerResponse) {
    const matches = await prisma.matches.findMany();
    return matches;
  }
}
