import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CategoryFormData, schema } from "../CategoryForm/schema";

interface CategoryFormProps {
  onSubmit: (data: CategoryFormData) => unknown;
  title: string;
  existingValue: string;
}

export default function CategoryForm({ onSubmit, title, existingValue }: CategoryFormProps) {
  const {
    handleSubmit,
    register,
    formState: { isSubmitSuccessful },
    reset,
  } = useForm<CategoryFormData>({ resolver: zodResolver(schema) });

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  isSubmitSuccessful && reset();

  return (
    <>
      <h2>{title} category:</h2>
      <article>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Name</label>
            <input type="text" defaultValue={existingValue} {...register("name")} />
          </div>
          <button className="submit">Submit</button>
        </form>
      </article>
    </>
  );
}
