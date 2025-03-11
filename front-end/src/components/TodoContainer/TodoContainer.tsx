import { archiveTodo, Todo } from "../../../services/todo-services";
import "./TodoContainer.css";

interface TodoContainerProps {
  todo: Todo,
}

export default function TodoContainer({todo}: TodoContainerProps){
  // work in progress - does archive them but needs page refresh
  function onClick() {
    console.log('archived todo ' + todo.id )
    archiveTodo(`${todo.id}`)
      .then()
      .catch((e) => console.log(e));
  }

  return (
    <section key={todo.id} className="todo">
      <h2>{todo.title}</h2>
      <h3>{todo.category?.name || 'No Category'}</h3>
      <button onClick={()=> onClick()} className="done">done</button>
    </section>
  )
}
