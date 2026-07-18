import { z } from "zod";
// ==========================================
// COURSE SCHEMAS
// ==========================================
export const createCourseSchema = z.object({
    body: z.object({
        title: z.string().min(3, "Title must be at least 3 characters long"),
        description: z.string().optional(),
        imageUrl: z.string().url("Must be a valid URL").optional(),
        isPublished: z.boolean().optional().default(false),
        enforceLinearProgress: z.boolean().optional().default(false),
    }),
});
// ==========================================
// CHAPTER SCHEMAS
// ==========================================
export const createChapterSchema = z.object({
    body: z.object({
        title: z
            .string()
            .min(3, "Chapter title must be at least 3 characters long"),
        sortOrder: z.number().int().min(1, "Sort order must be a positive integer"),
    }),
});
// ==========================================
// LESSON SCHEMAS
// ==========================================
// 1. Extract the base lesson logic so we can reuse it
const lessonBaseSchema = z
    .object({
    title: z.string().min(3, "Lesson title must be at least 3 characters"),
    imageUrl: z.string().url("Must be a valid URL").optional(),
    videoUrlOrId: z.string().min(1, "Video URL or ID is required"),
    durationSeconds: z
        .number()
        .int()
        .min(1, "Duration must be at least 1 second"),
    sortOrder: z.number().int().min(1, "Sort order must be a positive integer"),
    isProblem: z.boolean().optional().default(false),
    problemUrl: z
        .string()
        .url("Must be a valid URL")
        .optional()
        .or(z.literal("")),
    explanationEndSeconds: z.number().int().optional(),
})
    .refine((data) => {
    if (data.isProblem) {
        return !!data.problemUrl && data.explanationEndSeconds !== undefined;
    }
    return true;
}, {
    message: "If isProblem is true, problemUrl and explanationEndSeconds are required.",
    path: ["isProblem"],
});
// 2. The Single Lesson Schema
export const createLessonSchema = z.object({
    body: lessonBaseSchema,
});
// 3. The BULK Lesson Schema (Max 20 at a time to prevent timeouts)
export const createLessonBulkSchema = z.object({
    body: z.object({
        lessons: z
            .array(lessonBaseSchema)
            .min(1, "You must provide at least one lesson")
            .max(20, "To ensure stability, please submit a maximum of 20 lessons at a time"),
    }),
});
//# sourceMappingURL=courses.schemas.js.map