import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation, useHistory, useNavigate } from 'react-router-dom';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import './App.css';
import Home from './pages/Home';
import AddTodo from './pages/AddTodo';
import LoginPage from './pages/LoginPage'
import { getAccessToken, putAccessToken } from './utils/network';
import Register from './pages/Register';

function RequireAuth() {
  let auth = getAccessToken();
  let location = useLocation();

  if (!auth) {
    return <Navigate to="/login"></Navigate>
  }
  return <Outlet />
}

function App() {
  const navigate = useNavigate();

  function LogOut() {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className='App'>
      <Navbar className='justify-content-between' bg="dark" variant='dark' >
        <Navbar.Brand href='/'>
          <h1 className='ms-5'>My Todo App</h1>
        </Navbar.Brand>
        {localStorage.key('user-info') ?
          <Nav>
            <NavDropdown className='me-5' title="Welcome">
              <NavDropdown.Item onClick={LogOut}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          : null
        }
      </Navbar>
      <main>
        <Routes>
          <Route path='/login' element={< LoginPage />} />
          <Route path='/register' element={< Register />} />
          <Route element={<RequireAuth />}>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<AddTodo />} />
          </Route>
        </Routes>
      </main>
    </div>
  )

}

export default App;
