import { prisma } from "../../config/prisma.js";
import type { GithubUser } from "../../shared/utils/gitOauth.js";

export const handleGithubUserDb = async (
  gitHubProfile: GithubUser,
  accessToken: string,
) => {
  const existingAccount = await prisma.account.findUnique({
    where: {
      provider_providerAccountId: {
        provider: "github",
        providerAccountId: gitHubProfile.id.toString(),
      },
    },
    include: {
      user: true,
    },
  });
  if (existingAccount) {
    return existingAccount.user;
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email: gitHubProfile.email,
    },
  });
  if (existingUser) {
    await prisma.account.create({
      data: {
        userId: existingUser.id,
        type: "oauth",
        provider: "github",
        providerAccountId: gitHubProfile.id.toString(),
        access_token: accessToken,
      },
    });
    return existingUser;
  }
  const newUser = await prisma.user.create({
    data: {
      email: gitHubProfile.email,
      name: gitHubProfile.name,
      avatarUrl: gitHubProfile.avatar_url,
      role: "STUDENT", // Default role

      // Nested write: Creates the linked Account row automatically
      accounts: {
        create: {
          type: "oauth",
          provider: "github",
          providerAccountId: gitHubProfile.id.toString(),
          access_token: accessToken, // <-- Added this to match your schema
        },
      },
    },
  });

  return newUser;
};
