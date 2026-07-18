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

export type HeartbeatInput = z.infer<typeof heartbeatSchema>;
export type ToggleCompleteInput = z.infer<typeof toggleCompleteSchema>;
export type ToggleBookmarkInput = z.infer<typeof toggleBookmarkSchema>;
