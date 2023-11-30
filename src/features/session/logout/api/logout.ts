import { sessionModel, sessionApi } from "~entities/session";
import { QueryClient } from '@tanstack/react-query';

export function logout(queryClient: QueryClient) {
  queryClient.removeQueries({ queryKey: sessionApi.sessionKeys.session.currentUser(), exact: true });
  sessionModel.removeUserFromStore();
  sessionModel.removeAccessTokenFromStore();
}