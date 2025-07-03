import { createContext, useState, type ReactNode } from "react";
import { type Book } from "../types/Book";

type BookContextType = {
  books: Book[];
  addBook: (book: Book) => void;
  deleteBook: (id: string) => void;
  editBook: (updatedBook: Book) => void;
};

export const BookContext = createContext<BookContextType | undefined>(
  undefined
);

export function BookProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState<Book[]>([]);

  const addBook = (book: Book) => {
    setBooks((prev) => [
      ...prev,
      {
        ...book,
        tags: book.tags ?? [], // garante que sempre será um array
      },
    ]);
  };

  const deleteBook = (id: string) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  const editBook = (updatedBook: Book) => {
    setBooks((prev) =>
      prev.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
  };

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook, editBook }}>
      {children}
    </BookContext.Provider>
  );
}
