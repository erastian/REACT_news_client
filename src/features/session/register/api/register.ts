import { useMutation } from "@tanstack/react-query";
import { sessionKeys } from "~entities/session/api/sessionApi.ts";
import { Api } from "~shared/api";
import { INewUser } from "~shared/api/models/types.ts";

export const useRegisterUser = () => useMutation({
  mutationKey: sessionKeys.mutation.register(),
  mutationFn: async (data: INewUser) => Api.users.register(data),
})