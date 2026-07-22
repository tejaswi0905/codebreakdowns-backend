import { prisma } from "../../config/prisma.js";
import { NotFoundError } from "../../shared/errors/AppError.js";

export const getActiveProductsDb = async () => {
  return await prisma.product.findMany({
    where: { isActive: true }, // Only show active products to students
    include: {
      courses: {
        include: {
          course: {
            select: { id: true, title: true, imageUrl: true },
          },
        },
      },
    },
  });
};

export const getAdminProductsDb = async () => {
  return await prisma.product.findMany({
    include: {
      courses: {
        include: {
          course: {
            select: { id: true, title: true, imageUrl: true },
          },
        },
      },
    },
  });
};

export const createProductDb = async (data: any) => {
  return await prisma.product.create({ data });
};

export const updateProductDb = async (productId: string, data: any) => {
  const product = await prisma.product.findUnique({ where: { id: productId } });
  if (!product) throw new NotFoundError("Product not found");

  return await prisma.product.update({
    where: { id: productId },
    data,
  });
};

export const linkCourseToProductDb = async (
  productId: string,
  courseId: string,
) => {
  // This uses Prisma's composite ID mapping
  return await prisma.productCourse.create({
    data: {
      productId,
      courseId,
    },
  });
};
