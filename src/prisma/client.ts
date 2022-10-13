import { PrismaClient } from "@prisma/client";
import { env } from "process";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

export default prisma;
