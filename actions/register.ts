"use server";

import { registerSchema } from "@/schemas";
import { z } from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof registerSchema>) => {
  const validateFields = registerSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid field!" };
  }

  const { email, name, password } = validateFields.data;

  const hashPw = await bcrypt.hash(password, 10);

  const existUser = await getUserByEmail(email);

  if (existUser) {
    return { error: "Email already exist!" };
  }

  await db.user.create({
    data: {
      email,
      name,
      password: hashPw,
    },
  });

  // Todo: send verification token email

  return { message: "Email sent!" };
};
