import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { SignUpPayload, signUp } from "../services/auth-service";
import { AuthResult } from "../../../../types/auth";

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
  return useMutation<AuthResult, Error, SignUpPayload>({
    mutationFn: (params: SignUpPayload) => signUp(params),
  });
}
