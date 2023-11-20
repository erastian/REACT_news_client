import { useContext } from "react";
import { AuthContext } from './api/useAuth.tsx'
export { AuthProvider } from './api/useAuth.tsx'

export default function useAuth() {
  return useContext(AuthContext);
}