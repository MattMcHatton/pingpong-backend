/*
  Warnings:

  - You are about to drop the column `user_id` on the `Matches` table. All the data in the column will be lost.
  - Added the required column `away_user_id` to the `Matches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `home_user_id` to the `Matches` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Matches" DROP CONSTRAINT "away_match_fk";

-- DropForeignKey
ALTER TABLE "Matches" DROP CONSTRAINT "home_match_fk";

-- AlterTable
ALTER TABLE "Matches" DROP COLUMN "user_id",
ADD COLUMN     "away_user_id" TEXT NOT NULL,
ADD COLUMN     "home_user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Matches" ADD CONSTRAINT "home_match_fk" FOREIGN KEY ("home_user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matches" ADD CONSTRAINT "away_match_fk" FOREIGN KEY ("away_user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
