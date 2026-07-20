import { z } from "zod";
export declare const heartbeatSchema: z.ZodObject<{
    lessonId: z.ZodUUID;
    currentTime: z.ZodNumber;
}, z.core.$strip>;
export declare const toggleCompleteSchema: z.ZodObject<{
    lessonId: z.ZodUUID;
    isCompleted: z.ZodBoolean;
}, z.core.$strip>;
export declare const toggleBookmarkSchema: z.ZodObject<{
    lessonId: z.ZodUUID;
    isBookmarked: z.ZodBoolean;
}, z.core.$strip>;
export type HeartbeatInput = z.infer<typeof heartbeatSchema>;
export type ToggleCompleteInput = z.infer<typeof toggleCompleteSchema>;
export type ToggleBookmarkInput = z.infer<typeof toggleBookmarkSchema>;
//# sourceMappingURL=progress.schemas.d.ts.map