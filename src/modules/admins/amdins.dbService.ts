// src/modules/admins/admins.dbService.ts
import { prisma } from "../../config/prisma.js";
import { ForbiddenError } from "../../shared/errors/AppError.js";

// Define an interface matching the Google user profile payload
export interface GoogleUser {
  id?: string;
  sub?: string; // Google v2 uses 'id', v3 uses 'sub'
  email: string;
  name: string;
  picture: string;
  verified_email?: boolean;
  email_verified?: boolean;
}

export const handleGoogleAdminDb = async (
  googleProfile: GoogleUser,
  accessToken: string,
) => {
  const googleId = (googleProfile.id || googleProfile.sub) as string;

  // 1. Check if an Account record already exists for this Google ID
  const existingAccount = await prisma.account.findUnique({
    where: {
      provider_providerAccountId: {
        provider: "google",
        providerAccountId: googleId,
      },
    },
    include: {
      user: true,
    },
  });

  if (existingAccount) {
    // SECURITY GATE: Make sure the existing account is strictly an ADMIN!
    if (existingAccount.user.role !== "ADMIN") {
      throw new ForbiddenError(
        "Access Denied: This account is registered as a Student, not an Admin.",
      );
    }
    return existingAccount.user;
  }

  // 2. Check if a User already exists with this email
  const existingUser = await prisma.user.findUnique({
    where: {
      email: googleProfile.email,
    },
  });

  if (existingUser) {
    // SECURITY GATE: Prevent a Student from elevating themselves to Admin by logging in with Google!
    if (existingUser.role !== "ADMIN") {
      throw new ForbiddenError(
        "Access Denied: This email address belongs to a Student account.",
      );
    }

    // Link this new Google OAuth account to the existing Admin User
    await prisma.account.create({
      data: {
        userId: existingUser.id,
        type: "oauth",
        provider: "google",
        providerAccountId: googleId,
        access_token: accessToken,
      },
    });

    return existingUser;
  }

  // 3. Brand New Admin User!
  // NOTE: When we wire up the single-use AdminInvite secret code next,
  // our verification check will plug in right here before creating the row!
  const newUser = await prisma.user.create({
    data: {
      email: googleProfile.email,
      name: googleProfile.name,
      avatarUrl: googleProfile.picture,
      role: "ADMIN", // Strictly set role to ADMIN

      // Nested write: Creates the linked Account row automatically
      accounts: {
        create: {
          type: "oauth",
          provider: "google",
          providerAccountId: googleId,
          access_token: accessToken,
        },
      },
    },
  });

  return newUser;
};
