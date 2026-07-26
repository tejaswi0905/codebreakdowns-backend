export declare const processHeartbeat: (userId: string, lessonId: string, currentTime: number) => Promise<{
    userId: string;
    updatedAt: Date;
    lessonId: string;
    highestTimestampSecs: number;
    isCompleted: boolean;
    isBookmarked: boolean;
}>;
export declare const processToggleComplete: (userId: string, lessonId: string, isCompleted: boolean) => Promise<{
    userId: string;
    updatedAt: Date;
    lessonId: string;
    highestTimestampSecs: number;
    isCompleted: boolean;
    isBookmarked: boolean;
}>;
export declare const processToggleBookmark: (userId: string, lessonId: string, isBookmarked: boolean) => Promise<{
    userId: string;
    updatedAt: Date;
    lessonId: string;
    highestTimestampSecs: number;
    isCompleted: boolean;
    isBookmarked: boolean;
}>;
export declare const getDashboardMetrics: (userId: string) => Promise<{
    metrics: {
        lessonsAccessed: number;
        lessonsCompleted: number;
        hoursLearned: number;
        bookmarksCount: number;
    };
    resumePoint: {
        lessonId: string;
        courseId: string;
        title: string;
        timestamp: number;
    } | null;
}>;
//# sourceMappingURL=progress.trakingService.d.ts.map