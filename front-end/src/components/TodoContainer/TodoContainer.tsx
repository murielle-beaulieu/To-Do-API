import { useState } from "react";
import { archiveTodo, duplicateTodo, Todo } from "../../../services/todo-services";
import "./TodoContainer.css";

interface TodoContainerProps {
  todo: Todo,
}

export default function TodoContainer({todo}: TodoContainerProps){
  const [show, setShow] = useState(false);

  function done() {
    console.log('archived todo ' + todo.id )
    archiveTodo(`${todo.id}`)
      .then()
      .catch((e) => console.log(e));
    window.location.reload();
  }

  function duplicate() {
      const id = `${todo.id}`;
      duplicateTodo(id)
        .then((todo) => console.log("successfully duplicated" + todo.title))
        .catch((e) => console.log(e))
      window.location.reload();

    };

  function reveal() {
    setShow(!show);
  }

  return (
    <section key={todo.id} className="todo">
      <div>
        <h2>{todo.title}</h2>
        <h3>{todo.category?.name || 'No Category'}</h3>
      </div>
      {!todo.isArchived ? <div className="menu">
        <button className="menu_elipsis" onClick={() => reveal()}>
        {'\u22EE'}
        </button>
          <div className="menu_opt" >
          {show == true &&
          <>
            <div className="opt" onClick={() => console.log('edit - want to open the modal')}>edit</div>
            <div className="opt" onClick={()=> done()}>mark as done</div>
            <div className="opt" onClick={()=> duplicate()}>dupplicate</div>
          </>
          }
        </div>
      </div> :
      <div className="menu">
      <button className="menu_elipsis" onClick={() => reveal()}>
      {'\u22EE'}
      </button>
        <div className="menu_opt" >
        {show == true &&
        <>
          <div className="opt" onClick={()=> duplicate()}>dupplicate</div>
        </>
        }
      </div>
    </div>}
    </section>
  )
}
