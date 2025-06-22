import { authClient } from "@/lib/auth-client";
import { ErrorContext } from "better-auth/react";

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

export async function signIn({
  email,
  password,
  callbackURL = "/",
}: SignInPayload) {
  return new Promise<void>((resolve, reject) => {
    authClient.signIn.email(
      { email, password, callbackURL },
      {
        onSuccess: () => resolve(),
        onError: (error: ErrorContext) => reject(error),
      }
    );
  });
}

export async function signUp({
  name,
  email,
  password,
  callbackURL = "/",
}: SignUpPayload) {
  return new Promise<void>((resolve, reject) => {
    authClient.signUp.email(
      { name, email, password, callbackURL },
      {
        onSuccess: () => resolve(),
        onError: (error: ErrorContext) => reject(error),
      }
    );
  });
}
