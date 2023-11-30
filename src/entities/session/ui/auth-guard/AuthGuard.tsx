import React from "react";
import { Navigate } from "react-router-dom";
import { PAGE_PATH } from "~shared/config";

type Props = {
  isAuth: boolean;
  children: React.ReactNode;
}

export function AuthGuard(props: Props) {
  const { isAuth, children } = props;

  if (isAuth) return <Navigate to={ PAGE_PATH.root }/>

  return <>{ children }</>
}