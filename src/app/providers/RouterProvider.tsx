import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { MainLayout } from "../../pages/main-layout/MainLayout.tsx";
import { PAGE_PATH } from "~shared/lib/router/paths.ts";

const HomePage = lazy(() => import('~pages/home'));
const Page404 = lazy(() => import('~pages/page-404'));

export function Router() {
  return useRoutes([
    {
      element: <MainLayout/>,
      children: [
        { path: PAGE_PATH.root, index: true, element: <HomePage /> },
        { path: '404', element: <Page404/> },
        { path: '*', element: <Navigate to={ PAGE_PATH.page404 } replace/> }
      ]
    }
  ])
}