import { BrowserRouter } from "react-router-dom";
import './styles/index.css'
import { Routing } from '../pages';
import Header from "../widgets/Header";
import { Suspense } from "react";


function App() {

  return (
      <>
        <BrowserRouter>
          <Suspense fallback="Loading...">
            <Header />
            <Routing />
          </Suspense>
        </BrowserRouter>
      </>
  )
}

export default App;
