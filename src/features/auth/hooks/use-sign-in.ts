import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { SignInPayload, signIn } from "../services/auth-service";
import { AuthResult } from "../../../../types/auth";

export const signInInputSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Password is required" }),
});

export type SignInInput = z.infer<typeof signInInputSchema>;

export function useSignIn() {
  return useMutation<AuthResult, Error, SignInPayload>({
    mutationFn: (params: SignInPayload) => signIn(params),
  });
}
