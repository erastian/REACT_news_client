import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import NotFound from "../pages/NotFound";
import './index.css'
import Header from "../components/Header/Header";


function Index() {

  return (
      <>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route index element={ <Homepage/> }/>
            <Route path='*' element={ <NotFound/> }/>
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default Index
