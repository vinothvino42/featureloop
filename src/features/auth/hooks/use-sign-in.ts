import { useMutation } from "@tanstack/react-query";
import { signIn, SignInPayload } from "../services/auth-service";

export const useSignIn = () => {
  return useMutation<void, Error, SignInPayload>({
    mutationFn: signIn,
  });
};
