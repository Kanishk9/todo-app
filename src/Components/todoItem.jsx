import "../Styles/todoItem.css"

function TodoItem(props) {
  const onClick = (e, id) =>{
    e.preventDefault();
    props.onDeleteHandler(id);
  }

  return (
    <div className="todoitem">
      <span>Task: {props.todo.task}</span>
      <br />
      <span>Priority: {props.todo.priority}</span>
      <br />
      <span>
        <button onClick={(e) => onClick(e,props.todo.id)} >Delete</button>
      </span><br /><br />
    </div>
  );
}

export default TodoItem;
