import TodoItem from "./todoItem";

function ShowTodos(props) {
  return (
    <div className="showtodos">
      <h3>Showing Todos</h3>
      {props.todos.length === 0 ? "Todos list is empty":
        props.todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} onDeleteHandler={props.onDeleteHandler} />;
        })
      }
      
    </div>
  );
}

export default ShowTodos;
