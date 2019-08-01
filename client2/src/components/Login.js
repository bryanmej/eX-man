import React from "react";
import AuthService from "./services/Service";
import useForm from "./hooks/useForm";
import "../App.css";

function Login(props) {
  const service = new AuthService();
  const [form, handleInputs] = useForm();
  const handleLogin = () => {
    service
      .login(form)
      .then(response => {
        console.log(response);
        props.history.push("/profile");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="login">
      <div className="login-form">
        <h2 className="text-center">Login</h2>
        <label>Username:</label>
        <input type="text" name="username" onChange={e => handleInputs(e)} />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={e => handleInputs(e)}
        />
        <br />
        <button className="btn btn-info" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
