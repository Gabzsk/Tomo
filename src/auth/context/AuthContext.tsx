import { createContext, useState, type ReactNode } from "react";
import {
  saveUserToStorage,
  getUserFromStorage,
  clearUserFromStorage,
} from "@/lib/utils";
import { type User } from "@/shared/types/User";

// Define o tipo dos dados do Usuário - quem é ele, quais funções estão disponíveis...
type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

// Cria o contexto em si, do tipo que criamos acima, começando como undefined (um placeholder)
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// Componente Provider (distribuidor do nosso contexto criado em AuthContext) que envolve a aplicação e compartilha o state de autenticação.
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => getUserFromStorage());

  // Simula login, aceitando qualquer senha
  const login = (email: string, password: string) => {
    const fakeUser = { name: "Jane", email };
    setUser(fakeUser);
    saveUserToStorage(fakeUser);
  };

  const logout = () => {
    setUser(null);
    clearUserFromStorage();
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Por fim, envolve App.ts com AuthProvider em main.tsx
