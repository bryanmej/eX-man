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
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="form-group">
      <form className="rem-form display" onSubmit={createRem}>
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
        <input type="submit" className="btn btn-success" value="Submit" />
      </form>
    </div>
  );
}

export default CreateReminder;
