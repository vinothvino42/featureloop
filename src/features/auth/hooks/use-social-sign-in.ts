import { useMutation } from "@tanstack/react-query";
import { socialSignIn, SocialSignInPayload } from "../services/auth-service";

export function useSocialSignIn() {
  return useMutation<object, Error, SocialSignInPayload>({
    mutationFn: (params: SocialSignInPayload) => socialSignIn(params),
  });
}
