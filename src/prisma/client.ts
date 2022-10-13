import { PrismaClient } from "@prisma/client";
import { env } from "process";

const prisma = new PrismaClient({});

export default prisma;
