import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const Logout = async () => {
  const cookie = await cookies();
  cookie.delete("session");
  redirect("/signin");
};
