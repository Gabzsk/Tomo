import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import { Toaster } from "sonner";

export function AppRoutes() {
  return (
    <>
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
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            borderRadius: "1rem",
            background: "#f5f5dc",
            color: "#3c2f2f",
            border: "1px solid #a3a380",
          },
          className: "shadow-md",
        }}
      />
    </>
  );
}
