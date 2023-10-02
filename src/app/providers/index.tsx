import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Router } from './RouterProvider';
import '../styles/index.css'

const queryClient = new QueryClient({});

export function Provider() {
  return (
      <QueryClientProvider client={ queryClient }>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
  )
}