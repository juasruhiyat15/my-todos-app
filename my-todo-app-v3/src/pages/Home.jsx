import React, { useState, useEffect } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import TableList from '../components/TodoList';
import { deleteTodos, getTodos } from '../utils/local';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Home() {
    let navigate = useNavigate();
    let [search, setSearch] = useState("");
    let [todos, setTodos] = useState([]);

    useEffect(() => {
        let data = getTodos();
        setTodos(data);
    }, []);

    let handleChangeSearch = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value);
    };

    const onDeleteHandler = (index) => {
        deleteTodos(index);
        setTodos(getTodos());
    };

    return (
        <div className="App">
            <div>
                <h2 className='mt-5 center'>Daftar Todos</h2>
                <div className='container'>
                    <div className="row g-1 text-center mt-4 justify-content-center">
                        <Form className='col-sm-2 col-md-7'>
                            <InputGroup>
                                <Form.Control className='form-control' type="text" placeholder='Cari Berdasarkan Title'
                                    onChange={(event) => {
                                        handleChangeSearch(event);
                                    }}
                                    value={search}
                                />
                            </InputGroup>
                        </Form>
                        <Button className='col-2 col-sm-2 ms-4' onClick={() => {
                            navigate('/add');
                        }}>
                            Add Todo
                        </Button>
                    </div>
                </div>
                {
                    <div className='container mt-5'>
                        <div className="row">
                            {todos.filter((todo)=>{
                                return todo.title.toLowerCase().includes(search.toLowerCase());
                            }).map((todo, index) => {
                                return (
                                    <TableList
                                        onDelete={onDeleteHandler}
                                        key={todo.id}
                                        index={index}
                                        id={todo.id}
                                        title={todo.title}
                                        description={todo.description}
                                        createdAt={todo.createdAt}
                                    >
                                    </TableList>
                                );
                            })}
                        </div>
                    </div>
                }
            </div>
        </div>

    );
}

export default Home;
