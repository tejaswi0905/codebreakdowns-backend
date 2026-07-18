// src/modules/progress/progress.controller.ts
import type { Request, Response } from "express";
import { catchAsync } from "../../shared/errors/catchAsync.js";
import { sendSuccess } from "../../shared/utils/apiResopnse.js";
import {
  heartbeatSchema,
  toggleCompleteSchema,
  toggleBookmarkSchema,
} from "./progress.schemas.js";
import * as progressService from "./progress.trakingService.js";

export const recordHeartbeat = catchAsync(
  async (req: Request, res: Response) => {
    const userId = req.user!.id;
    const { lessonId, currentTime } = heartbeatSchema.parse(req.body);

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
    const { lessonId, isCompleted } = toggleCompleteSchema.parse(req.body);

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
    const { lessonId, isBookmarked } = toggleBookmarkSchema.parse(req.body);

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
