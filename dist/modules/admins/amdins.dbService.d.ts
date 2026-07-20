export interface GoogleUser {
    id?: string;
    sub?: string;
    email: string;
    name: string;
    picture: string;
    verified_email?: boolean;
    email_verified?: boolean;
}
export declare const handleGoogleAdminDb: (googleProfile: GoogleUser, accessToken: string) => Promise<{
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
}>;
//# sourceMappingURL=amdins.dbService.d.ts.map