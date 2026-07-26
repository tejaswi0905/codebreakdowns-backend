import { z } from "zod";
export declare const createCourseSchema: z.ZodObject<{
    body: z.ZodObject<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
        isPublished: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        enforceLinearProgress: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        isFree: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const createChapterSchema: z.ZodObject<{
    body: z.ZodObject<{
        title: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const createLessonSchema: z.ZodObject<{
    body: z.ZodObject<{
        title: z.ZodString;
        imageUrl: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
        videoUrlOrId: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
        durationSeconds: z.ZodNumber;
        isProblem: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        problemUrl: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
        description: z.ZodOptional<z.ZodString>;
        explanationEndSeconds: z.ZodOptional<z.ZodNumber>;
        isPreview: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const updateLessonSchema: z.ZodObject<{
    body: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>>;
        videoUrlOrId: z.ZodOptional<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>>;
        durationSeconds: z.ZodOptional<z.ZodNumber>;
        isProblem: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
        problemUrl: z.ZodOptional<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>>;
        description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        explanationEndSeconds: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        isPreview: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const reorderSchema: z.ZodObject<{
    body: z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            sortOrder: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const createLessonBulkSchema: z.ZodObject<{
    body: z.ZodObject<{
        lessons: z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            imageUrl: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
            videoUrlOrId: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
            durationSeconds: z.ZodNumber;
            isProblem: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            problemUrl: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
            description: z.ZodOptional<z.ZodString>;
            explanationEndSeconds: z.ZodOptional<z.ZodNumber>;
            isPreview: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=courses.schemas.d.ts.map