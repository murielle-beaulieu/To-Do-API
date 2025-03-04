import { createTodo } from "../../services/todo-services";
import { TodoFormData } from "../components/TodoForm/schema";
import TodoForm from "../components/TodoForm/TodoForm";

export default function NewTodoPage() {
  const onSubmit = (data: TodoFormData) => {
    createTodo(data)
    .then((todo) => {
      console.log('created ' + todo.title);
    })
    .catch((e)=> console.log(e));
  }
  return(
    <>
      <h1>New Todo Page</h1>
      <TodoForm onSubmit={onSubmit}/>
    </>
  )
}
