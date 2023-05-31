-- AlterTable
ALTER TABLE "CompletedTask" ADD COLUMN     "courseTasksId" INTEGER;

-- AddForeignKey
ALTER TABLE "CompletedTask" ADD CONSTRAINT "CompletedTask_courseTasksId_fkey" FOREIGN KEY ("courseTasksId") REFERENCES "CourseTasks"("id") ON DELETE SET NULL ON UPDATE CASCADE;
