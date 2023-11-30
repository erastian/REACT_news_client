import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { PAGE_PATH } from "~shared/config";

import { MainLayout } from "~pages/main-layout/MainLayout.tsx";
import { AuthLayout } from "~pages/auth-layout/AuthLayout.tsx";
// import { sessionModel } from "~entities/session";

const Login = lazy(() => import('~pages/login'));
const Register = lazy(() => import('~pages/register'));
const HomePage = lazy(() => import('~pages/home'));
const ArticlePage = lazy(() => import('~pages/article-page'));
const Page404 = lazy(() => import('~pages/page-404'));

export function Router() {
  // const isAuth = sessionModel.useAuth();

  return useRoutes([
    {
      element: <AuthLayout/>,
      children: [
        { path: PAGE_PATH.login, element: <Login/> },
        { path: PAGE_PATH.register, element: <Register/> }
      ]
    },
    {
      element: <MainLayout/>,
      children: [
        { path: PAGE_PATH.root, index: true, element: <HomePage/> },
        {
          path: 'article', children: [
            {
              element: <Navigate to={ PAGE_PATH.page404 } replace />,
              index: true,
            },
            { path: ':articleURL', element: <ArticlePage/> }
          ]
        },
        { path: '404', element: <Page404/> },
        { path: '*', element: <Navigate to={ PAGE_PATH.page404 } replace/> }
      ]
    }
  ])
}