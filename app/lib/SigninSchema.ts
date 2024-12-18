import { z } from "zod";

export const SigninFormSchema = z.object({
  login: z
    .string()
    .min(2, { message: "Login must be at least 2 characters long." })
    .trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .trim(),
});

export type SigninFormState =
  | {
      errors?: {
        name?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;
