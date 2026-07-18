import { prisma } from "../../config/prisma.js";

// 1. Check if the user already owns this product (prevent double charging)
export const checkUserOwnsProductDb = async (
  userId: string,
  productId: string,
) => {
  const existingReceipt = await prisma.userProduct.findFirst({
    where: {
      userId,
      productId,
    },
  });
  return !!existingReceipt; // Returns true if they own it, false if they don't
};

// 2. Fetch the price securely from the DB (never trust the frontend's price!)
export const getProductPriceDb = async (productId: string) => {
  return await prisma.product.findUnique({
    where: { id: productId, isActive: true },
    select: { priceInr: true },
  });
};

// 3. The Grand Finale: Print the receipt and grant access!
export const grantProductAccessDb = async (
  userId: string,
  productId: string,
  transactionId: string,
) => {
  return await prisma.userProduct.create({
    data: {
      userId,
      productId,
      transactionId,
    },
  });
};
