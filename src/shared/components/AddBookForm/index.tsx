import { useBooks } from "@/shared/hooks/useBooks";
import { BookFormFields } from "../BookFormFields";
import { type AddBookInputs } from "@/schemas/AddBookSchema";

interface AddBookFormProps {
  onSuccess?: () => void;
  onError?: (message: string) => void;
}

export function AddBookForm({ onSuccess, onError }: AddBookFormProps) {
  const { addBook } = useBooks();

  const getRandomColor = (seed: string) => {
    const hash = [...seed].reduce((acc, c) => acc + c.charCodeAt(0), 0);
    const hue = hash % 360;
    return `hsl(${hue}, 40%, 35%)`;
  };

  const handleAddBook = (data: AddBookInputs) => {
    try {
      const color = data.color || getRandomColor(data.title + data.author);

      addBook({
        ...data,
        color,
        id: crypto.randomUUID(),
        tags: data.tags?.split(",").map((tag) => tag.trim()) || [],
        createdAt: new Date().toISOString(),
      });

      onSuccess?.();
    } catch (error) {
      const errorMsg =
        error instanceof Error ? error.message : "Unexpected error";
      onError?.(errorMsg);
    }
  };

  return <BookFormFields onSubmit={handleAddBook} submitText="Add Book" />;
}
