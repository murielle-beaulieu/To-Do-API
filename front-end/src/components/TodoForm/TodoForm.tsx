import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, TodoFormData } from "./schema";
import { useEffect, useState } from "react";
import {
  Category,
  getAllCategories,
} from "../../../services/category-services";
import "./TodoForm.css";

interface TodoFormProps {
  onSubmit: (data: TodoFormData) => unknown;
}

export default function TodoForm({ onSubmit }: TodoFormProps) {
  const {
    handleSubmit,
    register,
    formState: { isSubmitSuccessful },
    reset,
  } = useForm<TodoFormData>({ resolver: zodResolver(schema) });

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  isSubmitSuccessful && reset();

  const [categories, setCategories] = useState<Category[]>();

  useEffect(() => {
    getAllCategories()
      .then((categories) => setCategories(categories))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <h2>Create a todo:</h2>
      <article>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Title</label>
            <input type="text" {...register("title")} />
          </div>
          <div>
            <label>Category</label>
            <select {...register("categoryId")}>
              {categories?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <button className="submit">Submit</button>
        </form>
      </article>
    </>
  );
}
