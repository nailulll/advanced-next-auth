"use server";

import { loginSchema } from "@/schemas";
import { z } from "zod";

export const login = async (values: z.infer<typeof loginSchema>) => {
  const validateFields = loginSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid field!" };
  }

  return { message: "Email sent!" };
};
