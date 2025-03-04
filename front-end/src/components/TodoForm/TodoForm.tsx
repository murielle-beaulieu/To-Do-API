import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { schema, TodoFormData } from "./schema";


interface TodoFormProps {
  onSubmit: (data: TodoFormData) => unknown;
}

export default function TodoForm({onSubmit}: TodoFormProps) {
  const {
    handleSubmit,
    register,
    formState: {isSubmitSuccessful},
    reset,
   } = useForm<TodoFormData>({resolver: zodResolver(schema) });

   // eslint-disable-next-line @typescript-eslint/no-unused-expressions
   isSubmitSuccessful && reset();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Title</label>
        <input type="text" {...register('title')} />
      </div>
      <div>
        <label>Category</label>
        <select {...register('category')}>
            <option value={1}>
              1
            </option>
        </select>
      </div>
      <button>Submit</button>
    </form>
  );
}
