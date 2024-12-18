"use server";
import { SignupFormSchema, SignupFormState } from "@/app/lib/SignupSchema";
const bcrypt = require("bcryptjs");
import { prisma } from "@/prisma";
import { createSession } from "@/session/session";
import { redirect } from "next/navigation";

export const signup = async (state: SignupFormState, formData: FormData) => {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    login: formData.get("login"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { login, password } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        login,
        password: hashedPassword,
      },
    });

    createSession(user.id).then(() => redirect("/"));
  } catch (err) {
    return { message: "Error creating user" };
  }

  // Call the provider or db to create a user...
};
