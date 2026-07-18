import { catchAsync } from "../../shared/errors/catchAsync.js";
import { sendSuccess } from "../../shared/utils/apiResopnse.js";
import { getPurchasedCoursesDb, getCoursePlayDataDb, createCourseDb, createChapterDb, createLessonDb, } from "./courses.dbService.js";
import { createCourseSchema, createChapterSchema, createLessonSchema, } from "./courses.schemas.js";
import { NotFoundError, BadRequestError, } from "../../shared/errors/AppError.js";
export const getMyCourses = catchAsync(async (req, res) => {
    const userId = req.user.id;
    const courses = await getPurchasedCoursesDb(userId);
    sendSuccess(res, 200, courses, "Purchased courses fetched successfully");
});
export const getCoursePlayData = catchAsync(async (req, res) => {
    const userId = req.user.id;
    const { courseId } = req.params;
    const playData = await getCoursePlayDataDb(userId, courseId);
    // If the query returns null, it means either the course doesn't exist,
    // OR the user hasn't bought it (the security check failed).
    if (!playData) {
        throw new NotFoundError("Course not found, or you do not have access to it.");
    }
    sendSuccess(res, 200, playData, "Course play data fetched successfully");
});
export const createCourse = catchAsync(async (req, res) => {
    const parseResult = createCourseSchema.safeParse({ body: req.body });
    if (!parseResult.success) {
        // Switched to .issues and typed err as any to satisfy strict mode
        const errorMessages = parseResult.error.issues
            .map((err) => err.message)
            .join(", ");
        throw new BadRequestError(`Validation failed: ${errorMessages}`);
    }
    // Cast the payload to exactly what the DB Service expects to bypass exactOptionalPropertyTypes
    const newCourse = await createCourseDb(parseResult.data.body);
    sendSuccess(res, 201, newCourse, "Course created successfully");
});
/**
 * @route   POST /api/v1/courses/:courseId/chapters
 * @desc    Create a chapter inside a specific course
 * @access  Strictly Admin
 */
export const createChapter = catchAsync(async (req, res) => {
    const { courseId } = req.params;
    const parseResult = createChapterSchema.safeParse({ body: req.body });
    if (!parseResult.success) {
        const errorMessages = parseResult.error.issues
            .map((err) => err.message)
            .join(", ");
        throw new BadRequestError(`Validation failed: ${errorMessages}`);
    }
    const newChapter = await createChapterDb(courseId, parseResult.data.body);
    sendSuccess(res, 201, newChapter, "Chapter created successfully");
});
/**
 * @route   POST /api/v1/courses/:courseId/chapters/:chapterId/lessons
 * @desc    Create a lesson inside a specific chapter
 * @access  Strictly Admin
 */
export const createLesson = catchAsync(async (req, res) => {
    const { chapterId } = req.params;
    const parseResult = createLessonSchema.safeParse({ body: req.body });
    if (!parseResult.success) {
        const errorMessages = parseResult.error.issues
            .map((err) => err.message)
            .join(", ");
        throw new BadRequestError(`Validation failed: ${errorMessages}`);
    }
    const newLesson = await createLessonDb(chapterId, parseResult.data.body);
    sendSuccess(res, 201, newLesson, "Lesson created successfully");
});
//# sourceMappingURL=courses.controller.js.map