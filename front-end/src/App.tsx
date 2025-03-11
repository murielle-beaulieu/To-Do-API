import { BrowserRouter, Route, Routes } from 'react-router'
import TodoPage from './pages/TodosPages/TodoPage'
import TodosPage from './pages/TodosPages/TodosPage'
import EditTodoPage from './pages/TodosPages/EditTodoPage'
import CategoriesPage from './pages/CategoriesPages/CategoriesPage'
import CategoryPage from './pages/CategoriesPages/CategoryPage'
import EditCategoryPage from './pages/CategoriesPages/EditCategoryPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodosPage/>} />
        <Route path="/todos/:id" element={<TodoPage/>} />
        <Route path="/todos/:id/edit" element={<EditTodoPage/>} />
        <Route path="/categories" element={<CategoriesPage/>} />
        <Route path="/categories/:id" element={<CategoryPage/>} />
        <Route path="/categories/:id/edit" element={<EditCategoryPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
