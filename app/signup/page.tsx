"use client";
import { useActionState } from "react";
import { signup } from "@/actions/auth";
import Link from "next/link";
function SignupPage() {
  const [state, action, pending] = useActionState(signup, undefined);

  return (
    <div className="flex flex-col h-screen justify-center mx-auto w-fit">
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
          Register
        </button>
        {state?.message && <p className="text-center text-red-400">{state.message}</p>}
      </form>
      <Link
        href="/signin"
        className="text-center mt-8  text-blue-500 hover:text-blue-600 hover:underline"
      >
        or Sign in
      </Link>
    </div>
  );
}

export default SignupPage;
