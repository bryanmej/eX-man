import React from "react";
import useForm from "./hooks/useForm";
import AuthService from "./services/Service";
import "../App.css";

function CreateReminder() {
  const service = new AuthService();
  const [form, handleInputs] = useForm();

  const createRem = () => {
    service
      .createReminder(form)
      .then(response => {
        console.log(response);
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="form-group">
      <div className="rem-form display">
        <label>Date:</label>
        <input
          type="date"
          name="date"
          className="form-control"
          onChange={e => handleInputs(e)}
        />
        <label>Reminder/Comment</label>
        <input
          type="textarea"
          name="reminder"
          className="form-control"
          onChange={e => handleInputs(e)}
        />
        <br />
        <button onClick={createRem} className="btn btn-success">
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreateReminder;
