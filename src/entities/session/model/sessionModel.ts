import { Api, IUser } from "~shared/api";
import { createStore, StateCreator, useStore } from "zustand";
import { devtools, persist } from "zustand/middleware";

type SessionState = {
  user: IUser | null;
  accessToken: string | null;
  addUserToStore: (user: IUser) => void;
  removeUserFromStore: () => void;
  addToken: (accessToken: string) => void;
  removeToken: () => void;
}


const createSessionSlice: StateCreator<
    SessionState,
    [ [ 'zustand/devtools', never ], [ 'zustand/persist', unknown ] ],
    [],
    SessionState
> = (set) => ({
  user: null,
  accessToken: null,

  addUserToStore: (user: IUser) => {
    set({ user }, false, 'session/addUserToStore');
  },

  removeUserFromStore: () => {
    set({ user: null }, false, 'session/removeUserFromStore');
  },

  addToken: (accessToken: string) => {
    set({ accessToken }, false, 'session/TokenAdded');
    localStorage.setItem('accessToken', accessToken);
  },

  removeToken: () => {
    set({ accessToken: null }, false, 'session/TokenRemoved');
    localStorage.removeItem('accessToken');
  }
});


export const sessionStore = createStore<SessionState>()(
    persist(
        devtools(
            (...a) => ({
              ...createSessionSlice(...a),
            }), { name: 'Session Store' },
        ), {
          name: 'session',
          onRehydrateStorage: () => (state) => {
            if (state?.user && state?.accessToken) {
              const { accessToken, user } = state;
              if (user) localStorage.setItem('accessToken', accessToken);
              if (!user) localStorage.removeItem('accessToken');
            }
          },
        },
    ),
);

export const useAuth = (): boolean => {
  return useStore(sessionStore, (state) => !!state.accessToken);
}

export const useCurrentUser = (): IUser | null => {
  return useStore(sessionStore, (state) => state.user);
}

export const addUserToStore = (user: IUser) => sessionStore.getState().addUserToStore(user);

export const removeUserFromStore = () => sessionStore.getState().removeUserFromStore();

export const addAccessTokenToStore = (accessToken: string) => sessionStore.getState().addToken(accessToken);

export const removeAccessTokenFromStore = async () => {
  await Api.users.logout().then(r => console.log('Server message: ', r));
  sessionStore.getState().removeToken();
}