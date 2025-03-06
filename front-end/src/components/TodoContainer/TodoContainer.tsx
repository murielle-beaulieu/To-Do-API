import { Todo } from "../../../services/todo-services";
import "../TodoContainer/TodoContainer.css";

interface TodoContainerProps {
  todo: Todo,
}

export default function TodoContainer({todo}: TodoContainerProps){

  // work in progress
  function onClick() {
    console.log('archived')
    // archiveTodo(todo.id)
    //   .then()
    //   .catch((e) => console.log(e));
  }

  return (
    <section key={todo.id}>
      <h2>{todo.title}</h2>
      <h3>{todo.category?.name || 'No Category'}</h3>

      {/* my soft delete function */}
      <button onClick={()=>onClick()}>done</button>
    </section>
  )
}
