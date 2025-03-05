import { useEffect, useState } from 'react';
import { Todo, getAllTodos } from '../../../services/todo-services';
import TodoContainer from '../../components/TodoContainer/TodoContainer';

const TodosPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getAllTodos()
    .then((todos) => setTodos(todos))
    .catch((e) => console.log(e));
  }, []);

  return (
  <>
  <h1>All ToDos Page</h1>
  {todos.map((e) => ( <TodoContainer key={e.id} todo={e}/>))}
  </>
  );
};
export default TodosPage;
