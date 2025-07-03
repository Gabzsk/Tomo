import { Navigate } from "react-router-dom";
import { useAuth } from "@/shared/hooks/useAuth";
import type { ReactNode } from "react";

type PrivateRouteProps = {
  children: ReactNode;
};

// Objetivo: somente renderizar componentes protegidos se o usuário estiver autenticado.
export function PrivateRoute({ children }: PrivateRouteProps) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
