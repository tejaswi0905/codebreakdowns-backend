import { prisma } from "../../config/prisma.js";
import {
  NotFoundError,
  BadRequestError,
} from "../../shared/errors/AppError.js";

/**
 * STEP 1 (Dashboard): Fetches high-level details of all courses a user has access to.
 * We traverse the bridge: Course -> ProductCourse -> Product -> UserProduct -> User
 */
// export const getPurchasedCoursesDb = async (userId: string) => {
//   const courses = await prisma.course.findMany({
//     where: {
//       bundles: {
//         some: {
//           product: {
//             owners: {
//               some: {
//                 userId: userId,
//                 OR: [{ validUntil: null }, { validUntil: { gt: new Date() } }],
//               },
//             },
//           },
//         },
//       },
//       isPublished: true,
//     },
//     select: {
//       id: true,
//       title: true,
//       imageUrl: true,
//       description: true,
//     },
//     orderBy: {
//       createdAt: "desc",
//     },
//   });

//   return courses;
// };

export const getPurchasedCoursesDb = async (userId: string) => {
  const courses = await prisma.course.findMany({
    where: {
      isPublished: true,
      // NEW: Return if the course is free OR if the user owns a bundle containing it
      OR: [
        { isFree: true },
        {
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
      ],
    },
    select: {
      id: true,
      title: true,
      imageUrl: true,
      description: true,
      isFree: true, // Useful for UI badges
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
// export const getCoursePlayDataDb = async (userId: string, courseId: string) => {
//   // findFirst because we are looking for a specific ID, but we also want to
//   // apply the security 'where' clauses to ensure they own it.
//   const coursePlayData = await prisma.course.findFirst({
//     where: {
//       id: courseId,
//       isPublished: true,
//       // SECURITY: Ensure they actually own this specific course!
//       bundles: {
//         some: {
//           product: {
//             owners: {
//               some: {
//                 userId: userId,
//                 OR: [{ validUntil: null }, { validUntil: { gt: new Date() } }],
//               },
//             },
//           },
//         },
//       },
//     },
//     // INCLUSION: Fetch all the nested data in correct order
//     include: {
//       chapters: {
//         orderBy: { sortOrder: "asc" },
//         select: {
//           // Explicitly selecting fields using 'select' instead of 'include'
//           id: true,
//           title: true,
//           sortOrder: true,
//           // Attach the Chapter Unlock State for THIS specific user
//           states: {
//             where: { userId: userId },
//           },
//           lessons: {
//             orderBy: { sortOrder: "asc" },
//             select: {
//               id: true,
//               title: true,
//               isProblem: true,
//               problemUrl: true,
//               videoUrlOrId: true,
//               durationSeconds: true,
//               explanationEndSeconds: true,
//               sortOrder: true,
//               progress: {
//                 where: { userId: userId },
//               },
//             },
//           },
//         },
//       },
//     },
//   });

//   return coursePlayData;
// };

export const getCoursePlayDataDb = async (userId: string, courseId: string) => {
  // 1. Fetch the course WITHOUT the strict bundle lock so users can browse preview lessons!
  const coursePlayData = await prisma.course.findFirst({
    where: {
      id: courseId,
      isPublished: true,
    },
    include: {
      chapters: {
        orderBy: { sortOrder: "asc" },
        select: {
          id: true,
          title: true,
          sortOrder: true,
          states: {
            where: { userId: userId },
          },
          lessons: {
            orderBy: { sortOrder: "asc" },
            select: {
              id: true,
              title: true,
              isProblem: true,
              problemUrl: true,
              videoUrlOrId: true,
              durationSeconds: true,
              explanationEndSeconds: true,
              sortOrder: true,
              isPreview: true, // NEW: Explicitly select isPreview flag
              progress: {
                where: { userId: userId },
              },
            },
          },
        },
      },
    },
  });

  if (!coursePlayData) return null;

  // 2. Check if the user actually owns this course via UserProduct
  const ownershipCount = await prisma.userProduct.count({
    where: {
      userId: userId,
      OR: [{ validUntil: null }, { validUntil: { gt: new Date() } }],
      product: {
        courses: {
          some: { courseId: courseId },
        },
      },
    },
  });

  const isPurchased = ownershipCount > 0;

  // 3. Return the data along with the ownership flag
  return {
    ...coursePlayData,
    isPurchased,
  };
};

// ==========================================
// ADMIN: CMS CREATION ENGINE
// ==========================================

// export const createCourseDb = async (data: {
//   title: string;
//   description?: string;
//   imageUrl?: string; // New field added
//   isPublished?: boolean;
//   enforceLinearProgress?: boolean;
// }) => {
//   return await prisma.course.create({
//     data,
//   });
// };

export const createCourseDb = async (data: {
  title: string;
  description?: string;
  imageUrl?: string;
  isPublished?: boolean;
  enforceLinearProgress?: boolean;
  isFree?: boolean; // NEW
}) => {
  return await prisma.course.create({ data });
};

// (createChapterDb stays 100% untouched!)



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

// export const createLessonDb = async (
//   chapterId: string,
//   data: {
//     title: string;
//     videoUrlOrId: string;
//     durationSeconds: number;
//     sortOrder: number;
//     isProblem?: boolean;
//     problemUrl?: string;
//     explanationEndSeconds?: number;
//   },
// ) => {
//   const chapter = await prisma.chapter.findUnique({
//     where: { id: chapterId },
//   });

//   if (!chapter) {
//     throw new NotFoundError("Chapter not found.");
//   }

//   return await prisma.lesson.create({
//     data: {
//       ...data,
//       chapterId,
//     },
//   });
// };

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
    isPreview?: boolean; // NEW
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