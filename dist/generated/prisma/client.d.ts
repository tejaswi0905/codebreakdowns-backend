import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model Account
 *
 */
export type Account = Prisma.AccountModel;
/**
 * Model Course
 *
 */
export type Course = Prisma.CourseModel;
/**
 * Model Chapter
 *
 */
export type Chapter = Prisma.ChapterModel;
/**
 * Model Lesson
 *
 */
export type Lesson = Prisma.LessonModel;
/**
 * Model Product
 *
 */
export type Product = Prisma.ProductModel;
/**
 * Model ProductCourse
 *
 */
export type ProductCourse = Prisma.ProductCourseModel;
/**
 * Model UserProduct
 *
 */
export type UserProduct = Prisma.UserProductModel;
/**
 * Model Coupon
 *
 */
export type Coupon = Prisma.CouponModel;
/**
 * Model LessonProgress
 *
 */
export type LessonProgress = Prisma.LessonProgressModel;
/**
 * Model ChapterState
 *
 */
export type ChapterState = Prisma.ChapterStateModel;
/**
 * Model InterviewSlot
 *
 */
export type InterviewSlot = Prisma.InterviewSlotModel;
/**
 * Model InterviewPass
 *
 */
export type InterviewPass = Prisma.InterviewPassModel;
/**
 * Model InterviewBooking
 *
 */
export type InterviewBooking = Prisma.InterviewBookingModel;
/**
 * Model Referral
 *
 */
export type Referral = Prisma.ReferralModel;
/**
 * Model PayoutRequest
 *
 */
export type PayoutRequest = Prisma.PayoutRequestModel;
//# sourceMappingURL=client.d.ts.map