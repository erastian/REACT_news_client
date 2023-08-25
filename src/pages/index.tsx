import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import('./Home'));
const NotFoundPage = lazy(() => import('./404page'));

export const Routing = () => {
  return (
      <Routes>
        <Route index element={ <HomePage/> }/>
        <Route path='*' element={ <NotFoundPage/> }/>
      </Routes>
  )
}
