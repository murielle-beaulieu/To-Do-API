import { CategoryFormData } from "../src/components/CategoryForm/schema";

export interface Category {
  id: number;
  name: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export const getAllCategories = async () => {
  const response = await fetch('http://localhost:8080/categories');
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  return (await response.json()) as Category[];
}

export const getCategory = async (id: string) => {
  const response = await fetch('http://localhost:8080/categories/' + id);
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  return (await response.json()) as Category;
}

export const editCategory = async (id: string, data: CategoryFormData) => {
  const response = await fetch('http://localhost:8080/categories/' + id + '/edit', {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type':'application/json',
    },
  })
  if (!response.ok) {
    throw new Error('Failed to update');
  }
  return (await response.json()) as Category;
}
