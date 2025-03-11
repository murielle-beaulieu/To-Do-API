import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
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
import CategoryList from "../../components/CategoryList/CategoryList";
import Modal from "../../components/Modal/Modal";
import TodoForm from "../../components/TodoForm/TodoForm";
import { TodoFormData } from "../../components/TodoForm/schema";
import CategoryForm from "../../components/CategoryForm/CategoryForm";
import { CategoryFormData } from "../../components/CategoryForm/schema";
import TodoContainer from "../../components/TodoContainer/TodoContainer";

const TodosPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [activeTodos, setActiveTodos] = useState<Todo[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchCategory, setSearchCategory] = useSearchParams();
  const [searchFilter, setSearchFilter] = useState("all");
  const [openTodoModal, setOpenTodoModal] = useState(false);
  const [openCategoryModal, setOpenCategoryModal] = useState(false);

  console.log(searchCategory);

  const navigate = useNavigate();

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
      // medium happy with this
      window.location.reload();
  };

  const categoryFormSubmit = (data: CategoryFormData) => {
    createCategory(data)
      .then((category) => {
        console.log("created " + category.name);
      })
      .catch((e) => console.log(e));
      window.location.reload();
  };

  function openModalTodo() {
    setOpenTodoModal(!openTodoModal);
  }
  function openModalCategory() {
    setOpenCategoryModal(!openCategoryModal);
  }

  return (
    <>
      <h1>Things to do</h1>
      <div className="main">
        <section className="sidebar">
          <CategoryList data={categories} />
          <div className="categories_options">
            <button onClick={() => onClick("completed")} className="filter">
              <h3>See All Completed</h3>
            </button>
            <button onClick={() => onClick("all")} className="filter">
              <h3>See All Active</h3>
            </button>
          </div>
          <button
            onClick={() => openModalCategory()}
            className="categories_create"
          >
            <h3>Create new category</h3>
          </button>
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
