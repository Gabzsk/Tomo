import { type Book } from "@/shared/types/Book";

// Simula um backend, salvando e recuperando livros do localStorage. Isso facilita usar depois com Context ou Firebase.

const STORAGE_KEY = "books";

export const bookService = {
  getBooks(): Book[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  addBook(book: Book): void {
    const books = bookService.getBooks();
    books.push(book);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  },

  updateBook(updatedBook: Book): void {
    const books = bookService
      .getBooks()
      .map((book) => (book.id === updatedBook.id ? updatedBook : book));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  },

  deleteBook(id: string): void {
    const books = bookService.getBooks().filter((book) => book.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  },
};
