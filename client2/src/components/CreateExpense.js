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
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="form-group">
      <div className="exp-form display">
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
        <button onClick={createExp} className="btn btn-success">
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreateExpense;
