import React from "react";
import useForm from "./hooks/useForm";
import AuthService from "./services/Service";
import "../App.css";

function CreateExpense(props) {
  const service = new AuthService();
  const [form, handleInputs] = useForm();
  const createExp = () => {
    service
      .createExpense(form)
      .then(response => {
        console.log(response);
        props.history.push("/profile");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="form-group">
      <form
        className="exp-form display"
        name="expense"
        method="post"
        onSubmit={createExp}
      >
        <input type="hidden" name="expense" value="expense" />
        <label>Name of expense:</label>
        <input
          type="text"
          name="name"
          className="form-control"
          onChange={e => handleInputs(e)}
        />
        <label>Amount:</label>
        <input
          type="text"
          name="price"
          className="form-control"
          onChange={e => handleInputs(e)}
        />
        <br />
        <input type="submit" className="btn btn-success" value="Submit" />
      </form>
    </div>
  );
}

export default CreateExpense;
