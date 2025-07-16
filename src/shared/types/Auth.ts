import type { User } from "./User";

export type LoginData = {
  email: string;
  password: string;
};

// Define o tipo dos dados do Usuário - quem é ele, quais funções estão disponíveis...
export type AuthContextType = {
  user: User | null;
  login: (data: LoginData) => void;
  logout: () => void;
  isAuthenticated: boolean;
};
