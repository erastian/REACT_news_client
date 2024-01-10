import { sessionApi } from "~entities/session";
import { QueryClient } from '@tanstack/react-query';
import { Api } from "~shared/api";

export async function logout(queryClient: QueryClient) {
  queryClient.removeQueries({ queryKey: sessionApi.sessionKeys.session.currentUser(), exact: true });
  await Api.users.logout().then(r => console.log('Server message: ', r));
  localStorage.removeItem('accessToken');
}