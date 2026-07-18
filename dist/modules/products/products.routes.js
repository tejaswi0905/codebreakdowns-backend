import { Router } from "express";
import { adminAuthCheck } from "../../shared/middlewares/authMiddleware.js";
import { getActiveProducts, createProduct, updateProduct, linkCourseToProduct, } from "./products.controller.js";
const productsRouter = Router();
// ==========================================
// PUBLIC ROUTES (Storefront)
// ==========================================
// GET /api/v1/products -> Fetches all active products for the pricing page
productsRouter.get("/", getActiveProducts);
// ==========================================
// ADMIN ROUTES (CMS)
// ==========================================
// POST /api/v1/products -> Create a new bundle/product
productsRouter.post("/", adminAuthCheck, createProduct);
// PATCH /api/v1/products/:productId -> Update price, description, or toggle isActive
productsRouter.patch("/:productId", adminAuthCheck, updateProduct);
// POST /api/v1/products/:productId/courses -> Add a course to this product
productsRouter.post("/:productId/courses", adminAuthCheck, linkCourseToProduct);
export default productsRouter;
//# sourceMappingURL=products.routes.js.map