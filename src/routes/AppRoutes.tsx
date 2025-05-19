import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

export function AppRoutes() {
  // A INSERIR:
  // path / = element={<Home />}
  // path /login =  element={<Login />}
  // path /dashboard =  element={<Dashboard />}

  return (
    <Routes>
      <Route path="/">
        <>Home Page</>
      </Route>
      <Route path="/login">
        <>Login Page</>
      </Route>
      {/* Rota protegida */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <>Dashboard Page</>
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
}
