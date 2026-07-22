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
 * Public Catalog: Fetches all published courses for the Landing Page.
 */
export const getAllPublishedCoursesDb = async () => {
  const courses = await prisma.course.findMany({
    where: {
      isPublished: true,
    },
    select: {
      id: true,
      title: true,
      imageUrl: true,
      description: true,
      isFree: true,
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

export const getCoursePlayDataDb = async (userId: string | undefined, courseId: string) => {
  const safeUserId = userId || "UNAUTHENTICATED_USER";
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
            where: { userId: safeUserId },
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
                where: { userId: safeUserId },
              },
            },
          },
        },
      },
    },
  });

  if (!coursePlayData) return null;

  // 2. Check if the user actually owns this course via UserProduct
  let isPurchased = false;
  if (userId) {
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
    isPurchased = ownershipCount > 0;
  }

  // 3. Return the data along with the ownership flag
  return {
    ...coursePlayData,
    isPurchased,
  };
};

// ==========================================
// ADMIN: CMS CREATION ENGINE
// ==========================================

export const getAdminCourseByIdDb = async (courseId: string) => {
  return await prisma.course.findUnique({
    where: { id: courseId },
    include: {
      chapters: {
        orderBy: { sortOrder: "asc" },
        include: {
          lessons: {
            orderBy: { sortOrder: "asc" },
          },
        },
      },
    },
  });
};


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
  data: { title: string },
) => {
  const course = await prisma.course.findUnique({
    where: { id: courseId },
  });

  if (!course) {
    throw new NotFoundError("Course not found.");
  }

  const highestChapter = await prisma.chapter.findFirst({
    where: { courseId },
    orderBy: { sortOrder: "desc" },
    select: { sortOrder: true },
  });

  const nextSortOrder = highestChapter ? highestChapter.sortOrder + 1 : 1;

  return await prisma.chapter.create({
    data: {
      ...data,
      sortOrder: nextSortOrder,
      courseId,
    },
  });
};

export const reorderChaptersDb = async (
  courseId: string,
  chapters: { id: string; sortOrder: number }[]
) => {
  // Use a transaction to safely update all sortOrders without hitting unique constraints.
  // One way to bypass unique constraint during swap is to temporarily negative them, or update them in a deferred way if the DB supports it.
  // Prisma's $transaction executes sequentially. To avoid unique constraint conflicts on [courseId, sortOrder], 
  // we first map them to negative sortOrders, then to the final ones.
  return await prisma.$transaction(async (tx) => {
    // 1. Shift them to a temporary negative space to free up the unique constraint slots
    for (const chapter of chapters) {
      await tx.chapter.update({
        where: { id: chapter.id },
        data: { sortOrder: -chapter.sortOrder },
      });
    }
    // 2. Assign the final positive sortOrders
    for (const chapter of chapters) {
      await tx.chapter.update({
        where: { id: chapter.id },
        data: { sortOrder: chapter.sortOrder },
      });
    }
    return true;
  });
};

export const createLessonDb = async (
  chapterId: string,
  data: {
    title: string;
    videoUrlOrId: string;
    durationSeconds: number;
    isProblem?: boolean;
    problemUrl?: string;
    explanationEndSeconds?: number;
  },
) => {
  const chapter = await prisma.chapter.findUnique({
    where: { id: chapterId },
    include: { course: true }
  });

  if (!chapter) {
    throw new NotFoundError("Chapter not found.");
  }

  const highestLesson = await prisma.lesson.findFirst({
    where: { chapterId },
    orderBy: { sortOrder: "desc" },
    select: { sortOrder: true },
  });

  const nextSortOrder = highestLesson ? highestLesson.sortOrder + 1 : 1;

  // Auto-calculate isPreview
  // Rule: First 2 lessons of the first chapter of a course are previews.
  let isPreview = false;
  if (chapter.sortOrder === 1 && nextSortOrder <= 2) {
    isPreview = true;
  }

  return await prisma.lesson.create({
    data: {
      ...data,
      sortOrder: nextSortOrder,
      isPreview,
      chapterId,
    },
  });
};

export const reorderLessonsDb = async (
  chapterId: string,
  lessons: { id: string; sortOrder: number }[]
) => {
  return await prisma.$transaction(async (tx) => {
    // 1. Move to negative space
    for (const lesson of lessons) {
      await tx.lesson.update({
        where: { id: lesson.id },
        data: { sortOrder: -lesson.sortOrder },
      });
    }
    // 2. Move to final space and recalculate isPreview if it's chapter 1
    const chapter = await tx.chapter.findUnique({ where: { id: chapterId } });
    const isFirstChapter = chapter?.sortOrder === 1;

    for (const lesson of lessons) {
      const isPreview = isFirstChapter && lesson.sortOrder <= 2;
      await tx.lesson.update({
        where: { id: lesson.id },
        data: { sortOrder: lesson.sortOrder, isPreview },
      });
    }
    return true;
  });
};