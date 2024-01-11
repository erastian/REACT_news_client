import { useQuery } from "@tanstack/react-query";
import { Api, IUser } from "~shared/api";


export const sessionKeys = {
  session: {
    root: [ 'session' ],
    currentUser: () => [ ...sessionKeys.session.root, 'currentUser' ],
  },
  mutation: {
    login: () => [ ...sessionKeys.session.root, 'login' ],
    register: () => [ ...sessionKeys.session.root, 'register' ],
  }
}

export const useCurrentUser = () => {
  useQuery<IUser | Error>({
    queryKey: sessionKeys.session.currentUser(),
    queryFn: async (): Promise<IUser | Error> => {
      const response = await Api.users.getCurrentUser();

      return response.user
    }
  })
}
