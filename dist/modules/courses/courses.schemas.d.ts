import { z } from "zod";
export declare const createCourseSchema: z.ZodObject<{
    body: z.ZodObject<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        isPublished: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        enforceLinearProgress: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const createChapterSchema: z.ZodObject<{
    body: z.ZodObject<{
        title: z.ZodString;
        sortOrder: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const createLessonSchema: z.ZodObject<{
    body: z.ZodObject<{
        title: z.ZodString;
        imageUrl: z.ZodOptional<z.ZodString>;
        videoUrlOrId: z.ZodString;
        durationSeconds: z.ZodNumber;
        sortOrder: z.ZodNumber;
        isProblem: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        problemUrl: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
        explanationEndSeconds: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const createLessonBulkSchema: z.ZodObject<{
    body: z.ZodObject<{
        lessons: z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            imageUrl: z.ZodOptional<z.ZodString>;
            videoUrlOrId: z.ZodString;
            durationSeconds: z.ZodNumber;
            sortOrder: z.ZodNumber;
            isProblem: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            problemUrl: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
            explanationEndSeconds: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=courses.schemas.d.ts.map