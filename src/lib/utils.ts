import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { type User } from "@/shared/types/User";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// STORAGE
const USER_KEY = "tomo:user";

export function saveUserToStorage(user: User) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function getUserFromStorage(): User | null {
  const stored = localStorage.getItem(USER_KEY);
  return stored ? JSON.parse(stored) : null;
}

export function clearUserFromStorage() {
  localStorage.removeItem(USER_KEY);
}
