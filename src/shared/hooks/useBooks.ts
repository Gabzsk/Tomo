import { useContext } from "react";
import { BookContext } from "../context/BookContext";

export function useBooks() {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBooks deve ser usado dentro de BookProvider");
  }
  return context;
}
