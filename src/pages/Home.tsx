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
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import Rating from "@mui/material/Rating";
import { useFilterStore } from "@/shared/stores/useFilterStore";
import {
  statusOptions,
  tagOptions,
  minRatingValues,
} from "@/shared/variables/FormVariables";

export default function Home() {
  const { logout } = useAuth();
  const { books } = useBooks();

  // DIALOG STATE
  const [open, setOpen] = useState(false);

  // // FILTER SECTION STATE
  const [filtersVisible, setFiltersVisible] = useState(false);

  // ZUSTAND DATA
  const {
    selectedStatus,
    selectedTag,
    minRating,
    setSelectedStatus,
    setSelectedTag,
    setMinRating,
  } = useFilterStore();

  // FILTER LOGIC
  const filteredBooks = books.filter((book) => {
    const tags = book.tags ?? [];
    const rating = book.rating ?? 0;

    const filteredStatus = !selectedStatus || book.status === selectedStatus;
    const filteredTag = !selectedTag || tags.includes(selectedTag);
    const filteredRating = !minRating || rating >= minRating;

    return filteredStatus && filteredTag && filteredRating;
  });

  const resetFilters = useFilterStore((state) => state.resetFilters);

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
      <main className="relative flex-grow flex flex-col items-center px-4 py-10">
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
        <div className="w-full flex justify-start max-w-3xl px-2 mt-4 mb-2">
          <Card className="w-full max-w-xs bg-transparent border border-none shadow-none">
            <CardHeader className="pb-2">
              <div className="flex justify-start">
                <CardTitle className="text-base opacity-90 text-[#4A5F2C]">
                  Filters
                </CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[#4A5F2C]/70 hover:text-[#374a23] size-6"
                  onClick={() => setFiltersVisible((prev) => !prev)}
                >
                  {filtersVisible ? <ChevronDownIcon /> : <ChevronRightIcon />}
                </Button>
              </div>
            </CardHeader>
            {filtersVisible && (
              <div className="flex flex-col gap-2 px-4 pb-4">
                <Select
                  value={selectedStatus ?? ""}
                  onValueChange={setSelectedStatus}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map((options) => (
                      <SelectItem key={options.value} value={options.value}>
                        {options.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={selectedTag ?? ""}
                  onValueChange={setSelectedTag}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by Tag" />
                  </SelectTrigger>
                  <SelectContent>
                    {tagOptions.map((options) => (
                      <SelectItem key={options.value} value={options.value}>
                        {options.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={minRating?.toString() ?? ""}
                  onValueChange={(value) => setMinRating(Number(value))}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Minimum rating" />
                  </SelectTrigger>
                  <SelectContent>
                    {minRatingValues.map((star) => (
                      <SelectItem key={star} value={star.toString()}>
                        <Rating
                          value={star}
                          readOnly
                          precision={0.5}
                          size="small"
                        />
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  variant="ghost"
                  className="text-x text-[#4A5F2C] hover:underline flex justify-start"
                  onClick={resetFilters}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </Card>
        </div>

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
