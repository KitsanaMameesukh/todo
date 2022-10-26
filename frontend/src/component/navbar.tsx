import "./../App.css";
import "./../component/todo.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../auth/context";
import jwtDecode from "jwt-decode";

export default function Navbar() {
  const username = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navbar__title navbar__item">
        <Link to={"/"} className="nav-link">
          Todo List
        </Link>
      </div>
      <div className="navbar__item">
        {username.access_token ? (
          `${username.username}`
        ) : (
          <Link to={"/login"} className="nav-link">
            Login
          </Link>
        )}
      </div>
      <div className="navbar__item">
        <Link to={"/register"} className="nav-link">
          Register
        </Link>
      </div>
    </div>
  );
}
