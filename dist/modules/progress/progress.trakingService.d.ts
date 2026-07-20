export declare const processHeartbeat: (userId: string, lessonId: string, currentTime: number) => Promise<{
    userId: string;
    updatedAt: Date;
    lessonId: string;
    isCompleted: boolean;
    isBookmarked: boolean;
    highestTimestampSecs: number;
}>;
export declare const processToggleComplete: (userId: string, lessonId: string, isCompleted: boolean) => Promise<{
    userId: string;
    updatedAt: Date;
    lessonId: string;
    isCompleted: boolean;
    isBookmarked: boolean;
    highestTimestampSecs: number;
}>;
export declare const processToggleBookmark: (userId: string, lessonId: string, isBookmarked: boolean) => Promise<{
    userId: string;
    updatedAt: Date;
    lessonId: string;
    isCompleted: boolean;
    isBookmarked: boolean;
    highestTimestampSecs: number;
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
        title: string;
        timestamp: number;
    } | null;
}>;
//# sourceMappingURL=progress.trakingService.d.ts.map