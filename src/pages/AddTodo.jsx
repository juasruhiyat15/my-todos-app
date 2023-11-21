import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addTodos } from "../utils/local";

function AddTodoPage(props) {
  let navigate = useNavigate();

  let [todo, setTodo] = useState({
    title: "",
    description: "",
    createdAt: "",
  });

  function onSubmitHandler(event) {
    event.preventDefault();
    addTodos(todo);
    navigate("/");
  }

  return (
    <div className="p-2 filter">
      <strong className="fs-1 text-center text-black">Form Add Todo</strong>
      <Form
        className="row g-3 m-5 text-light"
        onSubmit={(event) => {
          onSubmitHandler(event);
        }}
      >
        <Form.Group className="col-md-6 text-start">
          <Form.Label className="text-black">Title</Form.Label>
          <Form.Control
            onChange={(event) => {
              const value = event.target.value;
              setTodo({ ...todo, title: value });
            }}
            type="text"
            placeholder="Tambahkan Title"
            required
          />
        </Form.Group>
        <Form.Group className="col-md-6 text-start">
          <Form.Label className="text-black">CreatedAt</Form.Label>
          <Form.Control
            onChange={(event) => {
              const value = event.target.value;
              setTodo({ ...todo, createdAt: value });
            }}
            type="date"
            required
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label className='col-md-12 text-start text-black mt-3'>Desctiption Todos</Form.Label>
          <Form.Control onChange={(event) => {
            const value = event.target.value;
            setTodo({
              ...todo,
              description: value,
            });
            console.log(todo);
          }}
            as="textarea"
            rows={3}
            required
          />
        </Form.Group>

        {
          todo.title && todo.createdAt && todo.description ? (
            <Button className='mt-3' variant='primary' type='submit'>Submit</Button>
          ) : (
            <Button className='mt-3' variant='danger' disabled type='submit'>Submit</Button>
          )
        }
      </Form>
    </div>
  );
}

export default AddTodoPage;


