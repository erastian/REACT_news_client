import React, { createContext, useEffect, useMemo, useState } from "react";
import { Api } from "~shared/api";
import { useNavigate } from "react-router-dom";
import { PAGE_PATH } from "~shared/config";
import { ICredentials, IUser } from "~shared/api";

export interface AuthContextInterface {
  user?: IUser;
  loading: boolean;
  Login: (user: ICredentials) => void;
  register: (user: ICredentials) => void;
  logout: () => void
}

export const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface);

interface AuthProviderProps {
  children: React.ReactNode;
}


export function AuthProvider({ children }: AuthProviderProps) {
  const [ user, setUser ] = useState<IUser>();
  const [ loading, setLoading ] = useState(false);
  const [ loadingInitial, setLoadingInitial ] = useState(true);

  const navigate = useNavigate();

  const setToken = (token: string) => {
    localStorage.setItem('accessToken', token);
  }

  const removeToken = () => {
    localStorage.removeItem('accessToken');
  }

  useEffect(() => {
    Api.users.currentUser()
        .then((data) => setUser(data.user))
        .catch((_error) => console.log(_error))
        .finally(() => setLoadingInitial(false));
  }, []);

  const Login = (user: ICredentials) => {
    setLoading(true);
    Api.users.login(user)
        .then((data) => {
          setUser(data.user);
          setToken(data.accessToken);
          navigate(PAGE_PATH.root)
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
  }

  const register = (user: ICredentials) => {
    setLoading(true)
    console.log(user)
    setLoading(false)
  }

  const logout = () => {
    setUser(undefined);
    removeToken();
  }

  const memoValues: AuthContextInterface = useMemo(
      () => ({
        user,
        loading,
        Login,
        register,
        logout
      }), [ user, loading ]
  )

  return <AuthContext.Provider value={ memoValues }>{ !loadingInitial && children }</AuthContext.Provider>
}

