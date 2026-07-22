import type { Request, Response } from "express";
import { catchAsync } from "../../shared/errors/catchAsync.js";
import { sendSuccess } from "../../shared/utils/apiResopnse.js";
import {
  getPurchasedCoursesDb,
  getCoursePlayDataDb,
  createCourseDb,
  createChapterDb,
  createLessonDb,
} from "./courses.dbService.js";
import { generateBunnyVideoToken } from "../../utils/bunny.js";
import {
  createCourseSchema,
  createChapterSchema,
  createLessonSchema,
} from "./courses.schemas.js";

import {
  NotFoundError,
  BadRequestError,
} from "../../shared/errors/AppError.js";

export const getMyCourses = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user!.id;
  const courses = await getPurchasedCoursesDb(userId);
  sendSuccess(res, 200, courses, "Purchased courses fetched successfully");
});

// export const getCoursePlayData = catchAsync(
//   async (req: Request, res: Response) => {
//     const userId = req.user!.id;
//     const { courseId } = req.params;

//     const playData = await getCoursePlayDataDb(userId, courseId as string);

//     // If the query returns null, it means either the course doesn't exist,
//     // OR the user hasn't bought it (the security check failed).
//     if (!playData) {
//       throw new NotFoundError(
//         "Course not found, or you do not have access to it.",
//       );
//     }

//     // Secure the video URLs using Bunny Stream Token Authentication
//     // We create a new object rather than mutating the Prisma result directly
//     // to satisfy strict TypeScript typings.
//     const securedPlayData = {
//       ...playData,
//       chapters: (playData as any).chapters.map((chapter: any) => ({
//         ...chapter,
//         lessons: chapter.lessons.map((lesson: any) => ({
//           ...lesson,
//           videoUrlOrId: generateBunnyVideoToken(lesson.videoUrlOrId),
//         })),
//       })),
//     };

//     sendSuccess(res, 200, securedPlayData, "Course play data fetched successfully");
//   },
// );

export const getCoursePlayData = catchAsync(
  async (req: Request, res: Response) => {
    const userId = req.user!.id;
    const { courseId } = req.params;

    const playData = await getCoursePlayDataDb(userId, courseId as string);

    if (!playData) {
      throw new NotFoundError("Course not found or is not published yet.");
    }

    // Extract our permissions from the DB response
    const isCourseFree = (playData as any).isFree;
    const isPurchased = (playData as any).isPurchased;

    // Secure the video URLs: Only generate Bunny tokens if they have legal access!
    const securedPlayData = {
      ...playData,
      chapters: (playData as any).chapters.map((chapter: any) => ({
        ...chapter,
        lessons: chapter.lessons.map((lesson: any) => {
          
          // THE MASTER GATE: Do they have the right to watch this specific video?
          const hasAccess = isCourseFree || isPurchased || lesson.isPreview;

          return {
            ...lesson,
            // If they have access, generate token. If locked, return null!
            videoUrlOrId: hasAccess
              ? generateBunnyVideoToken(lesson.videoUrlOrId)
              : null,
            // Pass isLocked to the frontend so Vercel renders a Lock icon 🔒
            isLocked: !hasAccess, 
          };
        }),
      })),
    };

    sendSuccess(res, 200, securedPlayData, "Course play data fetched successfully");
  },
);

export const createCourse = catchAsync(async (req: Request, res: Response) => {
  const parseResult = createCourseSchema.safeParse({ body: req.body });

  if (!parseResult.success) {
    // Switched to .issues and typed err as any to satisfy strict mode
    const errorMessages = parseResult.error.issues
      .map((err: any) => err.message)
      .join(", ");
    throw new BadRequestError(`Validation failed: ${errorMessages}`);
  }

  // Cast the payload to exactly what the DB Service expects to bypass exactOptionalPropertyTypes
  const newCourse = await createCourseDb(
    parseResult.data.body as Parameters<typeof createCourseDb>[0],
  );

  sendSuccess(res, 201, newCourse, "Course created successfully");
});

/**
 * @route   POST /api/v1/courses/:courseId/chapters
 * @desc    Create a chapter inside a specific course
 * @access  Strictly Admin
 */
export const createChapter = catchAsync(async (req: Request, res: Response) => {
  const { courseId } = req.params;

  const parseResult = createChapterSchema.safeParse({ body: req.body });

  if (!parseResult.success) {
    const errorMessages = parseResult.error.issues
      .map((err: any) => err.message)
      .join(", ");
    throw new BadRequestError(`Validation failed: ${errorMessages}`);
  }

  const newChapter = await createChapterDb(
    courseId as string,
    parseResult.data.body as Parameters<typeof createChapterDb>[1],
  );

  sendSuccess(res, 201, newChapter, "Chapter created successfully");
});

/**
 * @route   POST /api/v1/courses/:courseId/chapters/:chapterId/lessons
 * @desc    Create a lesson inside a specific chapter
 * @access  Strictly Admin
 */
export const createLesson = catchAsync(async (req: Request, res: Response) => {
  const { chapterId } = req.params;

  const parseResult = createLessonSchema.safeParse({ body: req.body });

  if (!parseResult.success) {
    const errorMessages = parseResult.error.issues
      .map((err: any) => err.message)
      .join(", ");
    throw new BadRequestError(`Validation failed: ${errorMessages}`);
  }

  const newLesson = await createLessonDb(
    chapterId as string,
    parseResult.data.body as Parameters<typeof createLessonDb>[1],
  );

  sendSuccess(res, 201, newLesson, "Lesson created successfully");
});
