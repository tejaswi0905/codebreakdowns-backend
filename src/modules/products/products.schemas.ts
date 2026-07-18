import { z } from "zod";

export const createProductSchema = z.object({
  body: z.object({
    title: z.string().min(3, "Title must be at least 3 characters long"),
    description: z.string().optional(),
    imageUrl: z.string().url("Must be a valid URL").optional(),
    priceInr: z.number().int().min(0, "Price cannot be negative"),
    compareAtPriceInr: z.number().int().min(0).optional(),
    isActive: z.boolean().optional().default(true),
  }),
});

export const updateProductSchema = z.object({
  body: z.object({
    title: z.string().min(3).optional(),
    description: z.string().optional(),
    imageUrl: z.string().url().optional(),
    priceInr: z.number().int().min(0).optional(),
    compareAtPriceInr: z.number().int().min(0).optional(),
    isActive: z.boolean().optional(),
  }),
});

export const linkCourseSchema = z.object({
  body: z.object({
    courseId: z.string().uuid("Invalid Course ID"),
  }),
});
