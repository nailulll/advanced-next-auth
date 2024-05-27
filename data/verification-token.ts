import { db } from "@/lib/db";

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const data = await db.verificationToken.findFirst({
      where: {
        email,
      },
    });
    return data;
  } catch (error) {
    return null;
  }
};

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const data = await db.verificationToken.findUnique({
      where: {
        token,
      },
    });
    return data;
  } catch (error) {
    return null;
  }
};
