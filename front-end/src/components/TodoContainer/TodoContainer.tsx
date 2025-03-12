import { useState } from "react";
import {
  archiveTodo,
  duplicateTodo,
  editTodo,
  Todo,
} from "../../../services/todo-services";
import "./TodoContainer.css";
import Modal from "../Modal/Modal";
import TodoForm from "../TodoForm/TodoForm";
import { TodoFormData } from "../TodoForm/schema";

interface TodoContainerProps {
  todo: Todo;
  extraClass: string;
}

export default function TodoContainer({
  todo,
  extraClass = "",
}: TodoContainerProps) {
  const [show, setShow] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  function done() {
    archiveTodo(`${todo.id}`)
      .then()
      .catch((e) => console.log(e));
    window.location.reload();
  }

  function duplicate() {
    const id = `${todo.id}`;
    duplicateTodo(id)
      .then()
      .catch((e) => console.log(e));
    window.location.reload();
  }

  function reveal() {
    setShow(!show);
  }

  function editTodoFormSubmit(data: TodoFormData) {
    const id = `${todo.id}`;
    editTodo(id, data)
      .then()
      .catch((e) => console.log(e));
    window.location.reload();
  }

  return (
    <section key={todo.id} className={`todo ${extraClass}`}>
      <div>
        <h2>{todo.title}</h2>
        <h3>{todo.category?.name || "No Category"}</h3>
      </div>
      {!todo.isArchived ? (
        <div className="menu">
          <button className="menu_elipsis" onClick={() => reveal()}>
            {"\u22EE"}
          </button>
          <div className="menu_opt">
            {show == true && (
              <>
                <div className="opt" onClick={() => setOpenModal(true)}>
                  edit
                </div>
                <div className="opt" onClick={() => done()}>
                  mark as done
                </div>
                <div className="opt" onClick={() => duplicate()}>
                  dupplicate
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="menu">
          <button className="menu_elipsis" onClick={() => reveal()}>
            {"\u22EE"}
          </button>
          <div className="menu_opt">
            {show == true && (
              <>
                <div className="opt" onClick={() => duplicate()}>
                  dupplicate
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {openModal && (
        <Modal>
          <TodoForm
            onSubmit={editTodoFormSubmit}
            title={"Edit"}
            existingValue={todo.title}
          />
        </Modal>
      )}
    </section>
  );
}
