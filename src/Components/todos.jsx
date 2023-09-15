import IndexTodo from "./indexTodo";
import Header from "./header";
import AddTodos from "./addTodos";
import ShowTodos from "./showTodos";

import "../Styles/todos.css";

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

function Todos() {
  let currentTodos;
  if (localStorage.getItem("todos") === null) {
    currentTodos = [];
  } else {
    currentTodos = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(currentTodos);

  const onSubmitHandler = (task, priority) => {
    let id;
    if (todos.length !== 0) {
      id = todos[todos.length - 1].id + 1;
    } else {
      id = 1;
    }
    const newTodo = {
      id: id,
      task: task,
      priority: priority,
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
    return true;
  };

  const onDeleteHandler = (id) => {
    console.log("Delete button is clicked", id);
    const newTodo = todos.filter((todo) => {
      return id !== todo.id;
    });
    setTodos(newTodo);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="main-body">
      <Header />
      <Routes>
        <Route index element={<IndexTodo />} />
        <Route
          path="/addTodos"
          element={<AddTodos todos={todos} onSubmitHandler={onSubmitHandler} />}
        />
        <Route
          path="/showTodos"
          element={
            <ShowTodos todos={todos} onDeleteHandler={onDeleteHandler} />
          }
        />
        {/* <Route path="/apiTodos" element={<ApiTodos/>} /> */}
      </Routes>
    </div>
  );
}

export default Todos;
