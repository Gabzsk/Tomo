import { useAuth } from "@/shared/hooks/useAuth";
import { AddBookForm } from "@/shared/components/AddBookForm";
import { showToast } from "@/lib/toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { BookShelfView } from "@/shared/components/BookShelf/BookShelfView";
import { useBooks } from "@/shared/hooks/useBooks";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import { FilterSelect } from "@/shared/components/FilterSelect/FilterSelect";

export default function Home() {
  const { logout } = useAuth();
  const { books } = useBooks();

  // DIALOG STATE
  const [open, setOpen] = useState(false);

  // FILTER STATES
  const [selectedStatus, setSelectedStatus] = useState<string | undefined>();
  const [selectedTag, setSelectedTag] = useState<string | undefined>();
  const [minRating, setMinRating] = useState<string | undefined>();

  // FILTER SECTION STATE
  const [filtersVisible, setFiltersVisible] = useState(false);

  const filteredBooks = books.filter((book) => {
    const rating = book.rating ?? 0;
    const tags = book.tags ?? [];
    const numericMinRating = Number(minRating);

    const filteredStatus = !selectedStatus || book.status === selectedStatus;
    const filteredTag = !selectedTag || tags.includes(selectedTag);
    const filteredRating = !minRating || rating >= numericMinRating;
    return filteredStatus && filteredTag && filteredRating;
  });

  return (
    <div className="min-h-screen flex flex-col  font-serif">
      {/* HEADER */}
      <header className="w-full bg-[#e2d4c3] text-[#3e3121] ">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">📜 Tomo</h1>
          <button
            className="text-sm px-3 py-1 border border-[#3e3121] rounded hover:bg-[#dfd3bd] transition cursor-pointer"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </header>

      {/* CONTEÚDO */}
      <main className="relative flex-grow flex flex-col items-center px-4 py-10 bg-[#f6f1e7]">
        <section className="max-w-2xl w-full text-center">
          <h2 className="text-[2rem] font-semibold font-serif  text-[#4A5F2C] mb-6 flex items-center justify-center gap-2">
            My bookshelf
          </h2>

          {/* Botão + Dialog */}
          <Dialog open={open} onOpenChange={setOpen}>
            <div className="flex justify-center mb-6">
              <DialogTrigger asChild>
                <button className="bg-[#4A5F2C] hover:bg-[#455332] text-[#fff8f0] px-6 py-2 rounded-full shadow-inner transition cursor-pointer">
                  Add Book
                </button>
              </DialogTrigger>
            </div>

            <DialogContent className="bg-[#FAF3E0] rounded-xl shadow-lg border border-[#D6CFC1]">
              <DialogHeader>
                <DialogTitle className="p-4 text-center text-2xl text-[#4A5F2C]">
                  New Book
                </DialogTitle>
                <DialogDescription>
                  Fill in the details below to add a book to the shelf.
                </DialogDescription>
                <AddBookForm
                  onSuccess={() => {
                    showToast.success("Book added to your shelf! 📚");
                    setOpen(false);
                  }}
                  onError={(message) => showToast.error(`Oops! ${message}`)}
                />
              </DialogHeader>
              <DialogFooter></DialogFooter>
            </DialogContent>
          </Dialog>
        </section>

        {/* Filtros */}
        <div className="flex items-center justify-between w-full max-w-3xl mt-4 mb-2 px-2">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-[#4A5F2C]">
                Filters
              </CardTitle>
              <Button
                variant="secondary"
                size="icon"
                className="size-8 text-sm text-[#4A5F2C] hover:underline hover:text-[#374a23]"
                onClick={() => setFiltersVisible((prev) => !prev)}
              >
                {filtersVisible ? <ChevronDownIcon /> : <ChevronRightIcon />}
              </Button>
              <CardDescription>Filter all your books by status</CardDescription>
            </CardHeader>
            {/* conteúdo dos filtros aqui */}
          </Card>
        </div>
        {filtersVisible && <FilterSelect />}

        {/* Lista de livros */}
        <section className="mt-6 w-full max-w-3xl">
          <BookShelfView books={filteredBooks} />
        </section>
      </main>

      <footer className=" text-[#4a5a3f] text-sm py-4 text-center">
        Your digital reading nook 🍂
      </footer>
    </div>
  );
}
