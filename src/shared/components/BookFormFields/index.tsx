import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller } from "react-hook-form";
import Rating from "@mui/material/Rating";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddBookSchema, type AddBookInputs } from "@/schemas/AddBookSchema";
import { PrimaryButton } from "@/components/PrimaryButton";

interface BookFormFieldsProps {
  defaultValues?: Partial<AddBookInputs>;
  onSubmit: SubmitHandler<AddBookInputs>;
  submitText?: string;
}

export function BookFormFields({
  defaultValues,
  onSubmit,
  submitText = "Done",
}: BookFormFieldsProps) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<AddBookInputs>({
    resolver: zodResolver(AddBookSchema),
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-4 bg-[#FFF8F0] rounded-xl shadow-sm border border-[#E0D8C3]"
    >
      <div className="space-y-1">
        <Label htmlFor="title">Title</Label>
        <Input id="title" placeholder="Book title" {...register("title")} />
        {errors.title && (
          <p className="text-sm text-red-500">{errors.title.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="author">Author</Label>
        <Input id="author" placeholder="Author name" {...register("author")} />
        {errors.author && (
          <p className="text-sm text-red-500">{errors.author.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="status">Status</Label>
        <Select
          defaultValue={defaultValues?.status}
          onValueChange={(value) =>
            setValue("status", value as AddBookInputs["status"])
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="wishlist">Wishlist</SelectItem>
            <SelectItem value="to-read">To Read</SelectItem>
            <SelectItem value="reading">Reading</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
        {errors.status && (
          <p className="text-sm text-red-500">{errors.status.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="tags">Tags (comma separated)</Label>
        <Input
          id="tags"
          type="text"
          placeholder="fantasy, 2024, fiction"
          {...register("tags")}
        />
      </div>

      {/* <div className="space-y-1">
        <Label htmlFor="rating">Rating</Label>
        <Input
          id="rating"
          type="number"
          min={1}
          max={5}
          step={1}
          placeholder="1 to 5"
          {...register("rating", { valueAsNumber: true })}
        />
        {errors.rating && (
          <p className="text-sm text-red-500">{errors.rating.message}</p>
        )}
      </div> */}

      <div className="space-y-1 group">
        <Label htmlFor="rating">Rating</Label>
        <Controller
          control={control}
          name="rating"
          render={({ field }) => (
            <Rating
              {...field}
              id="rating"
              precision={0.5}
              max={5}
              size="large"
              value={field.value ?? 0}
              onChange={(_, value) => field.onChange(value)}
            />
          )}
        />
        {errors.rating && (
          <p className="text-sm text-red-500">{errors.rating.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="book color">Book color</Label>
        <Input
          id="color"
          type="color"
          {...register("color")}
          defaultValue={defaultValues?.color || "#4A5A3F"}
          className="w-16 h-10 p-1 rounded border shadow"
        ></Input>
      </div>

      <PrimaryButton type="submit" className="w-full">
        {submitText}
      </PrimaryButton>
    </form>
  );
}
