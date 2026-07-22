/**
 * STEP 1 (Dashboard): Fetches high-level details of all courses a user has access to.
 * We traverse the bridge: Course -> ProductCourse -> Product -> UserProduct -> User
 */
export declare const getPurchasedCoursesDb: (userId: string) => Promise<{
    id: string;
    title: string;
    imageUrl: string | null;
    description: string | null;
    isFree: boolean;
}[]>;
/**
 * Public Catalog: Fetches all published courses for the Landing Page.
 */
export declare const getAllPublishedCoursesDb: () => Promise<{
    id: string;
    title: string;
    imageUrl: string | null;
    description: string | null;
    isFree: boolean;
}[]>;
/**
 * STEP 2 (Video Player): Fetches the complete payload for the video player.
 * Includes chapters, lessons, video URLs, and the user's specific progress.
 */
export declare const getCoursePlayDataDb: (userId: string | undefined, courseId: string) => Promise<{
    isPurchased: boolean;
    chapters: {
        id: string;
        title: string;
        sortOrder: number;
        lessons: {
            id: string;
            title: string;
            sortOrder: number;
            isProblem: boolean;
            problemUrl: string | null;
            videoUrlOrId: string;
            durationSeconds: number;
            explanationEndSeconds: number | null;
            isPreview: boolean;
            progress: {
                userId: string;
                updatedAt: Date;
                lessonId: string;
                isCompleted: boolean;
                isBookmarked: boolean;
                highestTimestampSecs: number;
            }[];
        }[];
        states: {
            userId: string;
            chapterId: string;
            isCompleted: boolean;
            isUnlocked: boolean;
        }[];
    }[];
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    imageUrl: string | null;
    description: string | null;
    isPublished: boolean;
    enforceLinearProgress: boolean;
    isFree: boolean;
} | null>;
export declare const createCourseDb: (data: {
    title: string;
    description?: string;
    imageUrl?: string;
    isPublished?: boolean;
    enforceLinearProgress?: boolean;
    isFree?: boolean;
}) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    imageUrl: string | null;
    description: string | null;
    isPublished: boolean;
    enforceLinearProgress: boolean;
    isFree: boolean;
}>;
export declare const createChapterDb: (courseId: string, data: {
    title: string;
    sortOrder: number;
}) => Promise<{
    id: string;
    title: string;
    sortOrder: number;
    courseId: string;
}>;
export declare const createLessonDb: (chapterId: string, data: {
    title: string;
    videoUrlOrId: string;
    durationSeconds: number;
    sortOrder: number;
    isProblem?: boolean;
    problemUrl?: string;
    explanationEndSeconds?: number;
    isPreview?: boolean;
}) => Promise<{
    id: string;
    title: string;
    sortOrder: number;
    chapterId: string;
    isProblem: boolean;
    problemUrl: string | null;
    videoUrlOrId: string;
    durationSeconds: number;
    explanationEndSeconds: number | null;
    isPreview: boolean;
}>;
//# sourceMappingURL=courses.dbService.d.ts.map