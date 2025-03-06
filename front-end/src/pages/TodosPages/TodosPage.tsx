import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { Todo, getAllTodos } from '../../../services/todo-services';
import { Category, getAllCategories } from '../../../services/category-services';
import TodoContainer from '../../components/TodoContainer/TodoContainer';

const TodosPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchCategory, setSearchCategory] = useSearchParams();
  const [searchFilter, setSearchFilter] = useState("active");

  useEffect(() => {
    getAllCategories()
    .then((categories) => setCategories(categories))
    .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    getAllTodos()
    .then((todos) => (setTodos(todos)))
    .catch((e) => console.log(e));
  }, []);

  // display active todos
  const activeTodos = todos.filter((todo) => !todo.isArchived);
  // display archived todos
  const completedTodos = todos.filter((todo) => todo.isArchived);


  function onClick(category: string) {
    const params = new URLSearchParams();
    params.set("category", `${category}`);
    setSearchFilter(`${category}`);
    setSearchCategory(params);
  }

  return (
  <>
    <h1>All ToDos Page</h1>
    {searchFilter == "active" ?
    activeTodos.map((todo) => ( <TodoContainer key={todo.id} todo={todo}/>)) :
    activeTodos.filter((todo) => (todo.category?.name == searchFilter)).map((todo) =>(<TodoContainer key={todo.id} todo={todo}/>))
    }

    {searchFilter == "completed" ?
    completedTodos.map((todo) => ( <TodoContainer key={todo.id} todo={todo}/>)) :
    completedTodos.filter((todo) => (todo.category?.name == searchFilter)).map((todo) =>(<TodoContainer key={todo.id} todo={todo}/>))
    }

    {/* WIP: will abstract in a category list component */}
      {categories.map((category) =>(
        <button onClick={() => onClick(category.name)}>
          Filter {category.name}
        </button>
      ))}
    <div style={{margin: "1em"}}>
      <button onClick={() => onClick("active")}>See All Active</button>
      <button onClick={() => onClick("completed")}>See All Completed</button>
    </div>
  </>
  );
};
export default TodosPage;
