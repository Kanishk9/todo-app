import { useState } from "react";
import "../Styles/addTodos.css";

function AddTodos(props) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");

  const onClickHandler = (e) => {
    e.preventDefault();
    console.log("submit button clicked", task, priority);
    if (formValidation(task, priority)) {
      props.onSubmitHandler(task, priority);
    }
  };

  const formValidation = (task, priority) => {
    if (task === "") {
      alert("Please enter a valid task");
      return false;
    }
    if (priority === "") {
      alert("Please enter a valid priority");
      return false;
    }

    //REGEX learn
    // if(){
    //   alert("Priority should only be a number");
    //   return false;
    // }
    return true;
  };

  return (
    <div>
      <h3>Add Todos</h3>
      <form className="" action="">
        <label className="input-label" htmlFor="task">
          Task:
        </label>
        <br />
        <input
          id="task"
          name="task"
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          autoComplete="off"
        />
        <br />
        <label className="input-label" htmlFor="priority">
          Priority:
        </label>
        <br />
        <input
          id="priority"
          name="priority"
          type="number"
          value={priority}
          onChange={(e) => {
            setPriority(e.target.value);
          }}
        />
        <br />
        <input id="submit" type="submit" onClick={onClickHandler} />
      </form>
      <span className="success-alert">Task added successfully</span>
    </div>
  );
}

export default AddTodos;
