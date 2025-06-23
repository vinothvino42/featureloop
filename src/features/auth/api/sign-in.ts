import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { authClient } from "@/lib/auth-client";

export const signInInputSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Password is required" }),
});

export type SignInInput = z.infer<typeof signInInputSchema>;

export function useSignIn() {
  return useMutation({
    mutationFn: (params: SignInPayload) => signIn(params),
  });
}

type SignInPayload = {
  email: string;
  password: string;
  callbackURL?: string;
};

async function signIn({ email, password, callbackURL = "/" }: SignInPayload) {
  const result = await authClient.signIn.email({
    email,
    password,
    callbackURL,
  });

  if (result.error) {
    throw new Error(result.error.message);
  }
  return result;
}
