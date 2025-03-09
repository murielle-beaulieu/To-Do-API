import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import {
  Todo,
  getActiveTodos,
  getAllTodos,
} from "../../../services/todo-services";
import {
  Category,
  getAllCategories,
} from "../../../services/category-services";
import TodoContainer from "../../components/TodoContainer/TodoContainer";

const TodosPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [activeTodos, setActiveTodos] = useState<Todo[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchCategory, setSearchCategory] = useSearchParams();
  const [searchFilter, setSearchFilter] = useState("all");

  useEffect(() => {
    getAllCategories()
      .then((categories) => setCategories(categories))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    getAllTodos()
      .then((todos) => setTodos(todos))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    getActiveTodos()
      .then((activeTodos) => setActiveTodos(activeTodos))
      .catch((e) => console.log(e));
  }, []);

  console.log(activeTodos);

  // display active todos
  // const allTodos = activeTodos.filter((todo) => todo);
  // display archived todos
  // const completedTodos = todos.filter((todo) => todo.isArchived);

  function onClick(category: string) {
    const params = new URLSearchParams();
    params.set("category", `${category}`);
    setSearchFilter(`${category}`);
    setSearchCategory(params);
  }

  return (
    <>
      <h1>All ToDos Page</h1>
      {}
      {/* {
        searchFilter == "active"
          ? activeTodos.map((todo) => (
              <TodoContainer key={todo.id} todo={todo} />
            ))
          : activeTodos
              .filter(
                (todo) =>
                  !todo.isArchived && todo.category?.name == searchFilter
              )
              .map((todo) => <TodoContainer key={todo.id} todo={todo} />)
        // console.log(activeTodos.filter((todo) => (!todo.isArchived && todo.category?.name == searchFilter )))
      }

      {searchFilter == "completed"
        ? completedTodos.map((todo) => (
            <TodoContainer key={todo.id} todo={todo} />
          ))
        : completedTodos
            .filter((todo) => todo.category?.name == searchFilter)
            .map((todo) => <TodoContainer key={todo.id} todo={todo} />)} */}

      {activeTodos
        .filter((activeTodo) => activeTodo.category?.name == searchFilter)
        .map((todo) => (
          <TodoContainer key={todo.id} todo={todo} />
        ))}

      {searchFilter == "all" &&
        activeTodos.map((todo) => <TodoContainer key={todo.id} todo={todo} />)}

      {/* Will need to change in the  */}
      {searchFilter == "completed" &&
        todos
          .filter((todo) => todo.isArchived == true)
          .map((todo) => <TodoContainer key={todo.id} todo={todo} />)}

      {/* WIP: will abstract in a category list component */}
      <div>
        {categories.map((category) => (
          <button onClick={() => onClick(category.name)}>
            Filter {category.name}
          </button>
        ))}
        <button onClick={() => onClick("all")}>See All Active</button>
      </div>
      <div style={{ margin: "1em" }}>
        <button onClick={() => onClick("completed")}>See All Completed</button>
      </div>
    </>
  );
};
export default TodosPage;
