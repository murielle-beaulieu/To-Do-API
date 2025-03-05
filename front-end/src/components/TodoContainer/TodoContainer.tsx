import { Todo } from "../../../services/todo-services";
import "../TodoContainer/TodoContainer.css";

interface TodoContainerProps {
  todo: Todo,
}

export default function TodoContainer({todo}: TodoContainerProps){
  return (
    <section key={todo.id}>
      <h2>{todo.title}</h2>
      <h3>{todo.category?.name || 'No Category'}</h3>
    </section>
  )
}
