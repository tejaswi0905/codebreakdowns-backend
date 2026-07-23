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
    isFree: z.boolean().optional().default(false),
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
  }),
});

// ==========================================
// LESSON SCHEMAS
// ==========================================

// 1. Extract the base lesson logic so we can reuse it
const lessonBaseObject = z.object({
  title: z.string().min(3, "Lesson title must be at least 3 characters"),
  imageUrl: z.string().url("Must be a valid URL").optional(),
  videoUrlOrId: z.string().min(1, "Video URL or ID is required"),
  durationSeconds: z
    .number()
    .int()
    .min(1, "Duration must be at least 1 second"),
  isProblem: z.boolean().optional().default(false),
  problemUrl: z
    .string()
    .url("Must be a valid URL")
    .optional()
    .or(z.literal("")),
  explanationEndSeconds: z.number().int().optional(),
  isPreview: z.boolean().optional().default(false),
});

const lessonRefinement = (data: any) => {
  if (data.isProblem) {
    return !!data.problemUrl && data.explanationEndSeconds !== undefined;
  }
  return true;
};

const lessonRefinementOptions = {
  message: "If isProblem is true, problemUrl and explanationEndSeconds are required.",
  path: ["isProblem"],
};

// 2. The Single Lesson Schema
export const createLessonSchema = z.object({
  body: lessonBaseObject.refine(lessonRefinement, lessonRefinementOptions),
});

export const updateLessonSchema = z.object({
  body: lessonBaseObject.partial().refine(lessonRefinement, lessonRefinementOptions),
});

export const reorderSchema = z.object({
  body: z.object({
    items: z.array(
      z.object({
        id: z.string(),
        sortOrder: z.number().int().min(1),
      })
    ),
  }),
});

// 3. The BULK Lesson Schema (Max 20 at a time to prevent timeouts)
export const createLessonBulkSchema = z.object({
  body: z.object({
    lessons: z
      .array(lessonBaseObject.refine(lessonRefinement, lessonRefinementOptions))
      .min(1, "You must provide at least one lesson")
      .max(
        20,
        "To ensure stability, please submit a maximum of 20 lessons at a time",
      ),
  }),
});
