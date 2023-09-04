import "../Styles/header.css";

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <span>Add Todos</span>
        </li>
        <li>
          <span>Show Todos</span>
        </li>
        <li>
          <span>API Todos</span>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
