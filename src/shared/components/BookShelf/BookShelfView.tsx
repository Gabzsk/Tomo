import { type Book } from "@/shared/types/Book";
import { Shelf } from "./Shelf";
import Rating from "@mui/material/Rating";

type BookShelfViewProps = {
  books: Book[];
};

const groupByStatus = (books: Book[]) => {
  return books.reduce((acc, book) => {
    const key = book.status; // Pega o status do livro
    if (!acc[key]) acc[key] = []; // Se ainda não existe essa categoria, cria um array vazio
    acc[key].push(book); // Adiciona o livro no array daquela categoria
    return acc; // Retorna o acumulador para a próxima iteração
  }, {} as Record<string, Book[]>); // Começa com um objeto vazio
};

/*
REDUCE:
 é um método do JavaScript que percorre uma lista e acumula valores em um único resultado (no nosso caso, um objeto que agrupa os livros).
Ele recebe uma função callback que recebe um acumulador (acc) e o item atual (book), e retorna o acumulador atualizado.
O acumulador começa como um objeto vazio {}.
 */

export function BookShelfView({ books }: BookShelfViewProps) {
  const grouped = groupByStatus(books);

  if (books.length === 0) {
    return (
      <div className="mt-8 w-full max-w-3xl border bg-[#dfd3bd] rounded-lg p-6 shadow-inner">
        <p className="text-center text-[#3e3121] italic">
          Your bookshelf is empty. Add your first book to start filling it!
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-surface min-h-fit  bg-[#9c8674] rounded border-7 border-[#75563c]">
      {Object.entries(grouped).map(([status, books]) => (
        <section key={status} className="mb-10 py-4">
          <div className="flex gap-6 overflow-x-auto overflow-y-visible no-scrollbar px-4 py-2 ">
            {books.map((book) => (
              <div
                key={book.id}
                className="group/item flex-shrink-0 relative z-0 rounded-sm cursor-pointer shadow-lg hover:scale-105 origin-bottom transition-transform duration-300 overflow-hidden flex flex-col justify-between items-center"
                style={{
                  width: 60,
                  height: 160,
                  backgroundColor: book.color || "#4A5A3F",
                  boxShadow: "2px 4px 6px rgba(0,0,0,0.3)",
                  padding: "6px 4px",
                }}
              >
                <div
                  className="font-semibold text-center text-[#f6f1e7] pl-0"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                  }}
                >
                  {`${book.title} ~ ${book.author}`}
                </div>
                <div
                  style={{
                    transform: "scale(0.75)",
                    transformOrigin: "center",
                  }}
                >
                  <Rating
                    name={`rating-${book.id}`}
                    value={book.rating ?? 0}
                    precision={0.5}
                    readOnly
                    sx={{
                      fontSize: 14,
                    }}
                    className="group/edit invisible group-hover/item:visible"
                  />
                </div>
              </div>
            ))}
          </div>
          <Shelf title={status} />
        </section>
      ))}
    </div>
  );
}
