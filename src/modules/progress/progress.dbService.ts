import { prisma } from "../../config/prisma.js";

/**
 * Only increments highestTimestampSecs if the incoming currentTime is greater
 * than what is currently saved in the database.
 */
export const upsertHeartbeatDb = async (
  userId: string,
  lessonId: string,
  currentTime: number,
) => {
  const existing = await prisma.lessonProgress.findUnique({
    where: { userId_lessonId: { userId, lessonId } },
    select: { highestTimestampSecs: true },
  });

  const newHighest = Math.max(existing?.highestTimestampSecs || 0, currentTime);

  return await prisma.lessonProgress.upsert({
    where: { userId_lessonId: { userId, lessonId } },
    update: { highestTimestampSecs: newHighest },
    create: {
      userId,
      lessonId,
      highestTimestampSecs: newHighest,
    },
  });
};

/**
 * Fetches the lesson along with its parent course strict-mode configuration
 * and the user's current progress record.
 */
export const getLessonWithProgressDb = async (
  userId: string,
  lessonId: string,
) => {
  return await prisma.lesson.findUnique({
    where: { id: lessonId },
    include: {
      chapter: {
        select: {
          id: true,
          sortOrder: true,
          course: {
            select: { id: true, enforceLinearProgress: true },
          },
        },
      },
      progress: {
        where: { userId },
        take: 1,
      },
    },
  });
};

export const updateLessonCompletionDb = async (
  userId: string,
  lessonId: string,
  isCompleted: boolean,
) => {
  return await prisma.lessonProgress.upsert({
    where: { userId_lessonId: { userId, lessonId } },
    update: { isCompleted },
    create: {
      userId,
      lessonId,
      isCompleted,
    },
  });
};

/**
 * The Waterfall Engine: Evaluates if all lessons in a chapter are complete.
 * If yes, marks the current chapter completed and unlocks the next sequential chapter.
 */
export const evaluateChapterWaterfallDb = async (
  userId: string,
  chapterId: string,
  courseId: string,
) => {
  // 1. Count total lessons vs completed lessons in this specific chapter
  const [totalLessons, completedLessons] = await Promise.all([
    prisma.lesson.count({ where: { chapterId } }),
    prisma.lessonProgress.count({
      where: {
        userId,
        isCompleted: true,
        lesson: { chapterId },
      },
    }),
  ]);

  // If chapter isn't 100% finished (or is empty), stop right here
  if (totalLessons === 0 || completedLessons < totalLessons) {
    return false;
  }

  // 2. Mark current chapter as completed
  const currentChapter = await prisma.chapter.findUnique({
    where: { id: chapterId },
    select: { sortOrder: true },
  });

  if (!currentChapter) return false;

  await prisma.chapterState.upsert({
    where: { userId_chapterId: { userId, chapterId } },
    update: { isCompleted: true, isUnlocked: true },
    create: { userId, chapterId, isCompleted: true, isUnlocked: true },
  });

  // 3. Find the NEXT sequential chapter in this course
  const nextChapter = await prisma.chapter.findFirst({
    where: {
      courseId,
      sortOrder: { gt: currentChapter.sortOrder },
    },
    orderBy: { sortOrder: "asc" },
  });

  // 4. Unlock the next chapter if it exists
  if (nextChapter) {
    await prisma.chapterState.upsert({
      where: { userId_chapterId: { userId, chapterId: nextChapter.id } },
      update: { isUnlocked: true },
      create: { userId, chapterId: nextChapter.id, isUnlocked: true },
    });
  }

  return true;
};

export const toggleBookmarkDb = async (
  userId: string,
  lessonId: string,
  isBookmarked: boolean,
) => {
  return await prisma.lessonProgress.upsert({
    where: { userId_lessonId: { userId, lessonId } },
    update: { isBookmarked },
    create: {
      userId,
      lessonId,
      isBookmarked,
    },
  });
};

/**
 * Runs 4 concurrent queries to dynamically compute homepage metrics in <5ms.
 */
export const getStudentDashboardStatsDb = async (userId: string) => {
  const [accessStats, completedCount, bookmarkedCount, lastAccessedLesson] =
    await Promise.all([
      prisma.lessonProgress.aggregate({
        where: { userId },
        _count: { lessonId: true },
        _sum: { highestTimestampSecs: true },
      }),
      prisma.lessonProgress.count({
        where: { userId, isCompleted: true },
      }),
      prisma.lessonProgress.count({
        where: { userId, isBookmarked: true },
      }),
      prisma.lessonProgress.findFirst({
        where: { userId },
        orderBy: { updatedAt: "desc" },
        include: {
          lesson: {
            select: { id: true, title: true, chapterId: true },
          },
        },
      }),
    ]);

  const totalSeconds = accessStats._sum.highestTimestampSecs || 0;
  const hoursLearned = Number((totalSeconds / 3600).toFixed(1));

  return {
    metrics: {
      lessonsAccessed: accessStats._count.lessonId,
      lessonsCompleted: completedCount,
      hoursLearned: hoursLearned,
      bookmarksCount: bookmarkedCount,
    },
    resumePoint: lastAccessedLesson
      ? {
          lessonId: lastAccessedLesson.lessonId,
          title: lastAccessedLesson.lesson.title,
          timestamp: lastAccessedLesson.highestTimestampSecs,
        }
      : null,
  };
};
