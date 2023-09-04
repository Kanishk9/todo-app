import AddTodos from "./addTodos";
import "../Styles/todos.css";
import NavBar from "./header";
import { useState } from "react";
import ShowTodos from "./showTodos";

function Todos() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Gym",
      priority: 1
    },
    {
      id: 2,
      task: "Guitar tutorial",
      priority: 3
    }
  ]);

  const onSubmitHandler = (task, priority) => {
    let id;
    if(todos.length !== 0){
      id = todos[todos.length-1].id + 1;
    }
    else{
      id = 1;
    }
    const newTodo = {
      id: id,
      task: task,
      priority: priority
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const onDeleteHandler = (id) => {
    console.log("Delete button is clicked", id);
    const newTodo = todos.filter( (todo) => {
      return id !== todo.id;
    } )
    setTodos(newTodo);
  }

  return (
    <div className="main-body">
        <h1>Todos App</h1>
        <NavBar />
        <AddTodos onSubmitHandler={onSubmitHandler} />
        <ShowTodos todos={todos} onDeleteHandler={onDeleteHandler} />
    </div>
  );
}

export default Todos;
