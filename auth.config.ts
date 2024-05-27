import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credential from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { loginSchema } from "./schemas";
import { getUserByEmail } from "./data/user";
import bcrypt from "bcryptjs";

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credential({
      async authorize(credentials, request) {
        const validateFields = loginSchema.safeParse(credentials);
        if (validateFields.success) {
          const { email, password } = validateFields.data;

          const user = await getUserByEmail(email);

          if (!user || !user.password) {
            return null;
          }

          const pwMatch = await bcrypt.compare(password, user.password);

          if (!pwMatch) {
            return null;
          }

          return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
