import { useEffect, useState } from "react";
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
import { useSearchParams } from "react-router";

const TodosPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [activeTodos, setActiveTodos] = useState<Todo[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchCategory, setSearchCategory] = useSearchParams();
  const [searchFilter, setSearchFilter] = useState("all");
  const [openTodoModal, setOpenTodoModal] = useState(false);
  const [openCategoryModal, setOpenCategoryModal] = useState(false);

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

  const search = (category: string) => {
    const params = new URLSearchParams();
    params.set("category", `${category}`);
    setSearchFilter(`${category}`);
    setSearchCategory(params);
    console.log(searchCategory);
  };

  const todoFormSubmit = (data: TodoFormData) => {
    createTodo(data)
      .then((todo) => {
        console.log("created " + todo.title);
      })
      .catch((e) => console.log(e));
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
          <CategoryList categories={categories} onSearch={search} />
          <button
            onClick={() => openModalCategory()}
            className="categories_create">
            <h3>Create new category</h3>
          </button>
        </section>
        <div className="main_panel">
          {searchFilter == "completed" ? (
            <h2 className="done_title">Completed Tasks</h2>
          ) : (
            <div className="display">
              <h2>Active Tasks</h2>
              <h3>Category: {searchFilter}</h3>
            </div>
          )}
          {activeTodos
            .filter((activeTodo) => activeTodo.category?.name == searchFilter)
            .map((todo) => (
              <TodoContainer key={todo.id} todo={todo} extraClass={""} />
            ))}
          {searchFilter == "all" &&
            activeTodos.map((todo) => (
              <TodoContainer key={todo.id} todo={todo} extraClass={""} />
            ))}

          {searchFilter == "completed" &&
            todos
              .filter((todo) => todo.isArchived == true)
              .map((todo) => (
                <TodoContainer
                  key={todo.id}
                  todo={todo}
                  extraClass={"done_todo"}
                />
              ))}
        </div>
      </div>
      {openTodoModal && (
        <Modal>
          <TodoForm onSubmit={todoFormSubmit} title={"Create a "} existingValue={""}/>
        </Modal>
      )}
      {openCategoryModal && (
        <Modal>
          <CategoryForm onSubmit={categoryFormSubmit} title={"Create a "} existingValue={""} />
        </Modal>
      )}
      <button className="btn_round" onClick={() => openModalTodo()}>
        +
      </button>
    </>
  );
};
export default TodosPage;
