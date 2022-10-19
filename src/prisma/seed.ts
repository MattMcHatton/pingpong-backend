import { PrismaClient } from "@prisma/client";
import moment from "moment";
import { faker } from "@faker-js/faker";

const randomName = faker.name.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

const prisma = new PrismaClient();
async function main() {
  //Create Users
  const home_user = await prisma.user.create({
    data: {
      email: "matt.mchatton@test.com",
      name: "Matt McHatton",
      created_at: moment().format("M/D/YYYY HH:mm:ss").toString(),
      updated_at: moment().format("M/D/YYYY HH:mm:ss").toString(),
    },
  });
  const away_user = await prisma.user.create({
    data: {
      email: "brandon.harper@test.com",
      name: "Brandon Harper",
      created_at: moment().format("M/D/YYYY HH:mm:ss").toString(),
      updated_at: moment().format("M/D/YYYY HH:mm:ss").toString(),
    },
  });

  //Create Matches
  let matches = [];
  for (let i = 0; i <= 3; i++) {
    let match = await prisma.matches.create({
      data: {
        home_user: {
          connect: {
            id: home_user.id,
          },
        },
        away_user: {
          connect: {
            id: away_user.id,
          },
        },
        home_score: Number(faker.random.numeric()),
        away_score: Number(faker.random.numeric()),
        date: moment().format("M/D/YYYY").toString(),
      },
    });
    matches.push(match);
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
