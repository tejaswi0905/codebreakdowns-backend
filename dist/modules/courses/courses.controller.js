import axios from "axios";
import { catchAsync } from "../../shared/errors/catchAsync.js";
import { sendSuccess } from "../../shared/utils/apiResopnse.js";
import { prisma } from "../../config/prisma.js";
import { getPurchasedCoursesDb, getAllPublishedCoursesDb, getCoursePlayDataDb, createCourseDb, createChapterDb, createLessonDb, reorderChaptersDb, reorderLessonsDb, getAdminCourseByIdDb, } from "./courses.dbService.js";
import { generateBunnyVideoToken } from "../../utils/bunny.js";
import { createCourseSchema, createChapterSchema, createLessonSchema, reorderSchema, } from "./courses.schemas.js";
import { NotFoundError, BadRequestError, InternalServerError, } from "../../shared/errors/AppError.js";
export const getMyCourses = catchAsync(async (req, res) => {
    const userId = req.user.id;
    const courses = await getPurchasedCoursesDb(userId);
    sendSuccess(res, 200, courses, "Purchased courses fetched successfully");
});
export const getAllPublishedCourses = catchAsync(async (req, res) => {
    const courses = await getAllPublishedCoursesDb();
    sendSuccess(res, 200, courses, "Published courses fetched successfully");
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
export const getCoursePlayData = catchAsync(async (req, res) => {
    const userId = req.user?.id;
    const { courseId } = req.params;
    const playData = await getCoursePlayDataDb(userId, courseId);
    if (!playData) {
        throw new NotFoundError("Course not found or is not published yet.");
    }
    // Extract our permissions from the DB response
    const isCourseFree = playData.isFree;
    const isPurchased = playData.isPurchased;
    // Secure the video URLs: Only generate Bunny tokens if they have legal access!
    const securedPlayData = {
        ...playData,
        chapters: playData.chapters.map((chapter) => ({
            ...chapter,
            lessons: chapter.lessons.map((lesson) => {
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
export const reorderChapters = catchAsync(async (req, res) => {
    const { courseId } = req.params;
    const parseResult = reorderSchema.safeParse({ body: req.body });
    if (!parseResult.success) {
        throw new BadRequestError(`Validation failed`);
    }
    const course = await prisma.course.findUnique({ where: { id: courseId } });
    if (course?.enforceLinearProgress) {
        throw new BadRequestError("Cannot reorder chapters when linear progress is enforced");
    }
    await reorderChaptersDb(courseId, parseResult.data.body.items);
    sendSuccess(res, 200, null, "Chapters reordered successfully");
});
export const reorderLessons = catchAsync(async (req, res) => {
    const { chapterId } = req.params;
    const parseResult = reorderSchema.safeParse({ body: req.body });
    if (!parseResult.success) {
        throw new BadRequestError(`Validation failed`);
    }
    const chapter = await prisma.chapter.findUnique({
        where: { id: chapterId },
        include: { course: true }
    });
    if (chapter?.course?.enforceLinearProgress) {
        throw new BadRequestError("Cannot reorder lessons when linear progress is enforced");
    }
    await reorderLessonsDb(chapterId, parseResult.data.body.items);
    sendSuccess(res, 200, null, "Lessons reordered successfully");
});
export const getAdminCourseById = catchAsync(async (req, res) => {
    const { courseId } = req.params;
    const course = await getAdminCourseByIdDb(courseId);
    if (!course)
        throw new NotFoundError("Course not found");
    sendSuccess(res, 200, course, "Admin course fetched successfully");
});
export const getBunnyVideoDuration = catchAsync(async (req, res) => {
    const { videoUrl } = req.query;
    if (!videoUrl || typeof videoUrl !== 'string') {
        throw new BadRequestError("videoUrl query parameter is required");
    }
    // Extract the Video ID (which is always a UUID) from whatever URL format they pasted
    const match = videoUrl.match(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/);
    const videoId = match ? match[0] : videoUrl;
    const libraryId = process.env.bunnyNetVideoLibId;
    const apiKey = process.env.bunnyNetReadOnlyApiKey || process.env.bunnyNetApiKey;
    if (!libraryId || !apiKey) {
        throw new InternalServerError("Bunny.net API keys are missing in backend configuration.");
    }
    try {
        const response = await axios.get(`https://video.bunnycdn.com/library/${libraryId}/videos/${videoId}`, {
            headers: {
                "AccessKey": apiKey,
                "Accept": "application/json"
            }
        });
        const durationSeconds = response.data.length || 0;
        let title = response.data.title || "";
        // Optionally remove file extensions like .mp4, .mkv from the auto-detected title
        if (title) {
            title = title.replace(/\.[^/.]+$/, "");
        }
        sendSuccess(res, 200, { durationSeconds, title }, "Fetched video metadata");
    }
    catch (error) {
        console.error("Bunny API Error:", error.response?.data || error.message);
        throw new InternalServerError("Failed to fetch video metadata from Bunny.net");
    }
});
//# sourceMappingURL=courses.controller.js.map