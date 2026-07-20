export declare const processGoogleLogin: (code: string) => Promise<{
    user: {
        id: string;
        name: string;
        email: string;
        avatarUrl: string | null;
        role: import("../../generated/prisma/enums.js").Role;
        isActive: boolean;
        paymentGatewayCustomerId: string | null;
        referralCode: string | null;
        payoutUpiId: string | null;
        createdAt: Date;
        updatedAt: Date;
    };
    token: string;
}>;
//# sourceMappingURL=admins.authService.d.ts.map