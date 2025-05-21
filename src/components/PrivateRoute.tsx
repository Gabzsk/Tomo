import { useAuth } from "@/shared/hooks/useAuth";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}
