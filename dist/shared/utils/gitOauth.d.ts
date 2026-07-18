interface GithubTokenResponse {
    access_token: string;
    token_type: string;
    scope: string;
    error?: string;
    error_description?: string;
}
export interface GithubUser {
    id: number;
    login: string;
    name: string;
    email: string;
    avatar_url: string;
}
export declare const getGithubAuthUrl: () => string;
export declare const getGithubTokens: (code: string) => Promise<GithubTokenResponse>;
export declare const getGithubUser: (accessToken: string) => Promise<GithubUser>;
export {};
//# sourceMappingURL=gitOauth.d.ts.map