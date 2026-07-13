import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Account: "Account";
    readonly Course: "Course";
    readonly Chapter: "Chapter";
    readonly Lesson: "Lesson";
    readonly Product: "Product";
    readonly ProductCourse: "ProductCourse";
    readonly UserProduct: "UserProduct";
    readonly Coupon: "Coupon";
    readonly LessonProgress: "LessonProgress";
    readonly ChapterState: "ChapterState";
    readonly InterviewSlot: "InterviewSlot";
    readonly InterviewPass: "InterviewPass";
    readonly InterviewBooking: "InterviewBooking";
    readonly Referral: "Referral";
    readonly PayoutRequest: "PayoutRequest";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly name: "name";
    readonly avatarUrl: "avatarUrl";
    readonly role: "role";
    readonly isActive: "isActive";
    readonly paymentGatewayCustomerId: "paymentGatewayCustomerId";
    readonly referralCode: "referralCode";
    readonly payoutUpiId: "payoutUpiId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const AccountScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly type: "type";
    readonly provider: "provider";
    readonly providerAccountId: "providerAccountId";
    readonly refresh_token: "refresh_token";
    readonly access_token: "access_token";
    readonly expires_at: "expires_at";
};
export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];
export declare const CourseScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly isPublished: "isPublished";
    readonly enforceLinearProgress: "enforceLinearProgress";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum];
export declare const ChapterScalarFieldEnum: {
    readonly id: "id";
    readonly courseId: "courseId";
    readonly title: "title";
    readonly sortOrder: "sortOrder";
};
export type ChapterScalarFieldEnum = (typeof ChapterScalarFieldEnum)[keyof typeof ChapterScalarFieldEnum];
export declare const LessonScalarFieldEnum: {
    readonly id: "id";
    readonly chapterId: "chapterId";
    readonly title: "title";
    readonly videoUrlOrId: "videoUrlOrId";
    readonly durationSeconds: "durationSeconds";
    readonly explanationEndSeconds: "explanationEndSeconds";
    readonly sortOrder: "sortOrder";
};
export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly priceInr: "priceInr";
    readonly isActive: "isActive";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const ProductCourseScalarFieldEnum: {
    readonly productId: "productId";
    readonly courseId: "courseId";
};
export type ProductCourseScalarFieldEnum = (typeof ProductCourseScalarFieldEnum)[keyof typeof ProductCourseScalarFieldEnum];
export declare const UserProductScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly productId: "productId";
    readonly transactionId: "transactionId";
    readonly validUntil: "validUntil";
    readonly createdAt: "createdAt";
};
export type UserProductScalarFieldEnum = (typeof UserProductScalarFieldEnum)[keyof typeof UserProductScalarFieldEnum];
export declare const CouponScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly discountPercentage: "discountPercentage";
    readonly maxUses: "maxUses";
    readonly timesUsed: "timesUsed";
    readonly validUntil: "validUntil";
    readonly isActive: "isActive";
};
export type CouponScalarFieldEnum = (typeof CouponScalarFieldEnum)[keyof typeof CouponScalarFieldEnum];
export declare const LessonProgressScalarFieldEnum: {
    readonly userId: "userId";
    readonly lessonId: "lessonId";
    readonly highestTimestampSecs: "highestTimestampSecs";
    readonly isCompleted: "isCompleted";
    readonly isBookmarked: "isBookmarked";
    readonly updatedAt: "updatedAt";
};
export type LessonProgressScalarFieldEnum = (typeof LessonProgressScalarFieldEnum)[keyof typeof LessonProgressScalarFieldEnum];
export declare const ChapterStateScalarFieldEnum: {
    readonly userId: "userId";
    readonly chapterId: "chapterId";
    readonly isUnlocked: "isUnlocked";
    readonly isCompleted: "isCompleted";
};
export type ChapterStateScalarFieldEnum = (typeof ChapterStateScalarFieldEnum)[keyof typeof ChapterStateScalarFieldEnum];
export declare const InterviewSlotScalarFieldEnum: {
    readonly id: "id";
    readonly startTime: "startTime";
    readonly status: "status";
};
export type InterviewSlotScalarFieldEnum = (typeof InterviewSlotScalarFieldEnum)[keyof typeof InterviewSlotScalarFieldEnum];
export declare const InterviewPassScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly totalCredits: "totalCredits";
    readonly usedCredits: "usedCredits";
    readonly validUntil: "validUntil";
    readonly transactionId: "transactionId";
    readonly status: "status";
};
export type InterviewPassScalarFieldEnum = (typeof InterviewPassScalarFieldEnum)[keyof typeof InterviewPassScalarFieldEnum];
export declare const InterviewBookingScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly slotId: "slotId";
    readonly meetingUrl: "meetingUrl";
    readonly status: "status";
    readonly transactionId: "transactionId";
    readonly passId: "passId";
};
export type InterviewBookingScalarFieldEnum = (typeof InterviewBookingScalarFieldEnum)[keyof typeof InterviewBookingScalarFieldEnum];
export declare const ReferralScalarFieldEnum: {
    readonly id: "id";
    readonly promoterId: "promoterId";
    readonly studentId: "studentId";
    readonly userProductId: "userProductId";
    readonly promoterEarningsInr: "promoterEarningsInr";
    readonly studentDiscountInr: "studentDiscountInr";
    readonly status: "status";
    readonly createdAt: "createdAt";
};
export type ReferralScalarFieldEnum = (typeof ReferralScalarFieldEnum)[keyof typeof ReferralScalarFieldEnum];
export declare const PayoutRequestScalarFieldEnum: {
    readonly id: "id";
    readonly promoterId: "promoterId";
    readonly amountInr: "amountInr";
    readonly status: "status";
    readonly paymentReference: "paymentReference";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PayoutRequestScalarFieldEnum = (typeof PayoutRequestScalarFieldEnum)[keyof typeof PayoutRequestScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map