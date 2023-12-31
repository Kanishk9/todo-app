import { useRef, useState } from "react";
import "../Styles/addTodos.css";

function AddTodos(props) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const taskRef = useRef();
  const priorityRef = useRef();

  const onClickHandler = (e) => {
    e.preventDefault();
    console.log("submit button clicked", task, priority);
    if (formValidation(task, priority)) {
      if (props.onSubmitHandler(task, priority) === true) {
        setIsVisible(true);
        setTimeout(() => setIsVisible(false), 2000);
      }
    }
  };

  const formValidation = (task, priority) => {
    if (task === "") {
      alert("Please enter a valid task");
      taskRef.current.focus();
      return false;
    }
    if (priority === "") {
      alert("Please enter a valid priority");
      priorityRef.current.focus();
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
          ref={taskRef}
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
          ref={priorityRef}
          onChange={(e) => {
            setPriority(e.target.value);
          }}
        />
        <br />
        <input id="submit" type="submit" onClick={onClickHandler} />
      </form>
      <div className={isVisible ? "is-visible" : "in-visible"}>
        <p className="success-alert">
          <b>SUCCESS!</b>&nbsp; Todo added.
        </p>
      </div>
    </div>
  );
}

export default AddTodos;
