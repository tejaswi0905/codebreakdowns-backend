declare const app: import("express-serve-static-core").Express;
declare global {
    namespace Express {
        interface Request {
            rawBody?: Buffer;
        }
    }
}
export { app };
//# sourceMappingURL=app.d.ts.map