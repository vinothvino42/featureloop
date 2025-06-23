import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { authClient } from "@/lib/auth-client";

export const signUpInputSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required " }),
    email: z.string().email(),
    password: z.string().min(1, { message: "Password is required" }),
    confirmPassword: z.string().min(1, { message: "Password is required " }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPasswords"],
  });

export type SignUpInput = z.infer<typeof signUpInputSchema>;

export function useSignUp() {
  return useMutation({
    mutationFn: (params: SignUpPayload) => signUp(params),
  });
}

type SignUpPayload = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  callbackURL?: string;
};

async function signUp({
  name,
  email,
  password,
  callbackURL = "/",
}: SignUpPayload) {
  const result = await authClient.signUp.email({
    name,
    email,
    password,
    callbackURL,
  });

  if (result.error) {
    throw new Error(result.error.message);
  }
  return result;
}
