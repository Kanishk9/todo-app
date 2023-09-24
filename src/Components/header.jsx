import { Link } from "react-router-dom";
import "../Styles/header.css";

function Header() {
  return (
    <div className="navbar">
      <h1>Todos App</h1>
      <ul>
        <div className="header-container">
          <Link to="/addTodos">
            <li>
              <span>Add Todos</span>
            </li>
          </Link>
          <Link to="/showTodos">
            <li>
              <span>Show Todos</span>
            </li>
          </Link>
          <Link to="/apiTodos">
            <li>
              <span>API Todos</span>
            </li>
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default Header;
