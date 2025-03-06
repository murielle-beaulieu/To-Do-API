import * as z from 'zod';

export const schema = z.object({
  title: z.string().min(1),
  // Parse the category as a string then transform it to a number
  categoryId: z.string().min(1).transform((val) => Number(val)),
});


export type TodoFormData = z.infer<typeof schema>;
