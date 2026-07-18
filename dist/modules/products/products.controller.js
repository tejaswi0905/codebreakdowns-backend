import { catchAsync } from "../../shared/errors/catchAsync.js";
import { sendSuccess } from "../../shared/utils/apiResopnse.js";
import { BadRequestError } from "../../shared/errors/AppError.js";
import { getActiveProductsDb, createProductDb, updateProductDb, linkCourseToProductDb, } from "./products.dbService.js";
import { createProductSchema, updateProductSchema, linkCourseSchema, } from "./products.schemas.js";
export const getActiveProducts = catchAsync(async (req, res) => {
    const products = await getActiveProductsDb();
    sendSuccess(res, 200, products, "Active products fetched successfully");
});
// --- ADMIN ---
export const createProduct = catchAsync(async (req, res) => {
    const parseResult = createProductSchema.safeParse({ body: req.body });
    if (!parseResult.success) {
        const errorMessages = parseResult.error.issues
            .map((err) => err.message)
            .join(", ");
        throw new BadRequestError(`Validation failed: ${errorMessages}`);
    }
    const newProduct = await createProductDb(parseResult.data.body);
    sendSuccess(res, 201, newProduct, "Product created successfully");
});
export const updateProduct = catchAsync(async (req, res) => {
    const { productId } = req.params;
    const parseResult = updateProductSchema.safeParse({ body: req.body });
    if (!parseResult.success) {
        const errorMessages = parseResult.error.issues
            .map((err) => err.message)
            .join(", ");
        throw new BadRequestError(`Validation failed: ${errorMessages}`);
    }
    const updatedProduct = await updateProductDb(productId, parseResult.data.body);
    sendSuccess(res, 200, updatedProduct, "Product updated successfully");
});
export const linkCourseToProduct = catchAsync(async (req, res) => {
    const { productId } = req.params;
    const parseResult = linkCourseSchema.safeParse({ body: req.body });
    if (!parseResult.success) {
        const errorMessages = parseResult.error.issues
            .map((err) => err.message)
            .join(", ");
        throw new BadRequestError(`Validation failed: ${errorMessages}`);
    }
    const link = await linkCourseToProductDb(productId, parseResult.data.body.courseId);
    sendSuccess(res, 201, link, "Course successfully linked to product");
});
//# sourceMappingURL=products.controller.js.map