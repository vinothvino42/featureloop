import { authClient } from "@/lib/auth-client";
import { AuthResult } from "../../../../types/auth";

export type SignInPayload = {
  email: string;
  password: string;
  callbackURL?: string;
};

export type SignUpPayload = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  callbackURL?: string;
};

export type SocialProvider = "google" | "github";

export interface SocialSignInPayload {
  provider: SocialProvider;
  callbackURL?: string;
}

export async function signIn({
  email,
  password,
  callbackURL = "/",
}: SignInPayload): Promise<AuthResult> {
  const result = await authClient.signIn.email({
    email,
    password,
    callbackURL,
  });

  if (result.error) {
    throw new Error(result.error.message);
  }

  const user: AuthResult = {
    token: result.data.token,
    user: result.data.user,
  };
  return user;
}

export async function signUp({
  name,
  email,
  password,
  callbackURL = "/",
}: SignUpPayload): Promise<AuthResult> {
  const result = await authClient.signUp.email({
    name,
    email,
    password,
    callbackURL,
  });

  if (result.error) {
    throw new Error(result.error.message ?? "Failed to sign up");
  }

  const user: AuthResult = {
    token: result.data.token,
    user: result.data.user,
  };
  return user;
}

export async function socialSignIn({
  provider,
  callbackURL = "/",
}: SocialSignInPayload): Promise<object> {
  const result = await authClient.signIn.social({ provider, callbackURL });

  if (result.error) {
    throw new Error(result.error.message);
  }

  return result;
}
