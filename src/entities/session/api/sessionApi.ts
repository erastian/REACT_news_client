import { useQuery } from "@tanstack/react-query";
import { Api } from "~shared/api";
import { addUserToStore } from "~entities/session/model/sessionModel.ts";


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
  useQuery({
    queryKey: sessionKeys.session.currentUser(),
    queryFn: async () => {
      const response = await Api.users.getCurrentUser();
      const user = response.user;

      addUserToStore(user);
      return user
    }
  })
}
