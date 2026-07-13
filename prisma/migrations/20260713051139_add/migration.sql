-- AlterTable
ALTER TABLE "Lesson" ADD COLUMN     "isProblem" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "problemUrl" TEXT;
