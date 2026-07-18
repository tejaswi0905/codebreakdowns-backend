import type { GithubUser } from "../../shared/utils/gitOauth.js";
export declare const handleGithubUserDb: (gitHubProfile: GithubUser, accessToken: string) => Promise<{
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
//# sourceMappingURL=users.dbService.d.ts.map