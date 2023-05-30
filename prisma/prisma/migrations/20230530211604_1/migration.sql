-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "mail" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "full_name" VARCHAR(255) NOT NULL,
    "photo" VARCHAR(255) NOT NULL,
    "institution" VARCHAR(255) NOT NULL,
    "postal_code" VARCHAR(255) NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Certificate" (
    "id" SERIAL NOT NULL,
    "courseId" INTEGER NOT NULL,
    "classId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Certificate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Enrollment" (
    "id" SERIAL NOT NULL,
    "enrollment_date" INTEGER NOT NULL,
    "cancellation_reason" TEXT NOT NULL,
    "created_by" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_by" TIMESTAMP(3) NOT NULL,
    "userEnrollmentId" INTEGER NOT NULL,
    "classId" INTEGER NOT NULL,

    CONSTRAINT "Enrollment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Class" (
    "id" SERIAL NOT NULL,
    "start_date" INTEGER NOT NULL,
    "end_date" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "workload" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "CourseStatusId" INTEGER NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseCategory" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    CONSTRAINT "CourseCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseStatus" (
    "id" SERIAL NOT NULL,
    "status_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "CourseStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseTasks" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "external_link" VARCHAR(255) NOT NULL,
    "CourseId" INTEGER NOT NULL,
    "CompletedTaskId" INTEGER NOT NULL,

    CONSTRAINT "CourseTasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompletedTask" (
    "id" SERIAL NOT NULL,
    "userCompletedtaskId" INTEGER NOT NULL,
    "completed" INTEGER NOT NULL,
    "CourseTasksId" INTEGER NOT NULL,

    CONSTRAINT "CompletedTask_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Certificate_userId_key" ON "Certificate"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Enrollment_userEnrollmentId_key" ON "Enrollment"("userEnrollmentId");

-- CreateIndex
CREATE UNIQUE INDEX "Enrollment_classId_key" ON "Enrollment"("classId");

-- CreateIndex
CREATE UNIQUE INDEX "CompletedTask_CourseTasksId_key" ON "CompletedTask"("CourseTasksId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certificate" ADD CONSTRAINT "Certificate_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certificate" ADD CONSTRAINT "Certificate_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certificate" ADD CONSTRAINT "Certificate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_userEnrollmentId_fkey" FOREIGN KEY ("userEnrollmentId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "CourseCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_CourseStatusId_fkey" FOREIGN KEY ("CourseStatusId") REFERENCES "CourseStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseTasks" ADD CONSTRAINT "CourseTasks_CourseId_fkey" FOREIGN KEY ("CourseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedTask" ADD CONSTRAINT "CompletedTask_userCompletedtaskId_fkey" FOREIGN KEY ("userCompletedtaskId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedTask" ADD CONSTRAINT "CompletedTask_CourseTasksId_fkey" FOREIGN KEY ("CourseTasksId") REFERENCES "CourseTasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
