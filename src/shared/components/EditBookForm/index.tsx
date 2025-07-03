import { useBooks } from "@/shared/hooks/useBooks";
import { BookFormFields } from "../BookFormFields";
import { type AddBookInputs } from "@/schemas/AddBookSchema";

interface EditBookFormProps {
  book: AddBookInputs & { id: string }; // livro para editar, com id
  onSuccess?: () => void;
  onError?: (message: string) => void;
}

export function EditBookForm({ book, onSuccess, onError }: EditBookFormProps) {
  const { editBook } = useBooks();

  const handleEditBook = (data: AddBookInputs) => {
    try {
      editBook({
        ...data,
        id: book.id,
        tags: data.tags?.split(",").map((tag) => tag.trim()) || [],
        createdAt: "",
      });

      onSuccess?.();
    } catch (error) {
      const errorMsg =
        error instanceof Error ? error.message : "Unexpected error";
      onError?.(errorMsg);
    }
  };

  return (
    <BookFormFields
      defaultValues={book}
      onSubmit={handleEditBook}
      submitText="Save changes"
    />
  );
}
