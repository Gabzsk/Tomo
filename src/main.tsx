import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "./auth/context/AuthContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { BookProvider } from "./shared/context/BookContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <BookProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BookProvider>
    </BrowserRouter>
  </StrictMode>
);
