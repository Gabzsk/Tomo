import { useContext } from "react";
import { AuthContext } from "@/auth/context/AuthContext";

// O useAuth é um helper externo, feito para componentes fora do contexto acessarem o AuthContext com segurança e tipagem.
/*
✅ Onde usar useAuth:
- Componentes que precisam saber se o usuário está logado
- Componentes que exibem dados do usuário
- Botões de login/logout
- Páginas protegidas
*/

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
