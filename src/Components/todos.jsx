import IndexTodo from "./indexTodo";
import Header from "./header";
import AddTodos from "./addTodos";
import ShowTodos from "./showTodos";

import "../Styles/todos.css";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function Todos() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Gym",
      priority: 1,
    },
    {
      id: 2,
      task: "Guitar tutorial",
      priority: 3,
    },
  ]);

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
  };

  const onDeleteHandler = (id) => {
    console.log("Delete button is clicked", id);
    const newTodo = todos.filter((todo) => {
      return id !== todo.id;
    });
    setTodos(newTodo);
  };

  return (
    <div className="main-body">
      <Header />
      <Routes>
        <Route index element={<IndexTodo />} />
        <Route path="/addTodos" element={<AddTodos onSubmitHandler={onSubmitHandler} />} />
        <Route path="/showTodos" element={<ShowTodos todos={todos} onDeleteHandler={onDeleteHandler} />} />
        {/* <Route path="/apiTodos" element={<ApiTodos/>} /> */}
      </Routes>
    </div>
  );
}

export default Todos;
