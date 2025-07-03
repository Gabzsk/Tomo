import z from "zod";

export const AddBookSchema = z.object({
  title: z.string().min(1, "Mandatory title."),
  author: z.string().min(1, "Mandatory author."),
  status: z.enum(["wishlist", "to-read", "reading", "completed"], {
    required_error: "Status is required",
  }),
  tags: z.string().optional(),
  rating: z
    .number()
    .min(0)
    .max(5)
    .refine((val) => val % 0.5 === 0, {
      message: "Use estrelas em passos de 0.5",
    }),
  color: z.string().optional(),
});

export type AddBookInputs = z.infer<typeof AddBookSchema>;
