import { AppError, BadRequestError } from "../errors/AppError.js";
import axios from "axios";
export const getGithubAuthUrl = () => {
    const rootUrl = "https://github.com/login/oauth/authorize";
    const options = {
        // We provide a fallback empty string just in case, to keep TypeScript happy
        client_id: process.env.GITHUB_CLIENT_ID || "",
        scope: "user:email", // CRITICAL: This is where we request permission to see their email
    };
    const qs = new URLSearchParams(options);
    return `${rootUrl}?${qs.toString()}`;
};
export const getGithubTokens = async (code) => {
    const url = "https://github.com/login/oauth/access_token";
    const response = await axios.post(url, {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
    }, {
        headers: {
            Accept: "application/json", // CRITICAL: Tells GitHub to send JSON
        },
    });
    const data = response.data;
    if (data.error) {
        // If the code is expired or invalid, we throw our custom operational error
        throw new BadRequestError(`GitHub Token Error: ${data.error_description}`);
    }
    return data;
};
export const getGithubUser = async (accessToken) => {
    try {
        // 1. Fetch the main user profile
        const userRes = await axios.get("https://api.github.com/user", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        const user = userRes.data;
        // 2. The "Private Email" Trap: If email is missing, fetch it manually
        if (!user.email) {
            const emailRes = await axios.get("https://api.github.com/user/emails", {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const emails = emailRes.data;
            // Find the email that is both primary and verified
            const primaryEmail = emails.find((e) => e.primary && e.verified);
            if (!primaryEmail) {
                throw new BadRequestError("Your GitHub account must have a verified primary email.");
            }
            user.email = primaryEmail.email;
        }
        // If their name is null (they haven't set a display name), fallback to their username
        if (!user.name) {
            user.name = user.login;
        }
        return user;
    }
    catch (error) {
        // If we threw our own AppError (like the primary email check), pass it through
        if (error instanceof AppError)
            throw error;
        // Otherwise, it was an Axios failure (e.g., bad token, GitHub API down)
        throw new AppError("Failed to fetch data from GitHub", 500);
    }
};
//# sourceMappingURL=gitOauth.js.map