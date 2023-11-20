import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from "react-router-dom";
import { Router } from './RouterProvider';
import '../styles/index.css'
import { Suspense } from "react";
import { AuthProvider } from "~features/session";
import { StoreProvider } from "~features/store";
import { FullPageWrapper } from "~shared/ui/fullPageWrapper";
import { Spinner } from "~shared/ui/spinner";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
});

export function Provider() {
  return (
      <BrowserRouter>
        <QueryClientProvider client={ queryClient }>
          <StoreProvider>
            <AuthProvider>
              <Suspense fallback={ <FullPageWrapper><Spinner/></FullPageWrapper> }>
                <Router/>
              </Suspense>
            </AuthProvider>
          </StoreProvider>
          <ReactQueryDevtools initialIsOpen={ false }/>
        </QueryClientProvider>
      </BrowserRouter>
  )
}