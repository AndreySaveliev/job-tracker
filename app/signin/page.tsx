"use client";
import { signin } from "@/actions/signin";
import Link from "next/link";
import React, { useActionState } from "react";

function SigninPage() {
  const [state, action, pending] = useActionState(signin, undefined);
  return (
    <div className="flex flex-col h-screen justify-center mx-auto w-1/6">
      <form className="flex flex-col gap-4 border-2 p-2 rounded-md shadow-md" action={action}>
        <div className="flex flex-col">
          <input type="text" placeholder="LOGIN" className="focus:outline-none" name="login" />
          <span className="text-sm text-red-400">{state?.errors?.login}</span>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="PASSWORD"
            className="focus:outline-none"
            name="password"
          />
          {state?.errors?.password &&
            state?.errors.password.map((error) => (
              <span className="text-sm text-red-400 max-w-fit">{error}</span>
            ))}
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-md disabled:bg-red-400"
          disabled={pending}
        >
          LOGIN
        </button>
        {state?.message && <p className="text-center text-red-400">{state.message}</p>}
      </form>

      <Link
        href="/signup"
        className="text-center mt-8  text-blue-500 hover:text-blue-600 hover:underline"
      >
        or Sign up
      </Link>
    </div>
  );
}

export default SigninPage;
