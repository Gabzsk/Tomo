import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import Login from "@/pages/Login";
import Home from "@/pages/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />}></Route>
      {/* Rota protegida */}
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
}
