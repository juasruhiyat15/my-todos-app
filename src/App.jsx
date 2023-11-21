import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddTodo from './pages/AddTodo';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;