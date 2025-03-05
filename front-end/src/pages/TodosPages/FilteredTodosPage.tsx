import { useEffect, useState } from 'react';
import { Todo, getAllTodos } from '../../../services/todo-services';
import TodoContainer from '../../components/TodoContainer/TodoContainer';
import { useSearchParams } from 'react-router';

const TodosPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const {category = 'x'} = useSearchParams();
  const [searchCategory, setSearchCategory] = useSearchParams();

  useEffect(() => {
    setSearchCategory();
    getAllTodos()
    .then((todos) => setTodos(todos))
    .catch((e) => console.log(e));
  }, []);

  console.log(searchCategory)

  return (
  <>
  <h1>Filtered ToDos Page</h1>
  {todos.map((e) => ( <TodoContainer key={e.id} todo={e}/>))}
  </>
  );
};
export default TodosPage;
