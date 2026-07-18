// src/modules/admins/admins.analyticsService.ts
import { prisma } from "../../config/prisma.js";

export const getUserMetricsDb = async () => {
  // Run all user queries concurrently for maximum speed
  const [totalStudents, paidStudents, recentSignups] = await Promise.all([
    // 1. Total registered students
    prisma.user.count({
      where: { role: "STUDENT" },
    }),

    // 2. Paid students (has at least one receipt)
    prisma.user.count({
      where: {
        role: "STUDENT",
        receipts: { some: {} },
      },
    }),

    // 3. Newest 10 signups for the activity feed
    prisma.user.findMany({
      where: { role: "STUDENT" },
      orderBy: { createdAt: "desc" },
      take: 10,
      select: { id: true, name: true, email: true, createdAt: true },
    }),
  ]);

  const conversionRate =
    totalStudents > 0
      ? ((paidStudents / totalStudents) * 100).toFixed(1)
      : "0.0";

  return {
    overview: {
      totalStudents,
      paidStudents,
      conversionRate: `${conversionRate}%`,
    },
    recentSignups,
  };
};

export const getRevenueMetricsDb = async () => {
  // Fetch all products and count how many receipts (owners) they each have
  const products = await prisma.product.findMany({
    select: {
      id: true,
      title: true,
      priceInr: true,
      _count: {
        select: { owners: true },
      },
    },
  });

  let totalGrossRevenue = 0;

  // Calculate revenue per product dynamically
  const productBreakdown = products.map((product) => {
    const sales = product._count.owners;
    const revenue = sales * product.priceInr;

    totalGrossRevenue += revenue;

    return {
      productId: product.id,
      title: product.title,
      sales,
      revenueInr: revenue,
    };
  });

  return {
    totalGrossRevenue,
    // Sort by highest revenue generating products first
    productBreakdown: productBreakdown.sort(
      (a, b) => b.revenueInr - a.revenueInr,
    ),
  };
};
