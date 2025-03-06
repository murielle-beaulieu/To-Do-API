import { TodoFormData } from "../src/components/TodoForm/schema";

export interface Todo {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  category: string;
  archivedAt: string;
  isArchived: boolean;
}

export const getAllTodos = async () => {
  const response = await fetch('http://localhost:8080/todos');
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  return (await response.json()) as Todo[];
}

export const getTodoById = async (id: string) => {
  const response = await fetch('http://localhost:8080/todos/' + id);
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  return (await response.json()) as Todo;
}

export const createTodo = async (data: TodoFormData) => {
  const response = await fetch ('http://localhost:8080/todos',
  { method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type':'application/json',
    },
  })
  if (!response.ok) {
    throw new Error('Failed to create');
  }
  return (await response.json()) as Todo;
}

export const editTodo = async (id: string, data: TodoFormData) => {
  const response = await fetch('http://localhost:8080/todos/' + id + '/edit', {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type':'application/json',
    },
  })
  if (!response.ok) {
    throw new Error('Failed to update');
  }
  return (await response.json()) as Todo;
}

export const archiveTodo = async (id: string) => {
  const response = await fetch('http://localhost:8080/todos/' + id, {
    method: 'DELETE',
    headers: {
      'Content-Type':'application/json',
    },
  })
  if (!response.ok) {
    throw new Error('Failed to update');
  }
  return (await response.json());
}
