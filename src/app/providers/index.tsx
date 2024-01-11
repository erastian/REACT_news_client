import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from "react-router-dom";
import { Router } from './RouterProvider';
import '../styles/index.css'
import { Suspense } from "react";
import { FullPageWrapper } from "~shared/ui/fullPageWrapper";
import { Spinner } from "~shared/ui/spinner";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
});

export function GlobalProvider() {
  return (
      <BrowserRouter>
        <QueryClientProvider client={ queryClient }>
              <Suspense fallback={ <FullPageWrapper><Spinner/></FullPageWrapper> }>
                <Router/>
              </Suspense>
          <ReactQueryDevtools initialIsOpen={ false }/>
        </QueryClientProvider>
      </BrowserRouter>
  )
}