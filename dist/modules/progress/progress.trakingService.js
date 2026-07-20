// src/modules/progress/progress.service.ts
import { upsertHeartbeatDb, getLessonWithProgressDb, updateLessonCompletionDb, evaluateChapterWaterfallDb, toggleBookmarkDb, getStudentDashboardStatsDb, } from "./progress.dbService.js";
import { NotFoundError, ForbiddenError } from "../../shared/errors/AppError.js";
export const processHeartbeat = async (userId, lessonId, currentTime) => {
    // Ensure the lesson actually exists before recording progress
    const lesson = await getLessonWithProgressDb(userId, lessonId);
    if (!lesson) {
        throw new NotFoundError("Lesson not found.");
    }
    return await upsertHeartbeatDb(userId, lessonId, currentTime);
};
export const processToggleComplete = async (userId, lessonId, isCompleted) => {
    const lesson = await getLessonWithProgressDb(userId, lessonId);
    if (!lesson) {
        throw new NotFoundError("Lesson not found.");
    }
    // STRICT MODE GUARDRAIL: Only enforce if they are trying to check the box (isCompleted === true)
    if (isCompleted &&
        lesson.isProblem &&
        lesson.explanationEndSeconds !== null) {
        const currentProgress = lesson.progress[0];
        const watchedTime = currentProgress?.highestTimestampSecs || 0;
        if (watchedTime < lesson.explanationEndSeconds) {
            throw new ForbiddenError(`Strict Mode: You must watch the explanation (up to ${lesson.explanationEndSeconds}s) before marking this problem complete.`);
        }
    }
    const updatedProgress = await updateLessonCompletionDb(userId, lessonId, isCompleted);
    // If they completed the video, evaluate if we should unlock the next chapter!
    // Note: We don't re-lock chapters if they accidentally uncheck a video (isCompleted === false)
    if (isCompleted) {
        await evaluateChapterWaterfallDb(userId, lesson.chapter.id, lesson.chapter.course.id);
    }
    return updatedProgress;
};
export const processToggleBookmark = async (userId, lessonId, isBookmarked) => {
    const lesson = await getLessonWithProgressDb(userId, lessonId);
    if (!lesson) {
        throw new NotFoundError("Lesson not found.");
    }
    return await toggleBookmarkDb(userId, lessonId, isBookmarked);
};
export const getDashboardMetrics = async (userId) => {
    return await getStudentDashboardStatsDb(userId);
};
//# sourceMappingURL=progress.trakingService.js.map