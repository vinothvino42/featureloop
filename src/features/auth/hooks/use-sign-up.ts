import { useMutation } from "@tanstack/react-query";
import { signUp, SignUpPayload } from "../services/auth-service";

export const useSignUp = () => {
  return useMutation<void, Error, SignUpPayload>({
    mutationFn: signUp,
  });
};
