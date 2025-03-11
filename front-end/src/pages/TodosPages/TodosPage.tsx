import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import "../TodosPages/TodosPage.css";
import {
  Todo,
  createTodo,
  getActiveTodos,
  getAllTodos,
} from "../../../services/todo-services";
import {
  Category,
  createCategory,
  getAllCategories,
} from "../../../services/category-services";
import TodoContainer from "../../components/TodoContainer/TodoContainer";
import CategoryList from "../../components/CategoryList/CategoryList";
import Modal from "../../components/Modal/Modal";
import TodoForm from "../../components/TodoForm/TodoForm";
import { TodoFormData } from "../../components/TodoForm/schema";
import CategoryForm from "../../components/CategoryForm/CategoryForm";
import { CategoryFormData } from "../../components/CategoryForm/schema";

const TodosPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [activeTodos, setActiveTodos] = useState<Todo[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchCategory, setSearchCategory] = useSearchParams();
  const [searchFilter, setSearchFilter] = useState("all");
  const [openTodoModal, setOpenTodoModal] = useState(false);
  const [openCategoryModal, setOpenCategoryModal] = useState(false);

  console.log(searchCategory);

  useEffect(() => {
    getAllCategories()
      .then((categories) => setCategories(categories))
      .catch((e) => console.log(e));
  }, []);

  // active and completed todos
  useEffect(() => {
    getAllTodos()
      .then((todos) => setTodos(todos))
      .catch((e) => console.log(e));
  }, []);

  // active todos only
  useEffect(() => {
    getActiveTodos()
      .then((activeTodos) => setActiveTodos(activeTodos))
      .catch((e) => console.log(e));
  }, []);

  function onClick(category: string) {
    const params = new URLSearchParams();
    params.set("category", `${category}`);
    setSearchFilter(`${category}`);
    setSearchCategory(params);
  }

  const todoFormSubmit = (data: TodoFormData) => {
    createTodo(data)
      .then((todo) => {
        console.log("created " + todo.title);
      })
      .catch((e) => console.log(e));
  };

  const categoryFormSubmit = (data: CategoryFormData) => {
    createCategory(data)
      .then((category) => {
        console.log("created " + category.name);
      })
      .catch((e) => console.log(e));
  };

  function openModalTodo() {
    setOpenTodoModal(true);
  }
  function openModalCategory() {
    setOpenCategoryModal(true);
  }

  return (
    <>
      <h1>All ToDos Page</h1>
      <div className="main">
        <section className="sidebar">
          <CategoryList data={categories} />
          <div style={{ margin: "1em" }}>
            <button onClick={() => onClick("completed")}>
              See All Completed
            </button>
            <button onClick={() => onClick("all")}>See All Active</button>
            <button onClick={() => openModalCategory()}>
              Create new category
            </button>
          </div>
        </section>
        <div className="main_panel">
          {activeTodos
            .filter((activeTodo) => activeTodo.category?.name == searchFilter)
            .map((todo) => (
              <TodoContainer key={todo.id} todo={todo} />
            ))}

          {searchFilter == "all" &&
            activeTodos.map((todo) => (
              <TodoContainer key={todo.id} todo={todo} />
            ))}

          {searchFilter == "completed" &&
            todos
              .filter((todo) => todo.isArchived == true)
              .map((todo) => <TodoContainer key={todo.id} todo={todo} />)}
        </div>
      </div>
      {openTodoModal && (
        <Modal>
          <TodoForm onSubmit={todoFormSubmit} />
        </Modal>
      )}
      {openCategoryModal && (
        <Modal>
          <CategoryForm onSubmit={categoryFormSubmit} />
        </Modal>
      )}
      <button className="btn_round" onClick={() => openModalTodo()}>
        +
      </button>
    </>
  );
};
export default TodosPage;
