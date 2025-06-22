import { authClient } from "@/lib/auth-client";

export type SignInPayload = {
  email: string;
  password: string;
  callbackURL?: string;
};

export type SocialProvider = "google" | "github";
export interface SocialSignInPayload {
  provider: SocialProvider;
  callbackURL?: string;
}

export type SignUpPayload = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  callbackURL?: string;
};

export async function signIn({
  email,
  password,
  callbackURL = "/",
}: SignInPayload) {
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

export async function signUp({
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
