import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Router } from './RouterProvider';
import '../styles/index.css'
import { Suspense } from "react";
import { FullPageWrapper } from "~shared/ui/fullPageWrapper";
import { Spinner } from "~shared/ui/spinner";

const queryClient = new QueryClient({});

export function Provider() {
  return (
      <QueryClientProvider client={ queryClient }>
        <BrowserRouter>
          <Suspense fallback={ <FullPageWrapper><Spinner/></FullPageWrapper> }>
            <Router/>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
  )
}