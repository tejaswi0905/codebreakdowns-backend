import type { Request, Response } from "express";
import { catchAsync } from "../../shared/errors/catchAsync.js";
import { sendSuccess } from "../../shared/utils/apiResopnse.js";
import { BadRequestError } from "../../shared/errors/AppError.js";
import {
  heartbeatSchema,
  toggleCompleteSchema,
  toggleBookmarkSchema,
} from "./progress.schemas.js";
import * as progressService from "./progress.trakingService.js";

export const recordHeartbeat = catchAsync(
  async (req: Request, res: Response) => {
    const userId = req.user!.id;
    const parseResult = heartbeatSchema.safeParse(req.body);
    if (!parseResult.success) {
      throw new BadRequestError("Validation failed: Invalid heartbeat payload.");
    }
    const { lessonId, currentTime } = parseResult.data;

    const progress = await progressService.processHeartbeat(
      userId,
      lessonId,
      currentTime,
    );
    sendSuccess(res, 200, progress, "Heartbeat recorded.");
  },
);

export const toggleComplete = catchAsync(
  async (req: Request, res: Response) => {
    const userId = req.user!.id;
    const parseResult = toggleCompleteSchema.safeParse(req.body);
    if (!parseResult.success) {
      throw new BadRequestError("Validation failed: Invalid completion payload.");
    }
    const { lessonId, isCompleted } = parseResult.data;

    const progress = await progressService.processToggleComplete(
      userId,
      lessonId,
      isCompleted,
    );
    sendSuccess(res, 200, progress, "Lesson completion status updated.");
  },
);

export const toggleBookmark = catchAsync(
  async (req: Request, res: Response) => {
    const userId = req.user!.id;
    const parseResult = toggleBookmarkSchema.safeParse(req.body);
    if (!parseResult.success) {
      throw new BadRequestError("Validation failed: Invalid bookmark payload.");
    }
    const { lessonId, isBookmarked } = parseResult.data;

    const progress = await progressService.processToggleBookmark(
      userId,
      lessonId,
      isBookmarked,
    );
    sendSuccess(res, 200, progress, "Lesson bookmark status updated.");
  },
);

export const getStats = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user!.id;
  const stats = await progressService.getDashboardMetrics(userId);
  sendSuccess(res, 200, stats, "Dashboard metrics fetched successfully.");
});
