import { useMutation } from "@tanstack/react-query";
import { sessionApi } from "~entities/session";
import { Api, ICredentials } from "~shared/api";

export const useLoginUser = () =>
  useMutation({
    mutationKey: sessionApi.sessionKeys.mutation.login(),
    mutationFn: (user: ICredentials) => Api.users.login(user)
  })
