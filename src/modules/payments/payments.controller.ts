import type { Request, Response } from "express";
import crypto from "crypto";
import Razorpay from "razorpay";
import { catchAsync } from "../../shared/errors/catchAsync.js";
import { sendSuccess } from "../../shared/utils/apiResopnse.js";
import {
  BadRequestError,
  NotFoundError,
} from "../../shared/errors/AppError.js";
import { verifyPaymentSchema } from "./payments.schemas.js";
import {
  checkUserOwnsProductDb,
  getProductPriceDb,
  grantProductAccessDb,
} from "./payments.dbService.js";

// Initialize the Razorpay SDK
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID as string,
  key_secret: process.env.RAZORPAY_KEY_SECRET as string,
});

/**
 * @route   POST /api/v1/payments/checkout/:productId
 * @desc    Generates a secure Razorpay Order ID for the frontend
 * @access  Protected (Student)
 */
export const createOrder = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user!.id;
  const { productId } = req.params;

  // 1. Prevent double-charging
  const alreadyOwns = await checkUserOwnsProductDb(userId, productId as string);
  if (alreadyOwns) {
    throw new BadRequestError("You already own this product.");
  }

  // 2. Fetch the REAL price from the database
  const product = await getProductPriceDb(productId as string);
  if (!product) {
    throw new NotFoundError("Product not found or is no longer active.");
  }

  // 3. Create the order in Razorpay
  const options = {
    amount: product.priceInr * 100, // Razorpay expects the amount in PAISE (e.g., ₹100 = 10000 paise)
    currency: "INR",
    receipt: `receipt_${userId}_${productId}`.substring(0, 40), // Max 40 chars
    notes: {
      userId: userId,
      productId: productId as string,
    },
  };

  const order = await razorpay.orders.create(options);

  // 4. Send the order ID to the React frontend
  sendSuccess(
    res,
    200,
    {
      orderId: order.id,
      amount: options.amount,
      currency: options.currency,
    },
    "Order created successfully",
  );
});

/**
 * @route   POST /api/v1/payments/verify
 * @desc    Verifies the cryptographic signature and grants course access
 * @access  Protected (Student)
 */
export const verifyPayment = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user!.id;

  const parseResult = verifyPaymentSchema.safeParse({ body: req.body });
  if (!parseResult.success) {
    const errorMessages = parseResult.error.issues
      .map((err: any) => err.message)
      .join(", ");
    throw new BadRequestError(`Validation failed: ${errorMessages}`);
  }

  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  } = parseResult.data.body;

  // 1. Cryptographic Verification (The Hacker Defense)
  // We hash the order_id and payment_id together using our secret key
  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET as string)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (!isAuthentic) {
    throw new BadRequestError(
      "Payment verification failed! Invalid signature.",
    );
  }

  // 2. FETCH THE ORDER FROM RAZORPAY TO GET THE REAL PRODUCT ID
  // We cannot trust the productId from the client because the signature does not cover it.
  const order = await razorpay.orders.fetch(razorpay_order_id);
  const realProductId = order.notes?.productId as string;

  if (!realProductId) {
    throw new BadRequestError("Order notes do not contain a valid product ID.");
  }

  // 3. Prevent duplicate entries (handles race condition with the webhook)
  const alreadyOwns = await checkUserOwnsProductDb(userId, realProductId);
  if (!alreadyOwns) {
    // 4. Grant access using the verified realProductId
    await grantProductAccessDb(userId, realProductId, razorpay_payment_id);
  }

  sendSuccess(
    res,
    200,
    null,
    "Payment successful! You now have access to the courses.",
  );
});

/**
 * @route   POST /api/v1/payments/webhook
 * @desc    Handles Razorpay Webhook Events (server-to-server)
 * @access  Public (Secured by signature)
 */
export const razorpayWebhook = catchAsync(async (req: Request, res: Response) => {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET as string;
  const signature = req.headers["x-razorpay-signature"] as string;

  if (!secret || !signature || !req.rawBody) {
    throw new BadRequestError("Missing webhook requirements");
  }

  // 1. Verify the signature
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(req.rawBody)
    .digest("hex");

  if (expectedSignature !== signature) {
    throw new BadRequestError("Invalid webhook signature");
  }

  // 2. Parse the verified payload
  const payload = req.body;

  // 3. Handle the event
  if (payload.event === "order.paid") {
    const paymentEntity = payload.payload.payment.entity;
    const { userId, productId } = paymentEntity.notes;
    const transactionId = paymentEntity.id;

    if (!userId || !productId) {
      throw new BadRequestError("Missing userId or productId in notes");
    }

    // Check if the user already owns the product to prevent duplicate entries
    const alreadyOwns = await checkUserOwnsProductDb(userId, productId);
    
    if (!alreadyOwns) {
      await grantProductAccessDb(userId, productId, transactionId);
    }
  }

  // 4. Always respond with 200 OK so Razorpay knows we received it
  res.status(200).send("Webhook received");
});
