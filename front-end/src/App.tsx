import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import TodoPage from './pages/TodosPages/TodoPage'
import TodosPage from './pages/TodosPages/TodosPage'
import EditTodoPage from './pages/TodosPages/EditTodoPage'
import NewTodoPage from './pages/TodosPages/NewTodoPage'
import CategoriesPage from './pages/CategoriesPages/CategoriesPage'
import CategoryPage from './pages/CategoriesPages/CategoryPage'
import EditCategoryPage from './pages/CategoriesPages/EditCategoryPage'
import NewCategoryPage from './pages/CategoriesPages/NewCategoryPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todos" element={<TodosPage/>} />
        <Route path="/todos/:id" element={<TodoPage/>} />
        <Route path="/todos/new" element={<NewTodoPage/>} />
        <Route path="/todos/:id/edit" element={<EditTodoPage/>} />
        <Route path="/categories" element={<CategoriesPage/>} />
        <Route path="/categories/new" element={<NewCategoryPage/>} />
        <Route path="/categories/:id" element={<CategoryPage/>} />
        <Route path="/categories/:id/edit" element={<EditCategoryPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
