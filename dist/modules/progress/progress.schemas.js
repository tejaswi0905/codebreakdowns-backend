// src/modules/progress/progress.schemas.ts
import { z } from "zod";
export const heartbeatSchema = z.object({
    lessonId: z.uuid("Invalid lesson ID format"),
    currentTime: z.number().int().nonnegative("Current time cannot be negative"),
});
export const toggleCompleteSchema = z.object({
    lessonId: z.uuid("Invalid lesson ID format"),
    isCompleted: z.boolean(),
});
export const toggleBookmarkSchema = z.object({
    lessonId: z.uuid("Invalid lesson ID format"),
    isBookmarked: z.boolean(),
});
//# sourceMappingURL=progress.schemas.js.map