import jwt from "jsonwebtoken";
import { getGithubTokens, getGithubUser } from "../../shared/utils/gitOauth.js";
import { handleGithubUserDb } from "./users.dbService.js";
export const processGithubLogin = async (code) => {
    const tokens = await getGithubTokens(code);
    const githubProfile = await getGithubUser(tokens.access_token);
    const user = await handleGithubUserDb(githubProfile, tokens.access_token);
    const token = jwt.sign({
        id: user.id,
        role: user.role,
    }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
    return { user, token };
};
//# sourceMappingURL=users.authService.js.map