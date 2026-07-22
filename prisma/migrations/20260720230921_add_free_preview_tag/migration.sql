-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "isFree" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Lesson" ADD COLUMN     "isPreview" BOOLEAN NOT NULL DEFAULT false;
