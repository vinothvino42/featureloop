import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { signIn, SignInPayload } from "../services/auth-service";

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
