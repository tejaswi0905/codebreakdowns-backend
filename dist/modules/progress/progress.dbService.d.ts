/**
 * Only increments highestTimestampSecs if the incoming currentTime is greater
 * than what is currently saved in the database.
 */
export declare const upsertHeartbeatDb: (userId: string, lessonId: string, currentTime: number) => Promise<{
    userId: string;
    updatedAt: Date;
    lessonId: string;
    isCompleted: boolean;
    isBookmarked: boolean;
    highestTimestampSecs: number;
}>;
/**
 * Fetches the lesson along with its parent course strict-mode configuration
 * and the user's current progress record.
 */
export declare const getLessonWithProgressDb: (userId: string, lessonId: string) => Promise<({
    chapter: {
        id: string;
        course: {
            id: string;
            enforceLinearProgress: boolean;
        };
        sortOrder: number;
    };
    progress: {
        userId: string;
        updatedAt: Date;
        lessonId: string;
        isCompleted: boolean;
        isBookmarked: boolean;
        highestTimestampSecs: number;
    }[];
} & {
    id: string;
    title: string;
    sortOrder: number;
    chapterId: string;
    isProblem: boolean;
    problemUrl: string | null;
    videoUrlOrId: string;
    durationSeconds: number;
    explanationEndSeconds: number | null;
}) | null>;
export declare const updateLessonCompletionDb: (userId: string, lessonId: string, isCompleted: boolean) => Promise<{
    userId: string;
    updatedAt: Date;
    lessonId: string;
    isCompleted: boolean;
    isBookmarked: boolean;
    highestTimestampSecs: number;
}>;
/**
 * The Waterfall Engine: Evaluates if all lessons in a chapter are complete.
 * If yes, marks the current chapter completed and unlocks the next sequential chapter.
 */
export declare const evaluateChapterWaterfallDb: (userId: string, chapterId: string, courseId: string) => Promise<boolean>;
export declare const toggleBookmarkDb: (userId: string, lessonId: string, isBookmarked: boolean) => Promise<{
    userId: string;
    updatedAt: Date;
    lessonId: string;
    isCompleted: boolean;
    isBookmarked: boolean;
    highestTimestampSecs: number;
}>;
/**
 * Runs 4 concurrent queries to dynamically compute homepage metrics in <5ms.
 */
export declare const getStudentDashboardStatsDb: (userId: string) => Promise<{
    metrics: {
        lessonsAccessed: number;
        lessonsCompleted: number;
        hoursLearned: number;
        bookmarksCount: number;
    };
    resumePoint: {
        lessonId: string;
        title: string;
        timestamp: number;
    } | null;
}>;
//# sourceMappingURL=progress.dbService.d.ts.map