import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
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
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
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
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.user`: Exposes CRUD operations for the **User** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Users
  * const users = await prisma.user.findMany()
  * ```
  */
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.account`: Exposes CRUD operations for the **Account** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Accounts
      * const accounts = await prisma.account.findMany()
      * ```
      */
    get account(): Prisma.AccountDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.course`: Exposes CRUD operations for the **Course** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Courses
      * const courses = await prisma.course.findMany()
      * ```
      */
    get course(): Prisma.CourseDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.chapter`: Exposes CRUD operations for the **Chapter** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Chapters
      * const chapters = await prisma.chapter.findMany()
      * ```
      */
    get chapter(): Prisma.ChapterDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.lesson`: Exposes CRUD operations for the **Lesson** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Lessons
      * const lessons = await prisma.lesson.findMany()
      * ```
      */
    get lesson(): Prisma.LessonDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.product`: Exposes CRUD operations for the **Product** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Products
      * const products = await prisma.product.findMany()
      * ```
      */
    get product(): Prisma.ProductDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.productCourse`: Exposes CRUD operations for the **ProductCourse** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProductCourses
      * const productCourses = await prisma.productCourse.findMany()
      * ```
      */
    get productCourse(): Prisma.ProductCourseDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.userProduct`: Exposes CRUD operations for the **UserProduct** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more UserProducts
      * const userProducts = await prisma.userProduct.findMany()
      * ```
      */
    get userProduct(): Prisma.UserProductDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.coupon`: Exposes CRUD operations for the **Coupon** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Coupons
      * const coupons = await prisma.coupon.findMany()
      * ```
      */
    get coupon(): Prisma.CouponDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.lessonProgress`: Exposes CRUD operations for the **LessonProgress** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LessonProgresses
      * const lessonProgresses = await prisma.lessonProgress.findMany()
      * ```
      */
    get lessonProgress(): Prisma.LessonProgressDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.chapterState`: Exposes CRUD operations for the **ChapterState** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ChapterStates
      * const chapterStates = await prisma.chapterState.findMany()
      * ```
      */
    get chapterState(): Prisma.ChapterStateDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.interviewSlot`: Exposes CRUD operations for the **InterviewSlot** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more InterviewSlots
      * const interviewSlots = await prisma.interviewSlot.findMany()
      * ```
      */
    get interviewSlot(): Prisma.InterviewSlotDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.interviewPass`: Exposes CRUD operations for the **InterviewPass** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more InterviewPasses
      * const interviewPasses = await prisma.interviewPass.findMany()
      * ```
      */
    get interviewPass(): Prisma.InterviewPassDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.interviewBooking`: Exposes CRUD operations for the **InterviewBooking** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more InterviewBookings
      * const interviewBookings = await prisma.interviewBooking.findMany()
      * ```
      */
    get interviewBooking(): Prisma.InterviewBookingDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.referral`: Exposes CRUD operations for the **Referral** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Referrals
      * const referrals = await prisma.referral.findMany()
      * ```
      */
    get referral(): Prisma.ReferralDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.payoutRequest`: Exposes CRUD operations for the **PayoutRequest** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PayoutRequests
      * const payoutRequests = await prisma.payoutRequest.findMany()
      * ```
      */
    get payoutRequest(): Prisma.PayoutRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map