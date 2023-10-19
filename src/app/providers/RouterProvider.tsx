import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { MainLayout } from "~pages/main-layout/MainLayout.tsx";
import { PAGE_PATH } from "~shared/config";

const HomePage = lazy(() => import('~pages/home'));
const ArticlePage = lazy(() => import('~pages/article-page'));
const Page404 = lazy(() => import('~pages/page-404'));

export function Router() {
  return useRoutes([
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