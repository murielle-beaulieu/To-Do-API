import { useEffect, useState } from 'react';
import { Todo, getAllTodos } from '../../services/todo-services';

const TodosPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    getAllTodos()
    .then((todos) => setTodos(todos))
    .catch((e) => console.log(e));
  }, []);

  console.log(todos);
  return <h1>All ToDos Page</h1>;
};
export default TodosPage;
