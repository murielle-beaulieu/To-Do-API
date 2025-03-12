import * as z from "zod";

export const schema = z.object({
  title: z.string().min(1, { message: "Todo title cannot be empty" }),
  categoryId: z
    .string()
    .min(1)
    .transform((val) => Number(val)),
});

export type TodoFormData = z.infer<typeof schema>;
