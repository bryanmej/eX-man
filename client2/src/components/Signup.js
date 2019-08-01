import React from "react";
import AuthService from "./services/Service";
import useForm from "./hooks/useForm";
import "../App.css";

function Signup(props) {
  const service = new AuthService();
  const [form, handleInputs] = useForm();
  const handleSignup = () => {
    service
      .signup(form)
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
    props.history.push("/login");
  };

  return (
    <div className="signup">
      <form className="sign-form" onSubmit={handleSignup}>
        <h2 className="text-center">Sign up</h2>
        <label className="font-weight-bold">Username:</label>
        <input type="text" name="username" onChange={e => handleInputs(e)} />
        <label className="font-weight-bold">Password:</label>
        <input
          type="password"
          name="password"
          onChange={e => handleInputs(e)}
        />
        <br />
        <input className="btn btn-info" type="submit" value="Sign up" />
      </form>
    </div>
  );
}

export default Signup;
