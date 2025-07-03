import { Navigate } from "react-router-dom";
import { useAuth } from "@/shared/hooks/useAuth";

export function PublicRout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to="/home" /> : <>{children}</>;
}
