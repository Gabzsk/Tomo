import { useBooks } from "@/shared/hooks/useBooks";
import { BookCard } from "../BookCard";

export function BookList() {
  const { books } = useBooks();

  if (books.length === 0) {
    return (
      <div className="mt-8 w-full max-w-3xl bg-[#EFE8D8] border border-soft rounded-lg p-6 shadow-inner">
        <p className="text-center text-[#4A5F2C] italic">
          Your bookshelf is empty. Add your first book to start filling it!
        </p>
      </div>
    );
  }
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </section>
  );
}
