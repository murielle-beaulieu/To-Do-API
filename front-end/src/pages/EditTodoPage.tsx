import { useParams } from "react-router";
import { editTodo} from "../../services/todo-services";
import TodoForm from "../components/TodoForm/TodoForm";
import { TodoFormData } from "../components/TodoForm/schema";

export default function EditTodoPage() {
  const {id} = useParams<{id: string}>();

  const onSubmit = (data: TodoFormData) => {
    if(id){
      editTodo(id, data)
      .then((todo) => {
        console.log(todo.title + 'has been updated');
      }).catch((e) => console.log(e));
    }
  };

  return (
    <>
      <h1>Edit Todo Page</h1>
      <TodoForm onSubmit={onSubmit} id={id}/>
    </>
  )
}
