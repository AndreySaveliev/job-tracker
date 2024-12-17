"use server";
import { SigninFormSchema, SigninFormState } from "@/app/lib/definitions";
const bcrypt = require("bcryptjs");
import { prisma } from "@/prisma";
import { createSession } from "@/session/session";
import { redirect } from "next/navigation";

export const signin = async (state: SigninFormState, formData: FormData) => {
  const validatedFields = SigninFormSchema.safeParse({
    login: formData.get("login"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const user = await prisma.user.findUnique({
    where: {
      login: formData.get("login") as string,
    },
  });
  if (!user) {
    return { message: "Can't find user a login" };
  } else {
    const isValidPassword = await bcrypt.compare(formData.get("password"), user.password);
    if (isValidPassword) {
      await createSession(user.id);
      redirect("/");
    } else {
      return { message: "Login or password is incorrect" };
    }
  }
};
