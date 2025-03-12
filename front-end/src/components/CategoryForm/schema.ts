import * as z from 'zod';

export const schema = z.object({
  name: z.string().min(1, { message: "Category name cannot be empty" }),
})

export type CategoryFormData = z.infer<typeof schema>;
