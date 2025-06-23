import { authClient } from "@/lib/auth-client";
import { useMutation } from "@tanstack/react-query";

export function useSocialSignIn() {
  return useMutation({
    mutationFn: (params: SocialSignInPayload) => socialSignIn(params),
  });
}

export type SocialProvider = "google" | "github";

export interface SocialSignInPayload {
  provider: SocialProvider;
  callbackURL?: string;
}

export async function socialSignIn({
  provider,
  callbackURL = "/",
}: SocialSignInPayload) {
  const result = await authClient.signIn.social({ provider, callbackURL });

  if (result.error) {
    throw new Error(result.error.message);
  }
  return result;
}
