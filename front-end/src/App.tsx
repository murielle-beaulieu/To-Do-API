import { BrowserRouter, Route, Routes } from 'react-router'
import TodosPage from './pages/TodosPages/TodosPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodosPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
