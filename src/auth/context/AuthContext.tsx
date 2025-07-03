import { createContext, useState, type ReactNode } from "react";
import { type User } from "@/shared/types/User";
import { type AuthContextType, type LoginData } from "@/shared/types/Auth";
import {
  saveUserToStorage,
  getUserFromStorage,
  clearUserFromStorage,
} from "@/lib/utils";

// Cria o contexto em si, do tipo que criamos acima, começando como undefined (um placeholder)
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// Componente Provider (distribuidor do nosso contexto criado em AuthContext) que envolve a aplicação e compartilha o state de autenticação.
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => getUserFromStorage());

  // Simula login, aceitando qualquer senha
  const login = ({ email, password }: LoginData) => {
    const fakeUser = { name: "Jane", email, password };
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
