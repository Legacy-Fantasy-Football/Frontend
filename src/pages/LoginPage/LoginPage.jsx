import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form  from "react-bootstrap/Form";
import "./LoginPage.css"

export default function LoginPage(){
  const {loginUser } = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  return (
    <div className="login-background">
      <div className="header">
        <h1>Welcome to Legacy Fantasy Football!</h1>
        <h6>Are you ready to find out who the best owner in your league is?</h6>
      </div>
      <div className="login-container">
          <form onSubmit={handleSubmit} className="box pb-5">
            <h1 className="pt-5">Login</h1>
            <p className="text-muted">Please enter your login and password!</p>
            <input type="text" id="username" placeholder="Username" />
            <input type="password" id="password" placeholder="Password" />
            <a className="forgot text-muted" href="/register">Don't have an account?</a>
            <input type="submit" name="" value="Login" href="#" />
          </form>
      </div>
  </div>
  );
};