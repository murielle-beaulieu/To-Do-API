import { useEffect, useState } from "react";
import {useParams} from "react-router";
import { getTodoById, Todo } from "../../../services/todo-services";

export default function TodoPage() {
  const {id = 'x'} = useParams();
  const [todo, setTodo] = useState<Todo | null>(null);

  console.log(todo);

   useEffect(() => {
      getTodoById(id)
      .then((todo) => setTodo(todo))
      .catch((e) => console.log(e));
    }, [id]);

    console.log(todo);

    if (!todo) {
      return "Todo with id " + id + " does not exists";
    }

  return (
    <>
      <h1>Todo Page</h1>
      <h2>{todo.title}</h2>
    </>
  )
}
