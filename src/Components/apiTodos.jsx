import { useEffect, useState } from "react";
import ShowTodos from "./showTodos";

function ApiTodos(props) {
  const [todos, setTodos] = useState([]);

  const fetchData = () => {
    fetch("https://dummyjson.com/todos?limit=7")
      .then((response) => {
        if (!response.ok) {
          console.log("Error status:- ", response.status);
          return;
        }
        return response.json();
      })
      .then((data) => {
        let dataSet = data.todos.map((obj) => {
          const newObject = {
            id : obj.id,
            priority : obj.id,
            todo : obj.todo
          }
          return newObject;
        });
        setTodos(dataSet);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ShowTodos todos={todos} onDeleteHandler={props.onDeleteHandler} disabled={1} />
    </div>
  );
}

export default ApiTodos;
