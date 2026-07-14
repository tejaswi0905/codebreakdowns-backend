import { prisma } from "../../config/prisma.js";
import {
  NotFoundError,
  BadRequestError,
} from "../../shared/errors/AppError.js";

/**
 * STEP 1 (Dashboard): Fetches high-level details of all courses a user has access to.
 * We traverse the bridge: Course -> ProductCourse -> Product -> UserProduct -> User
 */
export const getPurchasedCoursesDb = async (userId: string) => {
  const courses = await prisma.course.findMany({
    where: {
      bundles: {
        some: {
          product: {
            owners: {
              some: {
                userId: userId,
                OR: [{ validUntil: null }, { validUntil: { gt: new Date() } }],
              },
            },
          },
        },
      },
      isPublished: true,
    },
    select: {
      id: true,
      title: true,
      imageUrl: true,
      description: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return courses;
};

/**
 * STEP 2 (Video Player): Fetches the complete payload for the video player.
 * Includes chapters, lessons, video URLs, and the user's specific progress.
 */
export const getCoursePlayDataDb = async (userId: string, courseId: string) => {
  // findFirst because we are looking for a specific ID, but we also want to
  // apply the security 'where' clauses to ensure they own it.
  const coursePlayData = await prisma.course.findFirst({
    where: {
      id: courseId,
      isPublished: true,
      // SECURITY: Ensure they actually own this specific course!
      bundles: {
        some: {
          product: {
            owners: {
              some: {
                userId: userId,
                OR: [{ validUntil: null }, { validUntil: { gt: new Date() } }],
              },
            },
          },
        },
      },
    },
    // INCLUSION: Fetch all the nested data in correct order
    include: {
      chapters: {
        orderBy: { sortOrder: "asc" },
        include: {
          // Attach the Chapter Unlock State for THIS specific user
          id: true,
          title: true,
          sortOrder: true,
          states: {
            where: { userId: userId },
          },
          lessons: {
            orderBy: { sortOrder: "asc" },
            include: {
              id: true,
              title: true,
              isProblem: true,
              problemUrl: true,
              videoUrlOrId: true,
              durationSeconds: true,
              explanationEndSeconds: true,
              sortOrder: true,
              progress: {
                where: { userId: userId },
              },
            },
          },
        },
      },
    },
  });

  return coursePlayData;
};

// ==========================================
// ADMIN: CMS CREATION ENGINE
// ==========================================

export const createCourseDb = async (data: {
  title: string;
  description?: string;
  imageUrl?: string; // New field added
  isPublished?: boolean;
  enforceLinearProgress?: boolean;
}) => {
  return await prisma.course.create({
    data,
  });
};

export const createChapterDb = async (
  courseId: string,
  data: { title: string; sortOrder: number },
) => {
  const course = await prisma.course.findUnique({
    where: { id: courseId },
    select: { enforceLinearProgress: true },
  });

  if (!course) {
    throw new NotFoundError("Course not found.");
  }

  if (course.enforceLinearProgress) {
    const highestChapter = await prisma.chapter.findFirst({
      where: { courseId },
      orderBy: { sortOrder: "desc" },
      select: { sortOrder: true },
    });

    if (highestChapter && data.sortOrder <= highestChapter.sortOrder) {
      throw new BadRequestError(
        `Strict courses only allow appending chapters to the end.`,
      );
    }
  }

  return await prisma.chapter.create({
    data: {
      ...data,
      courseId,
    },
  });
};

export const createLessonDb = async (
  chapterId: string,
  data: {
    title: string;
    videoUrlOrId: string;
    durationSeconds: number;
    sortOrder: number;
    isProblem?: boolean;
    problemUrl?: string;
    explanationEndSeconds?: number;
  },
) => {
  const chapter = await prisma.chapter.findUnique({
    where: { id: chapterId },
  });

  if (!chapter) {
    throw new NotFoundError("Chapter not found.");
  }

  return await prisma.lesson.create({
    data: {
      ...data,
      chapterId,
    },
  });
};
