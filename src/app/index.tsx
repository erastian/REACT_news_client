import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/index.css'
import Header from "../widgets/header";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import('../pages/home'));
const NotFoundPage = lazy(() => import('../pages/404page'));


function App() {

  return (
      <>
        <BrowserRouter>
          <Suspense fallback="Loading...">
            <Header />
            <Routes>
              <Route index element={ <HomePage/> }/>
              <Route path='*' element={ <NotFoundPage/> }/>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </>
  )
}

export default App;
