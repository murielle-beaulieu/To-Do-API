import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import TodoPage from './pages/TodoPage'
import TodosPage from './pages/TodosPage'
import EditTodoPage from './pages/EditTodoPage'
import NewTodoPage from './pages/NewTodoPage'
import CategoriesPage from './pages/CategoriesPage'
import CategoryPage from './pages/CategoryPage'
import EditCategoryPage from './pages/EditCategoryPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todos" element={<TodosPage/>} />
        <Route path="/todos/:id" element={<TodoPage/>} />
        <Route path="/todos/new" element={<NewTodoPage/>} />
        <Route path="/todos/:id/edit" element={<EditTodoPage/>} />
        <Route path="/categories" element={<CategoriesPage/>} />
        <Route path="/categories/:id" element={<CategoryPage/>} />
        <Route path="/categories/:id/edit" element={<EditCategoryPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
