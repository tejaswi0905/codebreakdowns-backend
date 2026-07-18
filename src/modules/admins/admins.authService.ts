// src/modules/admins/admins.authService.ts
import jwt from "jsonwebtoken";
import {
  getGoogleAuthTokens,
  getGoogleUserInfo,
} from "../../shared/utils/googleOauth.js";
import { handleGoogleAdminDb } from "./amdins.dbService.js";
import { BadRequestError } from "../../shared/errors/AppError.js";

export const processGoogleLogin = async (code: string) => {
  const tokens = await getGoogleAuthTokens(code);
  const googleProfile = await getGoogleUserInfo(tokens.access_token);

  // Safety check: Don't admit admins with unverified Google accounts
  const isVerified =
    googleProfile.verified_email || googleProfile.email_verified;
  if (!isVerified) {
    throw new BadRequestError(
      "Your Google email address must be verified to access the Admin portal.",
    );
  }

  const user = await handleGoogleAdminDb(googleProfile, tokens.access_token);

  const token = jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "30d",
    },
  );

  return { user, token };
};
