export declare const getUserMetricsDb: () => Promise<{
    overview: {
        totalStudents: number;
        paidStudents: number;
        conversionRate: string;
    };
    recentSignups: {
        id: string;
        name: string;
        email: string;
        createdAt: Date;
    }[];
}>;
export declare const getRevenueMetricsDb: () => Promise<{
    totalGrossRevenue: number;
    productBreakdown: {
        productId: string;
        title: string;
        sales: number;
        revenueInr: number;
    }[];
}>;
//# sourceMappingURL=admins.analyticsService.d.ts.map